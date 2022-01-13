var lovesong = document.getElementById("lovesong");
var icon = document.getElementById("icon");
lovesong.volume = 0.2;
icon.onclick = function(){
if(lovesong.paused){
lovesong.play();
icon.src = "image/pause.png"
}
else{
lovesong.pause();
icon.src = "image/play.png"
}
}