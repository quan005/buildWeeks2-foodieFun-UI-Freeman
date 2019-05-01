// ----- Navigation ----- //
const width = window.innerWidth;
const ogHeader = document.querySelector(".og-header");
const ogNav = document.querySelector(".og-header nav");
const ogLogo = document.querySelector(".og-header nav .nav-contain .logo-container .logo");
const ogFixedLogo = document.querySelector(".logo-container .fixed-logo");
const topOfOgNav = ogHeader.offsetTop + 20;
const mobileHeader = document.querySelector(".mobile-header");
const mobileNav = document.querySelector(".mobile-header nav");
const mobileLogo = document.querySelector(".mobile-header nav .nav-contain .logo-container .logo");
const topOfmobileNav = mobileHeader.offsetTop + 20;
const hamburger = document.querySelector(".burger-container");
const navLinks = document.querySelector(".mobile-header .navLinks");
const links = document.querySelectorAll(".mobile-header .navLinks li");
const hrefs = document.querySelectorAll(".mobile-header .navLinks li a");
const navBar = document.querySelector(".mobile-header nav");


// this determines which header to use Mobile or Desktop //
function whichHeader() {
  if(width <= 767) {
    ogHeader.classList.add("hidden");
    mobileHeader.classList.remove("hidden");
  } else {
    ogHeader.classList.remove("hidden");
    mobileHeader.classList.add("hidden");
  }
};

window.addEventListener("load", whichHeader);


// this adds functionality to the hamburger button //
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navLinks.classList.toggle("open");
  links.forEach(link => {
    link.classList.toggle("fade");
  });
});

hrefs.forEach(href => {
  href.addEventListener("click", () => {
    navLinks.classList.remove("open");
    hamburger.classList.remove("active");
    links.forEach(link => {
      link.classList.remove("fade");
    });
  });
});


// this adds a fixed Nav to the Desktop header //
function fixedOgNav() {
  if(window.scrollY >= topOfOgNav) {;
    ogNav.classList.add("fixed-nav");
    ogLogo.setAttribute("src", "images/foodiefun-logo-small.svg");
  } else {
    ogNav.classList.remove("fixed-nav");
    ogLogo.setAttribute("src", "images/foodiefun-logo-long.svg");
  }
};

window.addEventListener("scroll", fixedOgNav);



// this adds a fixed Nav to the mobile header //
function fixedMobileNav() {
  if(window.scrollY >= topOfmobileNav) {;
    mobileNav.classList.add("fixed-nav");
    mobileLogo.setAttribute("src", "images/foodiefun-logo-small.svg");
  } else {
    mobileNav.classList.remove("fixed-nav");
    mobileLogo.setAttribute("src", "images/foodiefun-logo-long.svg");
  }
};

window.addEventListener("scroll", fixedMobileNav);
