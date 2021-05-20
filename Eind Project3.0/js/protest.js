const video = document.getElementById("js--protestVideo");
const playButton = document.getElementById('js--play');
const explosion = document.getElementById('js--myAudio');
document.getElementsByClassName('shake')[0].style.animation = "";
document.getElementsByClassName('shake')[0].style.animationIterationCount = "";

// video.onended = function() {
//   alert("Ben klaar")
// }
playButton.onclick = function() {
  playButton.style.display = "none";
  video.play();
  setTimeout(function () {
    if (video.currentTime >= 30){
      explosion.play();
      document.getElementsByClassName('shake')[0].style.animation = "shake 0.3s";
      document.getElementsByClassName('shake')[0].style.animationIterationCount = "18";
      document.getElementsByClassName('shake')[0].style.overflow = "hidden";
    }

    explosion.addEventListener('ended', function(event) {
    console.log("Audio has ended");
    document.getElementsByClassName('shake')[0].style.animation = "";
    document.getElementsByClassName('shake')[0].style.animationIterationCount = "";
    document.getElementsByClassName('shake')[0].style.overflow = "show";
    });

    video.addEventListener('ended', function(event) {
      window.location.href = "vluchtroutes.html"
    });
  }, 31000);
}
