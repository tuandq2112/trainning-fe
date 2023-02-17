function CLR()
{
    document.getElementById("abc").value="";
    document.getElementById("abcd").value="";
}
// function display(value){
//     document.getElementById("abc").value+= value;

// }
function display(value){
    // document.getElementById("abc").value+= value;
    document.getElementById("abcd").value+= value;
    
}
function calculate() {

    var p = document.getElementById("abcd").value;
    
    var q = eval(p);
    
    document.getElementById("abc").value = q;
    
    }
    function DEL() {
        document.getElementById("abcd").value = document.getElementById("abcd").value.slice(0, -1);
    }
        
    