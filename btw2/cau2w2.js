function yesClick() {
  document.getElementById("abc").innerText = "Tớ biết mà =))"; 
}

function noHover() {
  var x = Math.floor(Math.random() * window.innerWidth);
  var y = Math.floor(Math.random() * window.innerHeight);
document.getElementById("No").style.left = x + "px";
document.getElementById("No").style.top = y + "px";
}