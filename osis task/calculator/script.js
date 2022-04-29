let val=document.getElementById('a1');
buttons =document.querySelectorAll('button');
let screenValue='';
for ( item of buttons) {
    item.addEventListener('click',(e)=>{
        buttonText=e.target.innerText;
        console.log('button text is',buttonText);
        if(buttonText=="x"){
            buttonText='*';
            screenValue+= buttonText;
            val.value=screenValue;
        }
        else if(buttonText=='clear'){
            screenValue="  ";
            val.value=screenValue;
        }
        else if(buttonText=='='){
            val.value=eval(screenValue);
        }
        else if(buttonText=='del'){
            screenValue= val.value.slice(0, - 1);;
            val.value=screenValue;
        }
        else{
            screenValue+= buttonText;
            val.value=screenValue;
        }
    })
}