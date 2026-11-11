class SiteNavbarComponent extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
    this.highlightActive();
    this.setupThemeToggle();
    this.setupMenuToggle();
  }

  render() {
    this.innerHTML = `
      <style>
        .theme-toggle {
          position: relative;
          overflow: hidden;
        }

        .theme-toggle .emoji {
          display: inline-block;
          transition: transform 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }

        .theme-toggle:hover .emoji {
          transform: scale(1.2) rotate(20deg);
        }

        .theme-toggle.transitioning .emoji {
          animation: flip-and-bounce 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }

        @keyframes flip-and-bounce {
          0% {
            transform: scale(1) rotateY(0deg);
          }
          25% {
            transform: scale(0.8) rotateY(90deg);
          }
          50% {
            transform: scale(1.3) rotateY(180deg);
          }
          75% {
            transform: scale(0.9) rotateY(270deg);
          }
          100% {
            transform: scale(1) rotateY(360deg);
          }
        }

        .theme-toggle::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at center, rgba(255,255,255,0.3), transparent 70%);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .theme-toggle:active::before {
          opacity: 1;
        }

        .theme-toggle:active {
          transform: scale(0.95);
        }

        .ripple {
          position: absolute;
          border-radius: 50%;
          background: light-dark(rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.3));
          transform: scale(0);
          animation: ripple-animation 0.6s ease-out;
          pointer-events: none;
        }

        @keyframes ripple-animation {
          to {
            transform: scale(4);
            opacity: 0;
          }
        }

        .theme-toggle {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .site-header {
          position: sticky;
          top: 0;
          z-index: 50;
          background-color: var(--background);
          background-color: color-mix(in srgb, var(--background) 85%, transparent);
          border-bottom: 1px solid var(--border);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
        }

        .site-menu {
          border-top: 1px solid var(--border);
          background-color: var(--background);
          animation: site-menu-in 0.18s ease;
        }

        @keyframes site-menu-in {
          from {
            opacity: 0;
            transform: translateY(-4px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .menu-icon-close {
          display: none;
        }

        .menu-toggle[aria-expanded="true"] .menu-icon-open {
          display: none;
        }

        .menu-toggle[aria-expanded="true"] .menu-icon-close {
          display: block;
        }
      </style>

      <header class="site-header">
        <nav class="max-w-[768px] mx-auto px-4 h-14 flex items-center justify-between" aria-label="Primary">
          <div></div>
          <div class="flex items-center gap-1 sm:gap-2">
            <ul class="hidden md:flex items-center gap-6 mr-2">
                <li><a class="nav-link relative py-3 text-sm text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors" data-path="/" href="/">Home</a></li>
                <li><a class="nav-link relative py-3 text-sm text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors" data-path="/about.html" href="about.html">About</a></li>
                <li><a class="nav-link relative py-3 text-sm text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors" data-path="/blog.html" href="blog.html">Blog</a></li>
              <li><a class="nav-link relative py-3 text-sm text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors" data-path="/skills.html" href="skills.html">Skills</a></li>
                <li><a class="nav-link relative py-3 text-sm text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors" data-path="/stack.html" href="stack.html">Stack</a></li>
            </ul>

            <button type="button" aria-label="Dark theme" aria-pressed="false" class="theme-toggle inline-flex items-center justify-center rounded-full px-2 py-2 text-base leading-none bg-neutral-100 text-neutral-700 border border-neutral-200 hover:bg-neutral-200 dark:bg-neutral-800 dark:text-white dark:border-neutral-700 dark:hover:bg-neutral-700 transition-colors">
              <span class="emoji" aria-hidden="true">🌤️</span>
            </button>

            <button type="button" class="menu-toggle md:hidden inline-flex items-center justify-center rounded-full p-2 text-neutral-700 dark:text-white bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors" aria-expanded="false" aria-controls="site-menu" aria-label="Menu">
              <svg class="menu-icon-open" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 6h16"/><path d="M4 12h16"/><path d="M4 18h16"/></svg>
              <svg class="menu-icon-close" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 6l-12 12"/><path d="M6 6l12 12"/></svg>
            </button>
          </div>
        </nav>

        <nav id="site-menu" class="site-menu md:hidden" aria-label="Menu" hidden>
          <ul class="px-4 py-2">
            <li><a class="nav-link block py-2.5 text-sm text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors" data-path="/" href="/">Home</a></li>
            <li><a class="nav-link block py-2.5 text-sm text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors" data-path="/about.html" href="about.html">About</a></li>
            <li><a class="nav-link block py-2.5 text-sm text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors" data-path="/blog.html" href="blog.html">Blog</a></li>
            <li><a class="nav-link block py-2.5 text-sm text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors" data-path="/skills.html" href="skills.html">Skills</a></li>
            <li><a class="nav-link block py-2.5 text-sm text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors" data-path="/stack.html" href="stack.html">Stack</a></li>
          </ul>
        </nav>
      </header>
    `;
  }

  highlightActive() {
    let path = window.location.pathname;

    if (path !== "/" && path.endsWith("/")) {
      path = path.slice(0, -1);
    }
    path = path.replace(/\/index\.html$/, "/").replace(/^\/index\.html$/, "/");

    const links = this.querySelectorAll(".nav-link");
    links.forEach((a) => {
      const target = a.getAttribute("data-path");
      let normalizedTarget = target.replace(/\.html$/, "");
      if (normalizedTarget === "") normalizedTarget = "/";
      let normalizedPath = path.replace(/\.html$/, "");
      const isActive =
        normalizedPath === normalizedTarget ||
        (normalizedTarget === "/" &&
          (normalizedPath === "/" || normalizedPath === ""));

      const isMobile = Boolean(a.closest("#site-menu"));

      a.classList.remove(
        "font-medium",
        "text-neutral-900",
        "dark:text-white",
        "border-b-2",
        "border-neutral-900",
        "dark:border-white",
      );
      a.classList.add("text-neutral-500", "dark:text-neutral-400");
      a.removeAttribute("aria-current");

      if (isActive) {
        a.classList.remove("text-neutral-500", "dark:text-neutral-400");
        a.classList.add("font-medium", "text-neutral-900", "dark:text-white");
        if (!isMobile) {
          a.classList.add(
            "border-b-2",
            "border-neutral-900",
            "dark:border-white",
          );
        }
        a.setAttribute("aria-current", "page");
      }
    });
  }

  createRipple(event, button) {
    const ripple = document.createElement("span");
    ripple.classList.add("ripple");

    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;

    ripple.style.width = ripple.style.height = size + "px";
    ripple.style.left = x + "px";
    ripple.style.top = y + "px";

    button.appendChild(ripple);

    setTimeout(() => ripple.remove(), 600);
  }

  setupThemeToggle() {
    const btn = this.querySelector(".theme-toggle");
    if (!btn) return;
    const emoji = btn.querySelector(".emoji");
    const html = document.documentElement;
    const meta = document.querySelector('meta[name="color-scheme"]');
    const key = "theme";
    const system = window.matchMedia("(prefers-color-scheme: dark)");
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    // Two states: follow the system (nothing stored), or an override stored
    // as "light" or "dark". localStorage can throw when site data is blocked.
    const readStored = () => {
      try {
        const value = localStorage.getItem(key);
        return value === "light" || value === "dark" ? value : null;
      } catch {
        return null;
      }
    };

    const writeStored = (value) => {
      try {
        if (value) localStorage.setItem(key, value);
        else localStorage.removeItem(key);
      } catch {}
    };

    const systemTheme = () => (system.matches ? "dark" : "light");

    const renderedTheme = () => readStored() || systemTheme();

    const applyTheme = (animate = false) => {
      const stored = readStored();
      const isDark = renderedTheme() === "dark";
      // Classes only pin an override; without one, CSS follows the OS.
      html.classList.toggle("dark", stored === "dark");
      html.classList.toggle("light", stored === "light");
      if (meta) meta.content = stored || "light dark";
      if (emoji) emoji.textContent = isDark ? "🌑" : "🌤️";
      btn.setAttribute("aria-pressed", String(isDark));
      if (animate && !reduceMotion) {
        btn.classList.add("transitioning");
        setTimeout(() => btn.classList.remove("transitioning"), 600);
      }
    };

    applyTheme();

    btn.addEventListener("click", (e) => {
      if (!reduceMotion) this.createRipple(e, btn);
      // Flip what the user sees. Picking the system's own theme clears the
      // override, so the site follows the OS again.
      const target = renderedTheme() === "dark" ? "light" : "dark";
      writeStored(target === systemTheme() ? null : target);
      applyTheme(true);
    });

    system.addEventListener("change", () => applyTheme());

    // Keep other open tabs in sync.
    window.addEventListener("storage", (e) => {
      if (e.key === key || e.key === null) applyTheme();
    });
  }

  setupMenuToggle() {
    const btn = this.querySelector(".menu-toggle");
    const menu = this.querySelector("#site-menu");
    if (!btn || !menu) return;

    const setOpen = (open) => {
      const isOpen = !menu.hidden;
      if (open === isOpen) return;
      menu.hidden = !open;
      btn.setAttribute("aria-expanded", String(open));
    };

    btn.addEventListener("click", () => setOpen(menu.hidden));

    menu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => setOpen(false));
    });

    document.addEventListener("click", (e) => {
      if (!menu.hidden && !this.contains(e.target)) setOpen(false);
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && !menu.hidden) {
        setOpen(false);
        btn.focus();
      }
    });
  }
}

customElements.define("site-navbar", SiteNavbarComponent);
