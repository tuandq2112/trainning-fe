
function clearScreen() {

    document.getElementById("result").value = "";

}


function display(value) {

    document.getElementById("result").value += value;

}

function calculate() {

    var p = document.getElementById("result").value;

    var q = eval(p);

    document.getElementById("result").value = q;

}

function del(){
    document.getElementById("result").value = document.getElementById("result").value.slice(0,-1);
}