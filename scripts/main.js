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
    projects.forEach((item) => {
      const li = document.createElement("li");
      const card = document.createElement("external-card-link");
      card.url = item.url;
      const [name, stack] = (item.title || "").split(" — ");
      card.title = name || item.title || "";
      if (stack) card.cardRightContent = stack;
      if (item.preview) card.setAttribute("preview", item.preview);
      li.appendChild(card);
      projectsList.appendChild(li);
    });
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

window.appInit = appInit;
appInit();
