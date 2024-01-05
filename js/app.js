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

const aboutSec = document.querySelector(".about");
const timer = document.querySelectorAll(".box-item_count");
window.addEventListener("scroll", function scrol() {
  if (scrollY > aboutSec.offsetTop - aboutSec.clientHeight / 2) {
    for (let i = 0; i < timer.length; i++) {
      const count = +timer[i].getAttribute("count");
      function rec(n = 0) {
        timer[i].innerHTML = n;
        n++;
        console.log(n);
        if (n <= count) {
          setTimeout(() => {
            rec(n);
          }, 42);
        }
      }
      rec();
    }

    window.removeEventListener("scroll", scrol);
  }
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

var swiper = new Swiper(".mySwiper2", {
  slidesPerView: 4,
  spaceBetween: 50,
  centeredSlides: true,
  autoplay: true,
});

var swiper = new Swiper(".testimonial-swiper", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  grabCursor: true,
  effect: "creative",
  creativeEffect: {
    prev: {
      shadow: true,
      translate: [0, 0, -400],
    },
    next: {
      translate: ["100%", 0, 0],
    },
  },
});
