window.addEventListener("load", async (e) => {
  const response = await fetch("projects.json");
  const data = await response.json();
  const cards = document.querySelector("#projects .cards");

  data.map((item) => {
    cards.innerHTML += `
      <div class="card">
        <h4 class="card_title">${item.card_title}</h4>
        <div class="skills pd-1">
          <div class="mr-1 mb-1 skill-react">${item.skills[0]}</div>
          <div class="mr-1 mb-1 skill-node">${item.skills[1]}</div>
          <div class="mr-1 mb-1 skill-mongo">${item.skills[2]}</div>
        </div>
        <img
          class="card_image"
          src=${item.image_url}
          alt="no image"
        />
        <div class="card_footer">
          <a href="#" class="source_code">
            <i class="fab fa-github github"></i>
          </a>
          <a href="#" class="live">
            Live preview
          </a>
        </div>
      </div>`;
  });
});
