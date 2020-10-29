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

// Scrolling animation
window.addEventListener("scroll", checkHeight);

function getHeight(event) {
  return event.getBoundingClientRect().top;
}

function checkHeight(e) {
  const projects = document.querySelector("#projects");
  const skills = document.querySelector("#skills");
  const contact = document.querySelector("#contact");
  getHeight(projects);
  getHeight(skills);
  getHeight(contact);

  if (getHeight(projects) / 2 < window.pageYOffset) {
    projects.classList.add("fade-in");
    projects.classList.remove("hidden");
  }
  if (getHeight(skills) * 5 < window.pageYOffset) {
    skills.classList.add("fade-in");
    skills.classList.remove("hidden");
  }
  if (getHeight(contact) * 5 < window.pageYOffset) {
    contact.classList.add("fade-in");
    contact.classList.remove("hidden");
  }
}
// Scrolling animation ends
