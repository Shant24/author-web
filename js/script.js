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

// ------ Numbers Counting ------
$(".bigNumbers").counterUp({ delay: 10, time: 6000 });

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

// //
// //
// //
// //
// //

// // Slick-Slider
// $(document).ready(function () {
//   $(".reviewsSlider").slick({
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     speed: 2000,
//     autoplay: false,
//     autoplaySpeed: 3000,
//     arrows: false,
//     dots: true,
//     adaptiveHeight: true,
//     // variableWidth: true,
//     easing: "linear",
//     pauseOnFocus: false,
//     pauseOnHover: false,
//     pauseOnDotsHover: false,
//     touchThreshold: 10,
//     touchMove: true,
//     waitForAnimate: true,
//     centerMode: false,
//     centerMargin: 10,
//     responsive: [
//       {
//         breakpoint: 992,
//         settings: {
//           centerMode: true,
//           slidesToShow: 1.67,
//         },
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 1,
//           centerMode: false,
//           // variableWidth: true,
//         },
//       },
//     ],
//   });
// });

//
//
//
//
//

// owl carousel
$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    items: 3,
    slideBy: 1,
    margin: 30,
    loop: true,
    center: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    freeDrag: false,
    stagePadding: 0, // ajic dzaxic paddingnera talis
    merge: false,
    mergeFit: true,
    autoWidth: false,
    startPosition: 0,
    URLhashListener: false,
    nav: false,
    rewind: true,
    navText: ["prev", "next"],
    navElement: "div",
    slideTransition: ``, // `3s`
    dots: true,
    dotsEach: false,
    dotsData: false,
    lazyLoad: false,
    lazyLoadEager: 0, // "2"
    autoplay: false,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    // smartSpeed: 250,
    // fluidSpeed: ,
    autoplaySpeed: false,
    navSpeed: false,
    // dotsSpeed: ,
    dragEndSpeed: false,
    callbacks: true,
    responsive: {},
    responsiveRefreshRate: 200,
    responsiveBaseElement: window,
    video: false,
    videoHeight: false,
    videoWidth: false,
    animateOut: false,
    animateIn: false,
    fallbackEasing: "swing",
    info: false,
    nestedItemSelector: false,
    itemElement: "div",
    stageElement: "div",
    navContainer: false,
    dotsContainer: false,
    checkVisible: true,
  });
});
