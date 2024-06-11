const btn = document.querySelector(".btn");
const container = document.querySelector(".container");

btn.onclick = function () {
  this.classList.toggle("active");
  container.classList.toggle("active");

  var element = document.getElementsByClassName("home-cor");
  var selection = element[0];
  selection.classList.toggle("mystyle");

  var elementIcon = document.getElementsByClassName("contato-icone");
  for (let i = 0; i < elementIcon.length; i++) {
    elementIcon[i].classList.toggle("mystyle");
  }

  var elementIcon = document.getElementsByClassName("sobretexto");
  for (let i = 0; i < elementIcon.length; i++) {
    elementIcon[i].classList.toggle("mystyle");
  }

  var elementTecn = document.getElementsByClassName("tec1");
  for (let i = 0; i < elementTecn.length; i++) {
    elementTecn[i].classList.toggle("mystyle");
  }

  var elementTecn = document.getElementsByClassName("proj1");
  for (let i = 0; i < elementTecn.length; i++) {
    elementTecn[i].classList.toggle("mystyle");
  }
};

const li = document.querySelectorAll(".links");
const sec = document.querySelectorAll("section");

function activeMenu() {
  let len = sec.length;
  while (--len && window.scrollY + 97 < sec[len].offsetTop) {}
  li.forEach((ltx) => ltx.classList.remove("activ"));
  li[len].classList.add("activ");
}
activeMenu();
window.addEventListener("scroll", activeMenu);

const projetosdiv = document.querySelector(".projetosdiv");

const ligarEDesligarADiv = function () {
  projetosdiv.style.display === "flex"
    ? (projetosdiv.style.display = "none")
    : (projetosdiv.style.display = "flex");
};
