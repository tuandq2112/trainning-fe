function clearAll() {
document.getElementById("result").value ="";
}

// function clearOne {

// }

function display(value) {
document.getElementById("result").value += value;
}

function calc() {
var a = document.getElementById("result").value;
var b = eval(a);
document.getElementById("result").value = b;
}

