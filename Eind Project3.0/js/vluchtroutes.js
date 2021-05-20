let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  const slides = document.getElementsByClassName(
    "slider__image__container__figure"
  );
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex - 1].style.display = "block";
}

const image1 = document.getElementsByClassName(
  "slider__image__container__figure__img"
)[0];
const image2 = document.getElementsByClassName(
  "slider__image__container__figure__img"
)[1];
const image3 = document.getElementsByClassName(
  "slider__image__container__figure__img"
)[2];

// image1.onclick = function() {
//   window.location.href = "index.html";
// }

// image2.onclick = function() {
//   window.location.href = "index.html";
// }

// image3.onclick = function() {
//   window.location.href = "index.html";
// }

const modalVluchtroute1 = document.getElementById("js--vluchtroute1--modal");
const modalVluchtroute2 = document.getElementById("js--vluchtroute2--modal");
const modalVluchtroute3 = document.getElementById("js--vluchtroute3--modal");

image1.onclick = function () {
  modalVluchtroute1.style.display = "block";
};

image2.onclick = function () {
  modalVluchtroute2.style.display = "block";
};

image3.onclick = function () {
  modalVluchtroute3.style.display = "block";
};