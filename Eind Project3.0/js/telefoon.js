notification = document.getElementsByClassName('samsung__screen__icon')[0];
facebookLogo = document.getElementById('js--facebook-logo');

const notificationSound =  new Audio("./audio/notificationSound.mp4");

setTimeout(function () {
  notification.classList.add("js--notification");
  notification.style.display = "block";
  notificationSound.play();
}, 3000);

notification.onclick = function() {
  window.location.href = "chat.html";
}

facebookLogo.onclick = function() {
  window.location.href = "chat.html";
}
