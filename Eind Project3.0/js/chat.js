option1 = document.getElementById('js--option1');
option2 = document.getElementById('js--option2');
option3 = document.getElementById('js--option3');
option4 = document.getElementById('js--option4');



option1.onclick = function() {
  document.getElementsByClassName('telefoon__scherm__chat__mine__message--option1')[0].style.display = "block";
  option1.style.display = "none";
  document.getElementsByClassName('telefoon__scherm__options')[0].style.display = "none";
  setTimeout(function () {
    document.getElementsByClassName('telefoon__scherm__chat__container__message--thanks')[0].style.display = "block";
  }, 2000);
  setTimeout(function () {
    window.location.href = "spygadget.html";
  }, 6000);
}

option2.onclick = function() {
  document.getElementsByClassName('telefoon__scherm__chat__mine__message--option2')[0].style.display = "block";
  option2.style.display = "none";
  document.getElementsByClassName('telefoon__scherm__options')[0].style.display = "none";
  setTimeout(function () {
    document.getElementsByClassName('telefoon__scherm__chat__container__message--thanks')[0].style.display = "block";
  }, 2000);
  setTimeout(function () {
    window.location.href = "spygadget.html";
  }, 6000);
}

option3.onclick = function() {
  document.getElementsByClassName('telefoon__scherm__chat__mine__message--option3')[0].style.display = "block";
  option3.style.display = "none";
  document.getElementsByClassName('telefoon__scherm__options')[0].style.display = "none";
  setTimeout(function () {
    document.getElementsByClassName('telefoon__scherm__chat__container__message--thanks')[0].style.display = "block";
  }, 2000);
  setTimeout(function () {
    window.location.href = "spygadget.html";
  }, 6000);
}

option4.onclick = function() {
  document.getElementsByClassName('telefoon__scherm__chat__mine__message--option4')[0].style.display = "block";
  option4.style.display = "none";
  document.getElementsByClassName('telefoon__scherm__options')[0].style.display = "none";
  setTimeout(function () {
    document.getElementsByClassName('telefoon__scherm__chat__container__message--thanks')[0].style.display = "block";
  }, 2000);
  setTimeout(function () {
    window.location.href = "spygadget.html";
  }, 6000);
}
