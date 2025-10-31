class SiteFooter extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <footer class="footer-section mt-16" id="contact">
        <p class="contact-text">
          If you want to reach out please drop me an
          <a href="mailto:awaisabbas47@gmail.com" class="underline underline-offset-4">Email</a>.
          You can also check out my social media following the links below.
        </p>
        <ul class="social-buttons-list flex flex-wrap gap-3 mt-4"></ul>
      </footer>
    `;
  }
}

customElements.define("site-footer", SiteFooter);
