const items = document.getElementById("js--menu--items");

function openNav(){
    document.getElementById("js--myNav").style.width = "75%";
    items.style.display = "block";
}

function closeNav(){
    document.getElementById("js--myNav").style.width = "0%";
    items.style.display = "none";
}




