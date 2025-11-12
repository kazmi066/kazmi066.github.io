class ExternalCardLink extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  static get observedAttributes() {
    return [
      "url",
      "left",
      "right",
      "role",
      "company",
      "card-right-content",
      "title",
      // Optional video preview on hover
      "preview",
    ];
  }

  get url() {
    return this.getAttribute("url") || "#";
  }

  set url(value) {
    if (value) {
      this.setAttribute("url", value);
    } else {
      this.removeAttribute("url");
    }
  }

  get left() {
    const explicit = this.getAttribute("left");
    if (explicit) return explicit;
    const role = this.getAttribute("role");
    const company = this.getAttribute("company");
    if (role && company)
      return `${role}, <span class="font-medium">${company}</span>`;
    if (role) return role;
    const title = this.getAttribute("title");
    return title || "Link";
  }

  set left(v) {
    v ? this.setAttribute("left", v) : this.removeAttribute("left");
  }

  get right() {
    const custom = this.getAttribute("card-right-content");
    if (custom) return custom;
    const explicit = this.getAttribute("right");
    if (explicit) return explicit;
    return "";
  }

  set right(v) {
    v ? this.setAttribute("right", v) : this.removeAttribute("right");
  }

  get cardRightContent() {
    return this.getAttribute("card-right-content") || "";
  }

  set cardRightContent(v) {
    v
      ? this.setAttribute("card-right-content", v)
      : this.removeAttribute("card-right-content");
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue !== newValue) {
      this.render();
      if (name === "preview") this.#setupPreview();
    }
  }

  render() {
    const url = this.url;
    const left = this.left;
    const right = this.right;

    this.innerHTML = `
      <a href="${url}" target="_blank" rel="noopener noreferrer"
         class="group w-full flex items-center justify-between sm:flex-nowrap flex-wrap gap-2 py-3 no-underline">
        <div class="min-w-0 flex-1 flex items-center gap-4">
          <span class="whitespace-normal break-words sm:truncate text-foreground group-hover:text-emerald-500 transition-colors">${left}</span>
          <span class="hidden sm:block h-px flex-1 bg-border group-hover:bg-emerald-500/80 transition-colors"></span>
        </div>
        <span class="text-muted-foreground/70 tabular-nums text-sm sm:text-base sm:shrink-0 shrink mt-1 sm:mt-0 w-full sm:w-auto text-left sm:text-right">${right}</span>
      </a>
    `;

    this.#setupPreview();
  }

  // Private: wires up optional hover video preview when `preview` attribute is provided
  #setupPreview() {
    // Clean up any previous listeners/preview
    if (this.__cleanupPreview) this.__cleanupPreview();

    const src = this.getAttribute("preview");
    if (!src) return; // optional feature

    const anchor = this.querySelector("a");
    if (!anchor) return;

    const video = document.createElement("video");
    video.src = src;
    video.muted = true;
    video.loop = true;
    video.playsInline = true;
    video.autoplay = true;
    video.style.position = "fixed";
    video.style.zIndex = "50";
    video.style.width = "240px";
    video.style.height = "auto";
    video.style.borderRadius = "12px";
    video.style.boxShadow = "0 10px 30px rgba(0,0,0,0.25)";
    video.style.pointerEvents = "none";
    video.style.opacity = "0";
    video.style.transform = "translate(-50%, -50%) scale(0.98)";
    video.style.transition = "opacity 150ms ease, transform 150ms ease";

    const move = (e) => {
      const x = e.clientX + 24; // offset from cursor
      const y = e.clientY + 24;
      video.style.left = `${x}px`;
      video.style.top = `${y}px`;
    };

    const enter = async () => {
      if (!document.body.contains(video)) document.body.appendChild(video);
      try {
        await video.play();
      } catch (_) {}
      video.style.opacity = "1";
      video.style.transform = "translate(-50%, -50%) scale(1)";
      window.addEventListener("mousemove", move, { passive: true });
    };

    const leave = () => {
      video.style.opacity = "0";
      video.style.transform = "translate(-50%, -50%) scale(0.98)";
      video.pause();
      window.removeEventListener("mousemove", move);
      // keep element in DOM for faster re-entry, just hidden
    };

    anchor.addEventListener("mouseenter", enter);
    anchor.addEventListener("mouseleave", leave);

    this.__cleanupPreview = () => {
      anchor.removeEventListener("mouseenter", enter);
      anchor.removeEventListener("mouseleave", leave);
      window.removeEventListener("mousemove", move);
      if (video && video.parentNode) video.parentNode.removeChild(video);
      this.__cleanupPreview = null;
    };
  }
}

customElements.define("external-card-link", ExternalCardLink);
