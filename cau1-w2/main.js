// const numbers = document.getElementsByClassName('but');
const result = document.getElementById("result");

function display (value) {
    result.value += value;
}

function calculate(){
    let p = result.value;
    let q = eval(p);
    result.value = q;
}

function clearSreen() {
    result.value = "";
}

function undo() {
    let res = result.value;
    result.value = res.slice(0,-1); 

}



