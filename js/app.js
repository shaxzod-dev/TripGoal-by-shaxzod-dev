const BurgerMenu = document.querySelector(".burger-menu");
const header = document.querySelector(".header-nav");
BurgerMenu.addEventListener("click", () => {
  header.classList.toggle("active");
  BurgerMenu.classList.toggle("show");
});

const bannerItems = document.querySelectorAll(".banner-item");
window.addEventListener("DOMContentLoaded", () => {
  bannerItems.forEach((el) => {
    el.style.transform = "translateX(0)";
    el.style.opacity = "1";
  });
});

const TravelItems = document.querySelectorAll(".travel-items");
const RowItem = document.querySelectorAll(".item-b");
const travel = document.querySelector(".travel");

window.addEventListener("scroll", () => {
  if (scrollY > travel.offsetTop - travel.clientHeight / 2) {
    TravelItems.forEach((el) => {
      el.style.transform = "translateX(0)";
      el.style.opacity = "1";
    });

    RowItem.forEach((el) => {
      el.style.opacity = "1";
    });
  }
});

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  navigation: {
    prevEl: ".swiper-button-prev",
    nextEl: ".swiper-button-next",
  },
});

const playBtn = document.querySelector(".play");
const video = document.querySelector(".discovery-video");

playBtn.addEventListener("click", () => {
  if (video.paused) {
    video.play();
    playBtn.style.display = "none";
  } else {
    video.pause();
    playBtn.style.display = "block";
  }
});

video.addEventListener("click", () => {
  if (video.paused) {
    video.play();
    playBtn.style.display = "none";
  } else {
    video.pause();
    playBtn.style.display = "block";
  }
});

var swiper = new Swiper(".mySwiper2", {
  slidesPerView: 4,
  spaceBetween: 50,
  centeredSlides: true,
  autoplay: true,
});