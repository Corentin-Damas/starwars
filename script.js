"use strict";

const prevArrow = document.querySelector(".previous-arrow");
const nextArrow = document.querySelector(".next-arrow");
const nbsteps = document.querySelectorAll(".line");
const logos = document.querySelectorAll(".logo");
const titles = document.querySelectorAll(".film-title");
const descriptions = document.querySelectorAll(".description");
const posters = document.querySelectorAll(".poster");
const datesCentuary19 = document.querySelector(".date-centuary-I");
const datesCentuary20 = document.querySelector(".date-centuary-II");
const datesDecimales = document.querySelectorAll(".date-decimal");

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
    if (index == curentStepper - 1) {
      logo.classList.add("logo-active");
    }
    if (index > curentStepper - 1) {
      logo.classList.remove("logo-active");
    }
    if (index < curentStepper - 1) {
      logo.classList.remove("logo-active");
    }
  });

  titles.forEach((title, index) => {
    if (index == curentStepper - 1) {
      title.classList.add("title-active");
    }
    if (index > curentStepper - 1) {
      title.classList.remove("title-active");
    }
    if (index < curentStepper - 1) {
      title.classList.remove("title-active");
    }
  });

  descriptions.forEach((description, index) => {
    if (index == curentStepper - 1) {
      description.classList.add("text-active");
    }

    if (index == curentStepper - 1) {
      description.classList.add("text-active");
    }
    if (index > curentStepper - 1) {
      description.classList.remove("text-active");
    }
    if (index < curentStepper - 1) {
      description.classList.remove("text-active");
    }
  });

  posters.forEach((poster, index) => {
    if (index < curentStepper) {
      poster.classList.remove("poster-inactive");
    } else {
      poster.classList.add("poster-inactive");
    }
  });

  datesDecimales.forEach((date, index) => {
    curentStepper == 5 ? changeCentuary() : pullbackCentuary()
    if (index == curentStepper - 1) {
      date.classList.add("date-active");
      
    }
    if (index > curentStepper - 1) {
      date.classList.remove("date-active");
    }
    if (index < curentStepper - 1) {
      date.classList.remove("date-active");
    }

    function changeCentuary() {
      datesCentuary20.classList.toggle("date-active")
      datesCentuary19.classList.remove("date-active")
    }

    function pullbackCentuary() {
      datesCentuary20.classList.remove("date-active")
      datesCentuary19.classList.add("date-active")
    }
  
  });




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


