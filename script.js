"use strict";

const prevArrow = document.querySelector(".previous-arrow");
const nextArrow = document.querySelector(".next-arrow");
const nbsteps = document.querySelectorAll(".line");
const logos = document.querySelectorAll(".logo");
const titles = document.querySelectorAll(".film-title");
const descriptions = document.querySelectorAll(".description");

console.log("helloword!");
let curentStepper = 1;

nextArrow.addEventListener("click", function () {
  console.log("next");
  curentStepper++;
  if (curentStepper > nbsteps.length) {
    curentStepper = nbsteps.length;
  }
  updateStepper();
});

prevArrow.addEventListener("click", function () {
  console.log("previ");
  curentStepper--;
  if (curentStepper < 1) {
    curentStepper = 1;
  }
  updateStepper();
});

function updateStepper() {
  nbsteps.forEach((step, index) => {
    if (index < curentStepper) {
      if (step.classList.contains("inactive")) {
        step.classList.remove("inactive");
        step.classList.add("active");
      }
    } else {
      if (step.classList.contains("active")) {
        step.classList.remove("active");
        step.classList.add("inactive");
      }
    }
  });

  logos.forEach((logo, index) => {
    if (index == curentStepper-1) {
      logo.classList.add("logo-active")
    } 
    if (index > curentStepper-1) {
      logo.classList.remove("logo-active")
    }
    if (index < curentStepper-1) {
      logo.classList.remove("logo-active")
    }
  });

  titles.forEach((title, index) => {
    if (index == curentStepper-1) {
      title.classList.add("title-active")
    } 
    if (index > curentStepper-1) {
      title.classList.remove("title-active")
    }
    if (index < curentStepper-1) {
      title.classList.remove("title-active")
    }
  });

  descriptions.forEach((description, index) => {
    if (index == curentStepper-1) {
      description.classList.add("text-active")
    } 
    if (index > curentStepper-1) {
      description.classList.remove("text-active")
    }
    if (index < curentStepper-1) {
      description.classList.remove("text-active")
    }
  });

  // logos.forEach((logo, index) => {
  //   if (index < curentStepper) {

  //     logo.classList.add("logo-active");
  //   } else {
  //     logo.classList.remove("logo-active");
  //   }
  // });

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

function updateContent() {}
