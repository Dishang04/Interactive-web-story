document.getElementById('js--text').innerHTML = "";
buttonPart1 = document.getElementById('js--button-part1');
buttonPart2 = document.getElementById('js--button-part2');
buttonPart3 = document.getElementById('js--button-part3');

typeText = (textToBeTyped) => {
  if(textToBeTyped != ""){
    document.getElementById('js--text').innerHTML += textToBeTyped[0];
    textToBeTyped.splice(0,1);
    setTimeout(() => {
      typeText(textToBeTyped);
    }, 55);
  }
}

typeText(Array.from("Hallo ik ben Omar, 23 jaar oud. Ik ben de beste vriend van Ala'a en ik studeer in Homs."));

buttonPart1.onclick = function() {
  document.getElementById('js--text').innerHTML = "";
  buttonPart1.style.display = "none";
  buttonPart2.style.display = "block";
  typeText(Array.from("Door Ala'a kunnen wij met meer mensen protesteren, omdat zij het op Facebook zet."));
}

buttonPart2.onclick = function() {
  document.getElementById('js--text').innerHTML = "";
  buttonPart2.style.display = "none";
  buttonPart3.style.display = "block";
  typeText(Array.from("Wanneer het leger komt kunnen wij door haar vluchtroutes snel ontsnappen."));
}

buttonPart3.onclick = function() {
  window.location.href = "protest.html";
}
