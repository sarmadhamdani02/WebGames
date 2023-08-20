const openBtn = document.querySelector("#openBtn");
const closeBtn = document.querySelector("#closeBtn");
const Menu = document.querySelector(".nav-element");

openBtn.addEventListener("click", () => {
  Menu.classList.add("show");
});

closeBtn.addEventListener("click", (e) => {
  Menu.classList.remove("show");
});

// Ignore, If you are a beginner
// This Event Listener is used to Detect Clicks outside of the menu.
window.addEventListener("mouseup", (e) => {
  if (e.target != Menu && e.target.parentNode != Menu) {
    Menu.classList.remove("show");
  }
});
