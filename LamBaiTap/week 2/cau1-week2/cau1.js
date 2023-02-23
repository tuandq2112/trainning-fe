var ket_qua = document.getElementById('ket_qua');
function them(num){
    ket_qua.value += num;
}

function CLR(){
    ket_qua.value = "";
}

function DEL(){
    ket_qua.value = ket_qua.value.slice(0, -1);
}

function bang(){
    ket_qua.value = eval(ket_qua.value);
}