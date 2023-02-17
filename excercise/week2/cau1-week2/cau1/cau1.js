function CLR(){
    document.getElementById("ket_qua").value = "";
}

function DEL(){
    document.getElementById("ket_qua").value = document.getElementById("ket_qua").value.slice(0, -1);
}
function bang(){
    var ket_qua = document.getElementById("ket_qua");
    ket_qua.value = eval(ket_qua.value);
}

function them(num){
    document.getElementById("ket_qua").value += num;
}