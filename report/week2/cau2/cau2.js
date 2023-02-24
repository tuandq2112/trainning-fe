function yes() {
    document.getElementById("tobietma").innerText = "Tớ biết mà =))"; 
}

function no() {
    var x = Math.floor(Math.random() * 800);
    document.getElementById("khong").style.left = x + "px";
    document.getElementById("khong").style.right = x + "px";
    document.getElementById("khong").style.bottom = x + "px";
}