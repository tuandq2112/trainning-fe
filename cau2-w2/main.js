let pos = 0;
const khong=getElementById("khong");
function hienthi() {
    document.getElementById("ans").innerHTML="Tớ biết mà :))";

}
function move() {

    
    if(pos >= 0 && pos <= 1000) {
        pos += 20;
        document.getElementById("khong").style.left = pos + "px"; 
    }
    else {
        pos -= 20;
        document.getElementById("khong").style.left = (1000-pos) + "px"; 
    }
 
}




