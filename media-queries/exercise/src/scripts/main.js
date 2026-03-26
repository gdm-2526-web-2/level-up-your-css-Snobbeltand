import "../styles/main.css";

const togglebutton = document.querySelector("#toggle-color-mode");
const body = document.querySelector("body");

togglebutton.addEventListener("click", () => {
  body.classList.toggle("light-mode");
});
