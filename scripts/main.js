"use strict";

import { blogs } from "../data/blogs.js";
import { socialButtons } from "../data/social-buttons.js";
import { projects, funLinks } from "../data/projects.js";
document.documentElement.dataset.theme = "dark";

// App initializer: idempotent per-page setup
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
      card.title = item.title;
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
    ".footer-section .social-buttons-list"
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
}

window.appInit = appInit;
appInit();
