const offerBar = document.querySelector(".offer_bar");
const minute = document.getElementById("minute");
const second = document.getElementById("second");
const minute2 = document.getElementById("min");
const second2 = document.getElementById("sec");

let min = 15;
let sec = 0;
let min2 = 15;
let sec2 = 0;

// adding scroll event for offer bar
window.addEventListener("scroll", () => {
  window.scrollY > 310
    ? (offerBar.style.bottom = "0rem")
    : (offerBar.style.bottom = "-8rem");
});

// function which handles the countdown timer and display it on UI
const handleTimer = (minute, second, min, sec) => {
  if (min === 0 && sec === 0) return; // terminating on times up

  if (sec === 0) {
    min--; // decreading the minutes
    sec = 59; // resetting the seconds to 59
  } else sec--;

  minute.innerHTML = min < 10 ? `0${min}` : min;
  second.innerHTML = sec < 10 ? `0${sec}` : sec;

  setTimeout(() => handleTimer(minute, second, min, sec), 1000);
};

// calling timer function when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  handleTimer(minute, second, min, sec);
  handleTimer(minute2, second2, min2, sec2);
});

// swiper slider script 
let swiper = new Swiper(".mySwiper", {
  slidesPerView: 'auto',
  spaceBetween: 10,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 50,
    },
  },
});