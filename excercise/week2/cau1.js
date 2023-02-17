function buttonHandler(value)
{
    document.getElementById("resultinput").value +=value;
}
function clearAll()
{
    document.getElementById("resultinput").value="";
}
function clearOne()
{
    document.getElementById("resultinput").value=document.getElementById("resultinput").value.slice(0, -1);
}

function calc()
{
    var a=document.getElementById("resultinput").value;
    var b=eval(a);
    document.getElementById("resultinput").value=b;
}