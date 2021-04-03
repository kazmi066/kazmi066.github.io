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
          <div class="mr-1 mb-1 skill-${item.skills[0].toLowerCase()}">${
      item.skills[0]
    }</div>
          <div class="mr-1 mb-1 skill-${item.skills[1].toLowerCase()}">${
      item.skills[1]
    }</div>
          <div class="mr-1 mb-1 skill-${item.skills[2].toLowerCase()}">${
      item.skills[2]
    }</div>
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

  // const temp = document.querySelectorAll("#projects .cards .card");
  // const contact = document.querySelector("#contact");

  // window.addEventListener("scroll", () => {
  //   for (var i = 0; i < temp.length; i++) {
  //     var elem = temp[i];
  //     var distInView =
  //       elem.getBoundingClientRect().top - window.innerHeight + 100;
  //     if (distInView < 0) {
  //       elem.classList.add("inView");
  //     } else {
  //       elem.classList.remove("inView");
  //     }
  //   }
  //   var contactView =
  //     contact.getBoundingClientRect().top - window.innerHeight + 50;
  //   if (contactView < 0) {
  //     contact.classList.add("inView");
  //   } else {
  //     contact.classList.remove("inView");
  //   }
  // });
});
