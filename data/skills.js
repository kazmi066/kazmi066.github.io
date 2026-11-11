// Agent skills, grouped by the kind of work they help with.
// Categories render in this order.
//
// A category's blurb says when to reach for its skills, so keep it general
// enough to cover anything added later.
//
// To add a skill, push an object into a category's `skills` array:
//   name        skill name as the agent sees it
//   href        source (repo folder or docs page)
//   source      who publishes it, shown next to the name
//   description one line on what it does
//   install     shell command that installs it

export const skillCategories = [
  {
    id: "build",
    title: "Build",
    blurb: "When writing or changing frontend code.",
    skills: [
      {
        name: "modern-web-guidance",
        href: "https://developer.chrome.com/docs/modern-web-guidance",
        source: "Google Chrome",
        description:
          "Around 200 guides with Baseline browser data. The agent searches them before writing UI code, so it skips patterns the platform has replaced.",
        install: "npx modern-web-guidance@latest install",
      },
    ],
  },
  {
    id: "write",
    title: "Write",
    blurb: "When drafting or editing text that people will read.",
    skills: [
      {
        name: "unslop",
        href: "https://github.com/cursor/plugins/tree/main/pstack/skills/unslop",
        source: "Cursor",
        description:
          "Strips the patterns that make text read as machine-written: em dashes, puffery, \"serves as\", forced groups of three.",
        install: "npx skills add cursor/plugins --skill unslop",
      },
    ],
  },
];
