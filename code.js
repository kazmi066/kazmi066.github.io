window.addEventListener("load", async (e) => {
  const response = await fetch("projects.json");
  const data = await response.json();
  const cards = document.querySelector("#projects .cards");

  data.map((item) => {
    cards.innerHTML += `
      <div class="card" data-aos="fade-up"
      data-aos-anchor-placement="center-bottom">
        <h4 class="card_title">${item.card_title}</h4>
        <div class="skills pd-1">
        ${item.skills
          .map((skill) => {
            return `<div class="mr-1 mb-1 skill-${skill.toLowerCase()}">
            ${skill}
          </div>`;
          })
          .join("")}
        </div>
        <img
          class="card_image"
          src=${item.image_url}
          alt="no image"
        />
        <div class="card_footer">
          <a href="${item.source_url}" class="source_code">
            <i class="fab fa-github github"></i>
          </a>
          ${
            item.live
              ? `<a href=${item?.live} class="live">
                Live preview
              </a>`
              : "Not in production"
          }
          
        </div>
      </div>`;
  });

  // The loading bar on scroll
  document.addEventListener(
    "scroll",
    function () {
      var scrollTop =
        document.documentElement["scrollTop"] || document.body["scrollTop"];
      var scrollBottom =
        (document.documentElement["scrollHeight"] ||
          document.body["scrollHeight"]) -
        document.documentElement.clientHeight;
      scrollPercent = (scrollTop / scrollBottom) * 100 + "%";
      document
        .querySelector("#indicator")
        .style.setProperty("--scroll", scrollPercent);
    },
    { passive: true }
  );
});
