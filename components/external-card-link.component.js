class ExternalCardLink extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  static get observedAttributes() {
    return ["url", "title"];
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

  get title() {
    return this.getAttribute("title") || "Link";
  }

  set title(value) {
    if (value) {
      this.setAttribute("title", value);
    } else {
      this.removeAttribute("title");
    }
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue !== newValue && this.shadowRoot) {
      if (name === "url") {
        const linkElement = this.shadowRoot.querySelector(".card");
        if (linkElement) {
          linkElement.setAttribute("href", newValue || "#");
        }
      } else if (name === "title") {
        const titleElement = this.shadowRoot.querySelector(".card__title");
        if (titleElement) {
          titleElement.textContent = newValue || "Link";
        }
      }
    }
  }

  render() {
    const url = this.getAttribute("url") || "#";
    const title = this.getAttribute("title") || "Link";

    this.shadowRoot.innerHTML = `
      <style>
        .card-wrapper {
          padding: var(--spacing-md);
          position: relative;
          background-color: var(--color-secondary);
          border-radius: var(--border-radius-md);
          border: var(--border-width) solid var(--color-border);
          overflow: hidden;
          transition: border-color var(--transition-duration) var(--transition-timing);
        }

        .card-wrapper:focus-within,
        .card-wrapper:hover {
          border-color: var(--color-border-hover);
        }

        .card {
          display: block;
          width: 100%;
          height: 100%;
          text-decoration: none;
          outline: none;
          box-sizing: border-box;
        }

        .card:focus {
          outline: 1px solid var(--color-border-hover);
        }
        
        .card__title {
          font-weight: var(--font-weight-medium);
          color: #e4e4e4;
          display: inline-block;
          width: 100%;
        }

        .card__title::after {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 1;
        }
      </style>
        
      <div class="card-wrapper" part="card-wrapper">
        <a
          href=${url}
          target="_blank"
          rel="noopener noreferrer"
          class="card"
        >
          <span class="card__title"></span>
          <slot name="card-icon"></slot>
        </a>
      </div>
    `;

    const titleElement = this.shadowRoot.querySelector(".card__title");
    titleElement.textContent = title;
  }
}

customElements.define("external-card-link", ExternalCardLink);
