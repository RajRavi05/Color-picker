const input = document.querySelector(".controls input");
const modal = document.querySelector(".modal");
const code = document.querySelector("#colorCode");
const container = document.querySelector(".container");

input.addEventListener("change", function () {
  document.documentElement.style.setProperty(`--${this.name}`, this.value);
  console.log(this.name, this.value);
  modal.classList.toggle("display");
  code.textContent = this.value;
  container.style.filter = "blur(5px)";
});
