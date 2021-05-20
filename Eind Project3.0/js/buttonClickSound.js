const buttonClick =  new Audio("./audio/clickAudio.mp4");

document.getElementById("js--playButton").onclick = function(){
    console.log("button click");
    buttonClick.play();
    setTimeout( function(){  location.href = "intro.html"; }, 450);
}

//ARROW FUNCTION WEGGEHAALD WANT SUPPORT NIET IN IE!



