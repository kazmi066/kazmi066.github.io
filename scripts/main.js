"use strict";

import { blogs } from "../data/blogs.js";
import { socialButtons } from "../data/social-buttons.js";
import { projects, funLinks } from "../data/projects.js";
document.documentElement.dataset.theme = "dark";

function appInit() {
  const blogContainer = document.getElementById("blogs-list");
  if (blogContainer) {
    blogContainer.innerHTML = "";
    blogs.forEach((blogItem) => {
      const card = document.createElement("external-card-link");
      card.url = blogItem.url;
      card.title = blogItem.title;
      blogContainer.appendChild(card);
    });
  }

  const projectsList = document.getElementById("projects-list");
  if (projectsList) {
    projectsList.innerHTML = "";
    const total = projects.length;

    projects.forEach((item) => {
      const li = document.createElement("li");
      li.className = "project-slide";

      let host = item.host;
      if (!host) {
        try {
          host = new URL(item.url).host.replace(/^www\./, "");
        } catch {
          host = item.url;
        }
      }

      const a = document.createElement("a");
      a.className = "project-card";
      a.href = item.url;
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      a.style.setProperty("--project-accent", item.accent || "#10b981");
      a.setAttribute(
        "aria-label",
        `${item.title}. ${item.blurb || ""} (opens in new tab)`.trim(),
      );

      const logo = item.logo
        ? `<img class="project-logo" src="${item.logo}" alt="" width="32" height="32" decoding="async">`
        : "";

      a.innerHTML = `
        <span class="project-title">${item.title}</span>
        <span class="project-logo-wrap" aria-hidden="true">${logo}</span>
        <span class="project-blurb">${item.blurb || ""}</span>
        <span class="project-meta">
          <span class="project-host">${host}</span>
          <span class="project-go" aria-hidden="true">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
              <path d="M7 17L17 7" />
              <path d="M8 7h9v9" />
            </svg>
          </span>
        </span>
      `;

      li.appendChild(a);
      projectsList.appendChild(li);
    });

    initProjectsCarousel(total);
  }

  const funList = document.getElementById("fun-list");
  if (funList) {
    funList.innerHTML = "";
    funLinks.forEach((item) => {
      const li = document.createElement("li");
      const card = document.createElement("external-card-link");
      card.url = item.url;
      card.title = item.title;
      if (item.preview) card.setAttribute("preview", item.preview);
      li.appendChild(card);
      funList.appendChild(li);
    });
  }

  const socialButtonsList = document.querySelector(
    ".footer-section .social-buttons-list",
  );
  if (socialButtonsList) {
    socialButtonsList.style.display = "flex";
    socialButtonsList.style.flexWrap = "wrap";
    socialButtonsList.innerHTML = "";
    socialButtons.forEach((socialButton) => {
      const li = document.createElement("li");
      const a = document.createElement("a");
      a.href = socialButton.url;
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      a.textContent = socialButton.title;
      a.className = "underline underline-offset-4 hover:text-emerald-500";
      const srLabel = document.createElement("span");
      srLabel.className = "sr-only";
      srLabel.textContent = " (opens in new tab)";
      a.appendChild(srLabel);
      li.appendChild(a);
      socialButtonsList.appendChild(li);
    });
  }

  const currentYear = new Date().getFullYear();
  const currentYearElement = document.getElementById("current-year");
  if (currentYearElement) {
    currentYearElement.textContent = currentYear;
  }

  function updateTime() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";
    const displayHours = hours % 12 || 12;
    const displayMinutes = minutes < 10 ? "0" + minutes : minutes;
    const timeString = `${displayHours}:${displayMinutes} ${ampm}`;

    const timeElement = document.getElementById("current-time");
    if (timeElement) {
      timeElement.textContent = timeString;
    }

    const weatherElement = document.getElementById("weather-emoji");
    if (weatherElement) {
      let emoji;
      if (hours >= 5 && hours < 12) {
        emoji = "🌅";
      } else if (hours >= 12 && hours < 17) {
        emoji = "☀️";
      } else if (hours >= 17 && hours < 20) {
        emoji = "🌆";
      } else {
        emoji = "🌙";
      }
      weatherElement.textContent = emoji;
    }
  }

  updateTime();
  setInterval(updateTime, 1000);
}

function initProjectsCarousel(total) {
  const track = document.getElementById("projects-track");
  const slides = Array.from(document.querySelectorAll(".project-slide"));
  const prev = document.getElementById("projects-prev");
  const next = document.getElementById("projects-next");
  const counter = document.getElementById("projects-counter");
  const status = document.getElementById("projects-status");
  if (!track || !slides.length || !prev || !next) return;

  const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;
  const desktop = window.matchMedia("(min-width: 640px)");
  let index = 0;
  let scrolling = false;
  const pad = (n) => String(n).padStart(2, "0");
  const visibleCount = () => (desktop.matches ? 2 : 1);
  const maxIndex = () => Math.max(0, slides.length - visibleCount());

  const setIndex = (nextIndex, announce = true) => {
    const clamped = Math.max(0, Math.min(maxIndex(), nextIndex));
    const changed = clamped !== index;
    index = clamped;
    prev.disabled = index === 0;
    next.disabled = index >= maxIndex();
    if (counter) counter.textContent = `${pad(index + 1)} / ${pad(total)}`;

    slides.forEach((slide, i) => {
      if (i === index) slide.setAttribute("aria-current", "true");
      else slide.removeAttribute("aria-current");
    });

    if (announce && changed && status) {
      const title = projects[index]?.title || `Project ${index + 1}`;
      status.textContent = `${title}, ${index + 1} of ${total}`;
    }
  };

  const goTo = (nextIndex) => {
    const clamped = Math.max(0, Math.min(maxIndex(), nextIndex));
    const slideRect = slides[clamped].getBoundingClientRect();
    const trackRect = track.getBoundingClientRect();
    const left = track.scrollLeft + (slideRect.left - trackRect.left);
    scrolling = true;
    track.scrollTo({
      left,
      behavior: reduceMotion ? "auto" : "smooth",
    });
    setIndex(clamped);
    window.setTimeout(() => {
      scrolling = false;
    }, reduceMotion ? 0 : 420);
  };

  prev.addEventListener("click", () => goTo(index - 1));
  next.addEventListener("click", () => goTo(index + 1));

  track.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      goTo(index - 1);
    } else if (event.key === "ArrowRight") {
      event.preventDefault();
      goTo(index + 1);
    } else if (event.key === "Home") {
      event.preventDefault();
      goTo(0);
    } else if (event.key === "End") {
      event.preventDefault();
      goTo(maxIndex());
    }
  });

  const leadingIndex = () => {
    const trackLeft = track.getBoundingClientRect().left;
    let best = 0;
    let bestDist = Infinity;
    slides.forEach((slide, i) => {
      const dist = Math.abs(slide.getBoundingClientRect().left - trackLeft);
      if (dist < bestDist) {
        bestDist = dist;
        best = i;
      }
    });
    return best;
  };

  track.addEventListener(
    "scroll",
    () => {
      if (scrolling) return;
      setIndex(leadingIndex());
    },
    { passive: true },
  );

  desktop.addEventListener("change", () => setIndex(index, false));
  setIndex(0, false);
}

window.appInit = appInit;
appInit();
