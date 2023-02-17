var input=document.querySelector('.input');
var items=Array.from(document.querySelectorAll('item'));
items.forEach(funtion(btn))
    .addEventListener('click')
     funtion(){
        if(input.innerHTML=='0')
        input.innerHTML='';
        if(btn.innerHTML=='CLR')
        input.innerHTML='0';
        else if(btn.innerHTML=='DEL'){
            var arrtext=Array.from(input.innerHTML);
            arrtext.splice(arrtext.length-1,1);
            if(arrtext.length!=0)
            input.innerHTML.arrtext.join('');
            else input.innerHTML='0';
            if(btn.innerHTML=='=')
            input.innerHTML=eval(input.innerHTML);
        
        else input.innerHTML+=btn.innerHTML;
        }
        }
