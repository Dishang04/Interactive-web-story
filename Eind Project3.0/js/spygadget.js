const pen = document.getElementById("js--camera--pen");
const bluetooth = document.getElementById("js--bluetooth");
const bril = document.getElementById("js--camera--bril");
const horloge = document.getElementById("js--horloge--camera");

const modalPen = document.getElementById("js--camera--pen--modal");
const modalBluetooth = document.getElementById("js--bluetooth--camera--modal");
const modalBril = document.getElementById("js--camera--bril--modal");
const modalHorloge = document.getElementById("js--horloge--camera--modal");

const x = window.matchMedia("(min-width: 700px)");
const a = window.matchMedia("(max-width: 1199px)");
const b = window.matchMedia("(min-width: 1200px)");
const c = window.matchMedia("(max-width: 2000px)");
const d = window.matchMedia("(max-width: 700px)");

pen.onclick = function(){
  if(b.matches && c.matches){
    console.log("minder dan 1500px");
    pen.style.margin = "15%";
    pen.style.bottom = "-20%";
    setTimeout(() => {
      modalPen.style.display = "block";
    }, 1500);
  }

  // setTimeout( function(){  modalPen.style.display = "block"; }, 1500);

  if(x.matches && a.matches){
    console.log("meer dan 700px minder dan 1200");
    pen.style.margin = "20%";
    pen.style.bottom = "-15%";
    setTimeout(() => {
      modalPen.style.display = "block";
    }, 1500);
  }
  if(d.matches){
    console.log("minder dan 700px");
    pen.style.margin = "25%";
    pen.style.bottom = "-10%";
    setTimeout(() => {
      modalPen.style.display = "block";
    }, 1500);
  }
}

bluetooth.onclick = function(){
  if(b.matches && c.matches){
    console.log("minder dan 1500px");
    bluetooth.style.margin = "15%";
    bluetooth.style.bottom = "-20%";
    setTimeout(() => {
      modalBluetooth.style.display = "block";
    }, 1500);
  }
  if(x.matches && a.matches){
    console.log("meer dan 700px");
    bluetooth.style.margin = "15%";
    bluetooth.style.bottom = "-10%";
    setTimeout(() => {
      modalBluetooth.style.display = "block";
    }, 1500);
  }
  if(d.matches){
    console.log("minder dan 700px");
    bluetooth.style.margin = "20%";
    bluetooth.style.bottom = "-10%";
    setTimeout(() => {
      modalBluetooth.style.display = "block";
    }, 1500);
  }
}

bril.onclick = function(){
  if(b.matches && c.matches){
    console.log("minder dan 1500px");
    bril.style.margin = "15%";
    bril.style.bottom = "-20%";
    setTimeout(() => {
      modalBril.style.display = "block";
    }, 1500);
  }
  if(x.matches && a.matches){
    console.log("meer dan 700px");
    bril.style.margin = "15%";
    bril.style.bottom = "-10%";
    setTimeout(() => {
      modalBril.style.display = "block";
    }, 1500);
  }
  if(d.matches){
    console.log("minder dan 700px");
    bril.style.margin = "25%";
    bril.style.bottom = "-10%";
    setTimeout(() => {
      modalBril.style.display = "block";
    }, 1500);
  }
}

horloge.onclick = function(){
  if(b.matches && c.matches){
    console.log("minder dan 1500px");
    horloge.style.margin = "15%";
    horloge.style.bottom = "-20%";
    setTimeout(() => {
      modalHorloge.style.display = "block";
    }, 1500);
  }
  if(x.matches && a.matches){
    console.log("meer dan 700px");
    horloge.style.margin = "15%";
    horloge.style.bottom = "-10%";
    setTimeout(() => {
      modalHorloge.style.display = "block";
    }, 1500);
  }
  if(d.matches){
    console.log("minder dan 700px");
    horloge.style.margin = "25%";
    horloge.style.bottom = "-10%";
    setTimeout(() => {
      modalHorloge.style.display = "block";
    }, 1500);
  }
}


