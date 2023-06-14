/* typing animation */
var typed = new Typed(".typing", {
  strings: ["", "Web Designer", "Web Developer", "Graphic Designer"],
  typeSpeed: 100,
  BackSpeed: 60,
  loop: true,
});
var typed = new Typed(".typing1", {
  strings: ["", "Web Designer", "Web Developer", "Graphic Designer"],
  typeSpeed: 100,
  BackSpeed: 60,
  loop: true,
});

// Side bar
const nav = document.querySelector(".nav"),
  navList = nav.querySelectorAll("li"),
  totalNavList = navList.length,
  allSection = document.querySelectorAll(".section"),
  totalSection = allSection.length;

for (let i = 0; i < totalNavList; i++) {
  const a = navList[i].querySelector("a");
  a.addEventListener("click", function () {
    removeBackSection();

    for (let j = 0; j < totalNavList; j++) {
      if (navList[j].querySelector("a").classList.contains("active")) {
        addBackSection(j);
        // allSection[j].classList.add("back-section");
      }
      navList[j].querySelector("a").classList.remove("active");
    }

    this.classList.add("active");
    showSection(this);
    if (window.innerWidth < 1200) {
      asideSectionTogglerBtn();
    }
  });
}
function removeBackSection() {
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.remove("back-section");
  }
}

function addBackSection(num) {
  allSection[num].classList.add("back-section");
}

function showSection(element) {
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.remove("active");
  }
  const target = element.getAttribute("href").split("#")[1];
  document.querySelector("#" + target).classList.add("active");
}

function updateNav(element) {
  for (let i = 0; i < totalNavList; i++) {
    navList[i].querySelector("a").classList.remove("active");
    const target = element.getAttribute("href").split("#")[1];
    if (
      target ===
      navList[i].querySelector("a").getAttribute("href").split("#")[1]
    ) {
      navList[i].querySelector("a").classList.add("active");
    }
  }
}

//on click hire button redirect to the contact page

document.querySelector(".hire-me").addEventListener("click", function () {
  const sectoinIndex = this.getAttribute("data-action-index");

  showSection(this);
  updateNav(this);
  removeBackSection();
  addBackSection(sectoinIndex);
});

//aside button toggler 

const navTogglerBtm = document.querySelector(".nav-toggler"),
  aside = document.querySelector(".aside");

navTogglerBtm.addEventListener("click", () => {
  asideSectionTogglerBtn();
});

function asideSectionTogglerBtn() {
  aside.classList.toggle("open");
  navTogglerBtm.classList.toggle("open");
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.toggle("open");
  }
}

// Project data array
var projects = [
  { image: "project.png" },
  { image: "project.png" },
  { image: "project.png" },
  // Add more projects as needed
];

// Function to generate portfolio items dynamically
function generatePortfolioItems() {
  var portfolioItemsContainer = document.getElementById("portfolio-items");

  for (var i = 0; i < projects.length; i++) {
    var project = projects[i];

    var portfolioItem = document.createElement("div");
    portfolioItem.className = "portfolio-item padd-15";

    var portfolioItemInner = document.createElement("div");
    portfolioItemInner.className = "portfolio-item-inner shadow-dark";

    var portfolioImg = document.createElement("div");
    portfolioImg.className = "portfolio-img";

    var img = document.createElement("img");
    img.src = project.image;
    img.alt = "";

    portfolioImg.appendChild(img);
    portfolioItemInner.appendChild(portfolioImg);
    portfolioItem.appendChild(portfolioItemInner);
    portfolioItemsContainer.appendChild(portfolioItem);
  }
}

// Call the function to generate portfolio items
generatePortfolioItems();
