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

typeText(Array.from("Hallo ik ben Ala'a, ik woon in Chicago en help via het internet de revolutie in Syrië."));

buttonPart1.onclick = function() {
  document.getElementById('js--text').innerHTML = "";
  buttonPart1.style.display = "none";
  buttonPart2.style.display = "block";
  typeText(Array.from("Ons doel is om beelden vanuit Syrië te laten zien aan de wereld, zodat de president gaat aftreden."));
}

buttonPart2.onclick = function() {
  document.getElementById('js--text').innerHTML = "";
  buttonPart2.style.display = "none";
  buttonPart3.style.display = "block";
  typeText(Array.from("Dit doe ik via social media. Vaak krijg ik berichten via Facebook binnen van mensen die in Syrië wonen."));
}

buttonPart3.onclick = function() {
  window.location.href = "telefoon.html";
}
