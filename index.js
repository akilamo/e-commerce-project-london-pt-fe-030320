// CAROUSEL HOME PAGE 

const carousel = document.querySelector(".hero-img");
const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");

const imgArray = ["sofa-1", "sofa-2"];
let i = imgArray.length;

nextBtn.addEventListener("click", () => nextImg());
prevBtn.addEventListener("click", () => nextImg());

const nextImg = () => {
  if (i < imgArray.length) {
    i += 1;
  } else {
    i = 1;
  }
  carousel.innerHTML = `<img src="./images/${
    imgArray[i - 1]
  }.png" alt="sofas" class=".img_sofa"></img>`;
};

const container = document.querySelector(".carousel-container");
const carouselBtn = document.querySelector(".carousel-btn");

container.addEventListener("mouseenter", () => {
  carouselBtn.style.visibility = "visible";
});

container.addEventListener("mouseleave", () => {
  carouselBtn.style.visibility = "hidden";
});
