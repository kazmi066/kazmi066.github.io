class SiteNavbarComponent extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
    this.highlightActive();
    this.setupThemeToggle();
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
          background: rgba(255, 255, 255, 0.6);
          transform: scale(0);
          animation: ripple-animation 0.6s ease-out;
          pointer-events: none;
        }
        
        .dark .ripple {
          background: rgba(255, 255, 255, 0.3);
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
      </style>
      
      <nav
        class="isolate z-50 rounded-full px-6 flex items-center gap-6 fixed bottom-6 left-1/2 -translate-x-1/2 backdrop-blur-sm backdrop-filter bg-opacity-50 shadow-lg border text-sm bg-white/80 border-neutral-950/10 dark:bg-neutral-950/80 dark:border-neutral-100/10">

        <a aria-label="Home" class="nav-link relative py-3 text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors" data-path="/" href="/">Home</a>
        
        <a aria-label="About" class="nav-link relative py-3 text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors" data-path="/about.html" href="about.html">About</a>
        
        <a aria-label="Blog" class="nav-link relative py-3 text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors" data-path="/blog.html" href="blog.html">Blog</a>
        
        <a aria-label="Stack" class="nav-link relative py-3 text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors" data-path="/stack.html" href="stack.html">Stack</a>

        <button type="button" aria-label="Toggle theme" class="theme-toggle ml-2 inline-flex items-center justify-center rounded-full px-2 py-2 text-base leading-none bg-neutral-100 text-neutral-700 border border-neutral-200 hover:bg-neutral-200 dark:bg-neutral-800 dark:text-white dark:border-neutral-700 dark:hover:bg-neutral-700 transition-colors">
          <span class="emoji">🌤️</span>
        </button>
      </nav>
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

      if (isActive) {
        a.classList.remove("text-neutral-500", "dark:text-neutral-400");
        a.classList.add(
          "font-medium",
          "text-neutral-900",
          "dark:text-white",
          "border-b-2",
          "border-neutral-900",
          "dark:border-white"
        );
      } else {
        a.classList.remove(
          "font-medium",
          "text-neutral-900",
          "dark:text-white",
          "border-b-2",
          "border-neutral-900",
          "dark:border-white"
        );
        a.classList.add("text-neutral-500", "dark:text-neutral-400");
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
    const key = "theme";

    const applyTheme = (mode, animate = false) => {
      if (animate) {
        btn.classList.add("transitioning");
        setTimeout(() => btn.classList.remove("transitioning"), 600);
      }

      if (mode === "dark") {
        html.classList.add("dark");
        if (emoji) emoji.textContent = "🌑";
      } else {
        html.classList.remove("dark");
        if (emoji) emoji.textContent = "🌤️";
      }
    };

    const initTheme = () => {
      const stored = localStorage.getItem(key);
      if (stored === "light" || stored === "dark") {
        applyTheme(stored, false);
      } else {
        const prefersDark = window.matchMedia(
          "(prefers-color-scheme: dark)"
        ).matches;
        const systemTheme = prefersDark ? "dark" : "light";
        applyTheme(systemTheme, false);
        localStorage.setItem(key, systemTheme);
      }
    };

    initTheme();

    btn.addEventListener("click", (e) => {
      this.createRipple(e, btn);

      const isDark = html.classList.contains("dark");
      const newTheme = isDark ? "light" : "dark";
      localStorage.setItem(key, newTheme);
      applyTheme(newTheme, true);
    });

    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (e) => {
        const stored = localStorage.getItem(key);
        if (!stored) {
          applyTheme(e.matches ? "dark" : "light", false);
        }
      });
  }
}

customElements.define("site-navbar", SiteNavbarComponent);
