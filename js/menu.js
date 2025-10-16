const openMenuBtn = document.querySelector("[menu-open]");
const closeMenuBtn = document.querySelector("[menu-close]");
const menu = document.querySelector("[menu]");
const navLinks = document.querySelectorAll(".mobile__menu-link");

const openMenu = () => {
  menu.classList.add("is-open");
  document.body.classList.add("no-scroll");
};

const closeMenu = () => {
  menu.classList.remove("is-open");
  document.body.classList.remove("no-scroll");
};

openMenuBtn.addEventListener("click", openMenu);
closeMenuBtn.addEventListener("click", closeMenu);

navLinks.forEach((link) => {
  link.addEventListener("click", closeMenu);
});
