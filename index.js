const menuToggle = document.querySelector("#menu-toggle"),
  closeToggle = document.querySelector("#close-toggle"),
  navList = document.querySelector(".nav-list");

menuToggle.addEventListener("click", () => {
  navList.classList.add("show");
});

closeToggle.addEventListener("click", () => {
  navList.classList.remove("show");
});

// APPLY FOR NAVBAR WHEN SCROLL
const navbar = document.querySelector(".header");
window.addEventListener("scroll", () => {
  if (window.scrollY >= 10) {
    navbar.classList.add("scrolling-class");
  } else {
    navbar.classList.remove("scrolling-class");
  }
});
