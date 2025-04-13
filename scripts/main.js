"use strict";

import { blogs } from "../data/blogs.js";
import { socialButtons } from "../data/social-buttons.js";
document.documentElement.dataset.theme = "dark";
// const themeToggle = document.querySelector(".theme-toggle");
// themeToggle.addEventListener("click", () => {
//   document.documentElement.dataset.theme =
//     document.documentElement.dataset.theme === "dark"
//       ? "light"
//       : "dark";
// });

// Blogs List
const blogContainer = document.getElementById("blogs-list");

blogs.forEach((blogItem) => {
  const card = document.createElement("external-card-link");
  card.url = blogItem.url;
  card.title = blogItem.title;

  blogContainer.appendChild(card);
});

// Footer Social Buttons
const socialButtonsList = document.querySelector(
  ".footer-section .social-buttons-list"
);
socialButtons.forEach((socialButton) => {
  const card = document.createElement("external-card-link");
  card.url = socialButton.url;
  card.title = socialButton.title;

  socialButtonsList.appendChild(card);
});

// Current Year
const currentYear = new Date().getFullYear();
const currentYearElement = document.getElementById("current-year");
currentYearElement.textContent = currentYear;
