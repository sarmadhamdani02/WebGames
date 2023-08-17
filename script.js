const openBtn = document.querySelector("#openBtn");
const closeBtn = document.querySelector("#closeBtn");
const Menu = document.querySelector(".nav-element");

openBtn.addEventListener("click", () => {
  Menu.classList.add("show");
});

closeBtn.addEventListener("click", () => {
  Menu.classList.remove("show");
});

window.addEventListener("mouseup", (e) => {
  if (e.target !== Menu && e.target.parentNode !== Menu) {
    Menu.classList.remove("show");
  }
});
