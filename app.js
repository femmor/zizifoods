let slideShow = document.getElementById("slideshow");
let slides = slideShow.getElementsByTagName("img");
let index = 0;

const leftControl = document.getElementById("leftControl");
const rightControl = document.getElementById("rightControl");
leftControl.addEventListener("click", movePrev);
rightControl.addEventListener("click", moveNext);

// Next Slide Function
function nextSlide() {
  slides[index].classList.remove("active");
  index = (index + 1) % slides.length;
  slides[index].classList.add("active");
}

function moveNext() {
  nextSlide();
  nextSlideText();
}

// Prev Slide Function
function prevSlide() {
  slides[index].classList.remove("active");
  index = (index - 1 + slides.length) % slides.length;
  slides[index].classList.add("active");
}

function movePrev() {
  prevSlide();
  prevSlideText();
}

// slideShowText

let slideShowText = document.getElementById("slideShowText");
let slideShowTextContent = slideShowText.getElementsByTagName("div");
i = 0;

// Next Slide Function
function nextSlideText() {
  slideShowTextContent[i].classList.remove("active");
  i = (i + 1) % slideShowTextContent.length;
  slideShowTextContent[i].classList.add("active");
}

// Prev Slide Function
function prevSlideText() {
  slideShowTextContent[i].classList.remove("active");
  i = (i - 1 + slideShowTextContent.length) % slideShowTextContent.length;
  slideShowTextContent[i].classList.add("active");
}
