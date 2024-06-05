
let submit= document.querySelector(".submit");



submit.addEventListener("click",()=>{
    let operator= document.querySelector(".operator").value;
    let num1= document.querySelector(".num1").value;
    let num2= document.querySelector(".num2").value;
    num1=Number(num1); num2=Number(num2);
    let result=document.querySelector(".result");
    //console.log(operator);

    switch(operator){
        case "plus": 
            result.innerHTML=num1+num2;
            break;
    
        case "minus": 
            result.innerHTML=num1-num2;
            break;
    
        case "mul": 
            result.innerHTML=num1*num2;
            break;
    
        case "div": 
            result.innerHTML=num1/num2;
            break;
    
        case "exp": 
            result.innerHTML=num1**num2;
            break;
    
        case "mod": 
            result.innerHTML=num1%num2;
            break;
        
        default:
            result.innerHTML="Invalid Input";
            break;
    
    }

});



