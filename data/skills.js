// Agent skills, grouped by the point in a task where I reach for them.
// Categories render in this order, so keep them in workflow order.
//
// To add a skill, push an object into a category's `skills` array:
//   name        skill name as the agent sees it
//   href        source (repo folder or docs page)
//   source      who publishes it, shown next to the name
//   description one line on what it does
//   useWhen     when to reach for it
//   install     shell command that installs it
//   docs        optional link to longer docs

export const skillCategories = [
  {
    id: "build",
    title: "Build",
    blurb: "While writing HTML, CSS and client-side JS.",
    skills: [
      {
        name: "modern-web-guidance",
        href: "https://developer.chrome.com/docs/modern-web-guidance",
        source: "Google Chrome",
        description:
          "Around 200 guides with Baseline browser data. The agent searches them before writing UI code, so it skips patterns the platform has replaced.",
        useWhen:
          "Every UI project. Dialogs, forms, dark mode, carousels, accessibility, Core Web Vitals.",
        install: "npx modern-web-guidance@latest install",
        docs: "https://developer.chrome.com/blog/modern-web-guidance-v1",
      },
    ],
  },
  {
    id: "write",
    title: "Write",
    blurb: "Before any text goes out. Docs, PR descriptions, posts, commits.",
    skills: [
      {
        name: "unslop",
        href: "https://github.com/cursor/plugins/tree/main/pstack/skills/unslop",
        source: "Cursor",
        description:
          "Strips the patterns that make text read as machine-written: em dashes, puffery, \"serves as\", forced groups of three.",
        useWhen: "Any prose an agent drafted that a person will read.",
        install: "npx skills add cursor/plugins --skill unslop",
      },
    ],
  },
];
