const body = document.querySelector("body");
const header = document.querySelector("header");
const headerNav = document.querySelector(".headerNav");
const menu = document.querySelector(".navMenu");
const forSection = document.querySelectorAll(".forSection");
const forText = document.querySelectorAll(".forText");
const navSections = document.querySelectorAll(".navSections");
const navItems = document.querySelectorAll(".navItems");
const captureNav = document.querySelectorAll(".captureNav");
const textContent = document.querySelectorAll(".textContent");

//
//
//
//
//

// ------ Navbar elements select ------

const offset = (elemPosition) => {
  const rect = elemPosition.getBoundingClientRect(),
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
};

const sectionsPositionOffTheTop = [];
for (let i = 0; i < forSection.length; i++) {
  sectionsPositionOffTheTop.push(Math.ceil(offset(forSection[i]).top));
}

const textsPositionOffTheTop = [];
for (let i = 0; i < forText.length; i++) {
  textsPositionOffTheTop.push(Math.ceil(offset(forText[i]).top));
}

const calcCurrentPosition = (array, navItems, elemHeight, className, px) => {
  const changeClass = (i) => {
    for (let j = 0; j < navItems.length; j++) {
      navItems[j].classList.contains(className) &&
        navItems[j].classList.remove(className);
    }
    navItems[i].classList.add(className);
  };

  for (let i = 0; i < navItems.length; i++) {
    if (
      pageYOffset > array[i] - px &&
      pageYOffset < array[i] + elemHeight[i].offsetHeight - px
    ) {
      changeClass(i);
    }
  }

  if (pageYOffset > array[array.length - 1]) {
    changeClass(array.length - 1);
  }
};

const scrollEvent = () => {
  calcCurrentPosition(
    sectionsPositionOffTheTop,
    navItems,
    navSections,
    "navItemActive",
    100
  ); // Top Nav
  calcCurrentPosition(textsPositionOffTheTop, captureNav, textContent, "current", 200); // Text Nav
};

window.addEventListener("scroll", scrollEvent);
window.addEventListener("load", scrollEvent);

//
//
//
//
//

// Menu Toggle
const toggleActive = () => headerNav.classList.toggle("navActive");

menu.addEventListener("click", toggleActive);

window.addEventListener("resize", () => {
  if (window.innerWidth >= 992) {
    headerNav.classList.contains("navActive") && toggleActive();
  }
});

//
//
//
//
//

// PageScroll
const pageScroll = (value) => {
  if (pageYOffset > value) {
    header.classList.add("active");
  }
  if (pageYOffset < value) {
    header.classList.remove("active");
  }
};
// PageScroll
const headerFixation = () => {
  if (window.innerWidth < 992) {
    pageScroll(150);
  } else {
    pageScroll(300);
  }
};

window.addEventListener("scroll", headerFixation);

//
//
//
//
//

// Slick-Slider
$(document).ready(function () {
  $(".reviewsSlider").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 2000,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    dots: true,
    adaptiveHeight: true,
    easing: "linear",
    pauseOnFocus: false,
    pauseOnHover: false,
    pauseOnDotsHover: false,
    touchThreshold: 10,
    touchMove: true,
    waitForAnimate: false,
    centerMode: false,
    centerMargin: 10,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          centerMode: true,
          slidesToShow: 1.65,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        },
      },
    ],
  });
});
