(function () {
  "use strict";

  var defaultExperiences = [
    {
      company: "Noon",
      location: "Dubai, United Arab Emirates",
      period: "Jan. 2024 - Present",
      role: "Frontend Developer",
      points: [
        "Built and maintained checkout and cart flows used across high-traffic campaigns.",
        "Improved page performance by reducing bundle size and optimizing render paths.",
        "Collaborated with design and product to ship UI updates with clear release timelines.",
      ],
    },
    {
      company: "DJI",
      location: "Shenzhen, China",
      period: "May 2021 - Dec. 2023",
      role: "Frontend Developer",
      points: [
        "Developed dashboard views for drone telemetry and media workflows.",
        "Created reusable UI modules that reduced duplicated logic across teams.",
        "Stabilized release quality by fixing long-standing UI bugs and edge-case issues.",
      ],
    },
    {
      company: "AliExpress",
      location: "Hangzhou, China",
      period: "Aug. 2018 - Apr. 2021",
      role: "Frontend Engineer",
      points: [
        "Implemented promotional landing pages for global seasonal campaigns.",
        "Integrated recommendation widgets and improved click-through rates on product pages.",
        "Worked with backend teams to shape APIs for faster and cleaner UI delivery.",
      ],
    },
  ];

  var newExperienceCount = 1;

  function makeEditableParagraph(text, className) {
    var p = document.createElement("p");
    if (className) {
      p.className = className;
    }
    p.setAttribute("contenteditable", "true");
    p.textContent = text;
    return p;
  }

  function addPoint(list, text) {
    var li = document.createElement("li");
    li.setAttribute("contenteditable", "true");
    li.textContent = text || "Describe your contribution.";
    list.appendChild(li);
  }

  function buildExperienceRow(data) {
    var wrapper = document.createElement("article");
    wrapper.className = "experience-item";

    var head = document.createElement("div");
    head.className = "experience-head";

    var left = document.createElement("p");
    var company = document.createElement("strong");
    company.setAttribute("contenteditable", "true");
    company.textContent = data.company;

    var location = document.createElement("em");
    location.setAttribute("contenteditable", "true");
    location.textContent = " - " + data.location;

    left.appendChild(company);
    left.appendChild(location);

    var right = makeEditableParagraph(data.period, "experience-period");

    head.appendChild(left);
    head.appendChild(right);
    wrapper.appendChild(head);

    wrapper.appendChild(makeEditableParagraph(data.role, "experience-role"));

    var list = document.createElement("ul");
    list.className = "experience-points";

    var i;
    for (i = 0; i < data.points.length; i++) {
      addPoint(list, data.points[i]);
    }

    wrapper.appendChild(list);

    var controls = document.createElement("div");
    controls.className = "experience-tools";

    var addBtn = document.createElement("button");
    addBtn.type = "button";
    addBtn.textContent = "+ Point";
    addBtn.addEventListener("click", function () {
      addPoint(list, "Describe your contribution.");
    });

    var removeBtn = document.createElement("button");
    removeBtn.type = "button";
    removeBtn.textContent = "Remove";
    removeBtn.addEventListener("click", function () {
      wrapper.parentNode.removeChild(wrapper);
    });

    controls.appendChild(addBtn);
    controls.appendChild(removeBtn);
    wrapper.appendChild(controls);

    return wrapper;
  }

  function addExperience(container) {
    var placeholder = {
      company: "New Company " + newExperienceCount,
      location: "City, Country",
      period: "Month YYYY – Month YYYY",
      role: "Role",
      points: ["Describe your contribution."],
    };

    newExperienceCount = newExperienceCount + 1;
    container.appendChild(buildExperienceRow(placeholder));
  }

  function normalizeUrl(value) {
    var url = (value || "").trim();
    if (!url) {
      return "#";
    }

    if (url.indexOf("http://") !== 0 && url.indexOf("https://") !== 0) {
      url = "https://" + url;
    }

    return url;
  }

  function bindProfileLink(inputId, anchorId) {
    var input = document.getElementById(inputId);
    var anchor = document.getElementById(anchorId);

    if (!input || !anchor) {
      return;
    }

    function applyLink() {
      var normalizedUrl = normalizeUrl(input.value);
      anchor.setAttribute("href", normalizedUrl);
    }

    input.addEventListener("input", applyLink);
    input.addEventListener("change", applyLink);
    applyLink();
  }

  function init() {
    var experienceList = document.getElementById("experience-list");
    var addExperienceBtn = document.getElementById("add-experience-btn");
    var printBtn = document.getElementById("print-cv-btn");

    if (!experienceList || !addExperienceBtn || !printBtn) {
      return;
    }

    var i;
    for (i = 0; i < defaultExperiences.length; i++) {
      experienceList.appendChild(buildExperienceRow(defaultExperiences[i]));
    }

    addExperienceBtn.addEventListener("click", function () {
      addExperience(experienceList);
    });

    printBtn.addEventListener("click", function () {
      window.print();
    });

    bindProfileLink("github-url-input", "github-link");
    bindProfileLink("linkedin-url-input", "linkedin-link");
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
