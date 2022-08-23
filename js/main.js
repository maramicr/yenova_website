// código slider
const slider = document.querySelector("#slider");
let sliderElement = document.querySelectorAll(".slider__element");
// obtiene ultimo slider
let sliderElementLast = sliderElement[sliderElement.length - 1];

const btnLeft = document.querySelector("#btn-left");
const btnRight = document.querySelector("#btn-right");

slider.insertAdjacentElement("afterbegin", sliderElementLast);

// funciones de movivmiento
function next() {
  let sliderElementFirst = document.querySelectorAll(".slider__element")[0];
  slider.style.marginLeft = "-200%";
  slider.style.transition = "all 0.7s";
  setTimeout(function () {
    slider.style.transition = "none";
    slider.insertAdjacentElement("beforeend", sliderElementFirst);
    slider.style.marginLeft = "-100%";
  }, 700);
}

function prev() {
  let sliderElement = document.querySelectorAll(".slider__element");
  let sliderElementLast = sliderElement[sliderElement.length - 1];
  slider.style.marginLeft = "0";
  slider.style.transition = "all 0.7s";
  setTimeout(function () {
    slider.style.transition = "none";
    slider.insertAdjacentElement("afterbegin", sliderElementLast);
    slider.style.marginLeft = "-100%";
  }, 700);
}

btnRight.addEventListener("click", function () {
  next();
});

btnLeft.addEventListener("click", function () {
  prev();
});

// movimiento automático
setInterval(function () {
  next();
}, 6000);
