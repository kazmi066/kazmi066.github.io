import { skillCategories } from "../data/skills.js";

const COPY_ICON = `<svg class="icon-copy" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="8" y="8" width="12" height="12" rx="2"/><path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2"/></svg>`;
const CHECK_ICON = `<svg class="icon-check" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12l5 5L20 7"/></svg>`;

const el = (tag, className, text) => {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text) node.textContent = text;
  return node;
};

const externalLink = (href, text, className) => {
  const a = el("a", className, text);
  a.href = href;
  a.target = "_blank";
  a.rel = "noopener noreferrer";
  a.append(el("span", "sr-only", " (opens in new tab)"));
  return a;
};

function renderSkill(skill) {
  const li = el("li", "skill-card");

  const head = el("div", "skill-head");
  const title = el("h3", "skill-name");
  title.append(externalLink(skill.href, skill.name));
  head.append(title, el("span", "skill-source", skill.source));

  const codeId = `install-${skill.name}`;
  const install = el("div", "skill-install");
  const pre = el("pre");
  const code = el("code", "", skill.install);
  code.id = codeId;
  pre.append(code);

  const copy = el("span", "copy");
  const button = el("button", "copy-button");
  button.type = "button";
  button.setAttribute("command", "--copy");
  button.setAttribute("commandfor", codeId);
  button.setAttribute("aria-label", `Copy install command for ${skill.name}`);
  button.innerHTML = COPY_ICON + CHECK_ICON;
  const tip = el("span", "tip");
  tip.setAttribute("role", "status");
  copy.append(button, tip);
  install.append(pre, copy);

  li.append(head, el("p", "skill-desc", skill.description), install);
  return li;
}

function renderCategory(category) {
  const section = el("section", "skill-category");
  section.id = category.id;

  let grid;
  if (category.skills.length) {
    grid = el("ul", "skill-grid");
    // Safari drops list semantics when list-style is removed outside <nav>.
    grid.setAttribute("role", "list");
    category.skills.forEach((skill) => grid.append(renderSkill(skill)));
  } else {
    grid = el("p", "skill-empty", "Nothing here yet.");
  }

  section.append(
    el("h2", "skill-category-title", category.title),
    el("p", "skill-blurb", category.blurb),
    grid,
  );
  return section;
}

const container = document.getElementById("skill-categories");
if (container) {
  container.replaceChildren(...skillCategories.map(renderCategory));
}

// Copy button: Invoker Commands with a click fallback.
const timers = new WeakMap();
let lastMessage = "";

function report(button, ok) {
  const tip = button.nextElementSibling;
  clearTimeout(timers.get(button));
  button.removeAttribute("data-copied");
  button.removeAttribute("data-failed");
  let message = ok ? "Copied" : "Copy failed";
  // VoiceOver skips a message identical to the previous one.
  if (message === lastMessage) message += " ";
  lastMessage = message;
  tip.textContent = "";
  void button.offsetWidth;
  button.setAttribute(ok ? "data-copied" : "data-failed", "");
  requestAnimationFrame(() => (tip.textContent = message));
  timers.set(
    button,
    setTimeout(() => {
      button.removeAttribute("data-copied");
      button.removeAttribute("data-failed");
      tip.textContent = "";
    }, 2000),
  );
}

async function copy(button, target) {
  const text = target.innerText.trim();
  if (!text) return;
  try {
    await navigator.clipboard.writeText(text);
    report(button, true);
  } catch {
    report(button, false);
  }
}

if ("CommandEvent" in window) {
  // `command` events do not bubble, so listen in the capture phase.
  document.addEventListener(
    "command",
    (event) => {
      if (event.command === "--copy") copy(event.source, event.target);
    },
    true,
  );
} else {
  document.addEventListener("click", (event) => {
    const button = event.target.closest('button[command="--copy"]');
    if (!button) return;
    const target = document.getElementById(button.getAttribute("commandfor"));
    if (target) copy(button, target);
  });
}
