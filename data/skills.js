// Agent skills, grouped by the stage of work they help with.
// Categories render in this order: plan, write, review.
//
// A category's blurb says when to reach for its skills, so keep it general
// enough to cover anything added later.
//
// To add a skill, push an object into a category's `skills` array:
//   name        skill name as the agent sees it
//   href        source (repo folder or docs page)
//   source      who publishes it, shown next to the name
//   description one line on what it does
//   install     command that installs it (shell or Claude Code slash command)

export const skillCategories = [
  {
    id: "plan",
    title: "Plan",
    blurb: "Before building. Turning an idea into a spec and a plan.",
    skills: [
      {
        name: "superpowers",
        href: "https://github.com/obra/superpowers",
        source: "Jesse Vincent",
        description:
          "A set of skills that hand off to each other: brainstorm the idea, write a plan, build it test-first with subagents, then request a code review.",
        install: "/plugin install superpowers@claude-plugins-official",
      },
    ],
  },
  {
    id: "write",
    title: "Write",
    blurb: "While writing code or docs.",
    skills: [
      {
        name: "modern-web-guidance",
        href: "https://developer.chrome.com/docs/modern-web-guidance",
        source: "Google Chrome",
        description:
          "Around 200 guides with Baseline browser data. The agent searches them before writing UI code, so it skips patterns the platform has replaced.",
        install: "npx modern-web-guidance@latest install",
      },
      {
        name: "senior-frontend",
        href: "https://github.com/davila7/claude-code-templates/tree/main/cli-tool/components/skills/development/senior-frontend",
        source: "claude-code-templates",
        description:
          "Reads the project before writing, builds every state (loading, empty, error, long content), then checks the page in a real browser at phone and desktop width.",
        install:
          "npx claude-code-templates@latest --skill development/senior-frontend",
      },
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
  {
    id: "review",
    title: "Review",
    blurb: "Before anything ships. Checking work for problems.",
    skills: [],
  },
];
