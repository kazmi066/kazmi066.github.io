const toggle = document.querySelector(".navbar .toggle");
const sidebar = document.querySelector(".sidebar");
const closeBtn = document.querySelector(".sidebar .close-btn");

toggle.addEventListener("click", () => {
  sidebar.classList.add("toggle-open");
});

closeBtn.addEventListener("click", () => {
  sidebar.classList.remove("toggle-open");
});

// Links in the sidebar for mobile Section
const links = document.querySelectorAll(".sidebar a");
links.forEach((link) => {
  link.addEventListener("click", (e) => {
    sidebar.classList.remove("toggle-open");
  });
});
