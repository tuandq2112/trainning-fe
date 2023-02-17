function display(value) {
    document.getElementById("result").value += value;
    }

function clearAll() {
document.getElementById("result").value ="";
}

function clearOne() {
    document.getElementById("result").value = document.getElementById("result").value.slice(0, -1);
}

function calc() {
var a = document.getElementById("result").value;
var b = eval(a);
document.getElementById("result").value = b;
}

