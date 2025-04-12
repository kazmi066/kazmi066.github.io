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
  const blog = document.createElement("li");
  blog.className = "link-card";

  const link = document.createElement("a");
  link.href = blogItem.url;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  link.className = "blog-link";

  const title = document.createElement("span");
  title.className = "link-card__title";
  title.textContent = blogItem.title;

  link.appendChild(title);
  blog.appendChild(link);
  blogContainer.appendChild(blog);
});

// Footer Social Buttons
const socialButtonsList = document.querySelector(
  ".footer-section .social-buttons-list"
);
socialButtons.forEach((socialButton, index) => {
  const socialButtonElement = document.createElement("li");
  socialButtonElement.className = "link-card";

  const anchorElement = document.createElement("a");
  anchorElement.href = socialButton.url;
  anchorElement.target = "_blank";
  anchorElement.rel = "noopener noreferrer";
  anchorElement.textContent = socialButton.title;

  socialButtonElement.appendChild(anchorElement);
  socialButtonsList.appendChild(socialButtonElement);
});

// Current Year
const currentYear = new Date().getFullYear();
const currentYearElement = document.getElementById("current-year");
currentYearElement.textContent = currentYear;
