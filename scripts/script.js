// get elements
var slider = document.querySelector(".slider");
var sliderContainer = document.querySelector(".slides-container");
var nextBtn = document.querySelector(".next-btn");
var preBtn = document.querySelector(".pre-btn");
var eachSlide = document.querySelectorAll(".slides");
var x = 0;
// commands
console.log(slider);
console.log(sliderContainer);
console.log(eachSlide);

nextBtn = nextBtn.addEventListener("click", nextSlide);
function nextSlide() {
  if (x < eachSlide[0].clientWidth * eachSlide.length) {
    console.log(x);
    x += eachSlide[0].clientWidth;
    console.log(x);
    eachSlide.forEach((element) => {
      element.style.transform = `translateX(${-x}px)`;
      element.style.transition = "all 1.5s ease-out";
    });
  } else if (x == eachSlide[0].clientWidth * eachSlide.length) {
    x = 0;
    eachSlide.forEach((element) => {
      element.style.transform = `translateX(${-x}px)`;
    });
  }
}
