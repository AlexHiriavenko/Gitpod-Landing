const burgerBtn = document.querySelector(".header-burger");
const nav = document.querySelector("header nav");

function toggleBurger(event) {
  const target = event.target.closest("button");
  if (target) {
    if (nav.matches(".active")) {
      nav.classList.remove("active");
    } else {
      nav.classList.add("active");
    }
  }
}

burgerBtn.addEventListener("click", toggleBurger);
