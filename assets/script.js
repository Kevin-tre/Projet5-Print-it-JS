const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

const dotsDiv = document.querySelector(".dots");
const bannerImg = document.querySelector(".banner-img");
const p = document.querySelector("#banner p");

let index = 0;

// EVENT LISTENER SUR LES FLECHES + DEFILEMENT INFINI //

let arrowLeft = document.querySelector(".arrow_left");

arrowLeft.addEventListener("click", () => {
  index--;
  if (index < 0) {
    index = slides.length - 1;
  }
  createBulletPoints();
  updateData();
});

let arrowRight = document.querySelector(".arrow_right");

arrowRight.addEventListener("click", () => {
  index++;
  if (index > slides.length - 1) {
    index = 0;
  }
  createBulletPoints();
  updateData();
});

//////////////////////// AJOUT DES BULLET POINTS ////////////////////////
function createBulletPoints() {
  dotsDiv.innerHTML = "";
  for (let i = 0; i < slides.length; i++) {
    let bulletPoints = document.createElement("div");
    if (index === i) {
      bulletPoints.className = "dot_selected dot";
    } else {
      bulletPoints.className = "dot";
    }
    dotsDiv.appendChild(bulletPoints);
  }
}

createBulletPoints();


//////////////////////// MISE A JOUR IMAGE ET DESCRIPTION  ////////////////////////

const updateData = () => {
  // bannerImg.src = "./assets/images/slideshow/" + slides[index].image;
  bannerImg.src = `./assets/images/slideshow/${slides[index].image}` 
  p.innerHTML = slides[index].tagLine;
};

