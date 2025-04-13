class HeaderComponent extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
        <style>
            .site-header {
                padding: var(--spacing-xs) 0;
                display: flex;
                justify-content: flex-end;
                width: 100%;
            }

            .header-content {
                width: 100%;
                display: flex;
                align-items: center;
                justify-content: space-between;
            }

            .header-nav {
                display: flex;
                align-items: center;
            }

            .contact-link {
                font-weight: var(--font-weight-normal);
                color: var(--color-text-secondary);
                margin-right: var(--spacing-lg);
                text-decoration: none;
                transition: color var(--transition-duration) var(--transition-timing);
                position: relative;
                padding: var(--spacing-xs) 0;
            }

            .contact-link:hover {
                color: var(--color-text);
            }
        </style>
  
        <header class="site-header">
            <div class="header-content">
                <div class="left-section">
                    <slot name="logo"></slot>
                </div>
                <nav class="header-nav">
                    <a href="#contact" class="contact-link">Contact</a>
                </nav>
            </div>
        </header>
      `;
  }
}

customElements.define("header-component", HeaderComponent);
