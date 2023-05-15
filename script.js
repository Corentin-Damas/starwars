"use strict";

const prevArrow = document.querySelector(".previous-arrow");
const nextArrow = document.querySelector(".next-arrow");
const nbsteps = document.querySelectorAll(".line");

console.log("helloword!");
let curentStepper = 1;

nextArrow.addEventListener("click", function () {
  console.log("next");
  curentStepper++;
  if (curentStepper > nbsteps.length) {
    curentStepper = nbsteps.length;
  }
  update();
});

prevArrow.addEventListener("click", function () {
  console.log("previ");
  curentStepper--;
  if (curentStepper < 1) {
    curentStepper = 1;
  }
  update();
});

function update() {
  nbsteps.forEach((step, index) => {
    if (index < curentStepper) {
      if (step.classList.contains("inactive")) {
        step.classList.remove("inactive")
        step.classList.add("active");
      }
    } else {
        if (step.classList.contains("active")) {
          step.classList.remove("active")
          step.classList.add("inactive");
      }
  }});

  const actives = document.querySelectorAll(".active");
  if (curentStepper == nbsteps.length) {
    nextArrow.disabled = true;
  } else if (curentStepper <= 1) {
    prevArrow.disabled = true;
  } else {
    nextArrow.disabled = false;
    prevArrow.disabled = false;
  }
}
