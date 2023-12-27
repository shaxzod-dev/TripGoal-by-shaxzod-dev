const BurgerMenu = document.querySelector(".burger-menu");
const header = document.querySelector(".header-nav");
BurgerMenu.addEventListener("click", () => {
  header.classList.toggle("active");
  BurgerMenu.classList.toggle("show");
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

// function test(num) {
//   console.log(num);
//   num--;
//   if (num >= 0) {
//     `${test(num)}`
//   }
// }

// test(10)

// rekursiya o'z ichida o'zi

// for (let i = 0; i < 100; i++) {
//   setTimeout (() => {
//     console.log(i);
//   }, 1000)
// } 
// set time out kutadi va qiladi

// for (let i = 0; i < 2; i++) {
//   setInterval(() => {
//     console.log(i);
//   }, 2000)
// }  qayta qayta qiladi