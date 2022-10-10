let previousValue= "";
let currentValue= "";
let operator= "";
document.addEventListener("DOMContentLoaded", function(){
   let clear= document.querySelector(".clear");
   let decimal= document.querySelector(".decimal");
   let equal= document.querySelector(".equal");
   let numbers= document.querySelectorAll(".number");
   let operators= document.querySelectorAll(".operator");
   let previousScreen= document.querySelector(".previous");
   let currentScreen= document.querySelector(".current");
   numbers.forEach((number)=> number.addEventListener("click", function(e){
   handleNum(e.target.textContent);
   currentScreen.textContent= currentValue;
   }))
   operators.forEach((op)=> op.addEventListener("click",function(e){
    handleOperator(e.target.textContent);
    previousScreen.textContent= previousValue+ " "+ operator;
    currentScreen.textContent= "";
   }
))
clear.addEventListener("click", function(){
    previousValue= "";
    currentValue= "";
    operator= "";
    previousScreen.textContent= previousValue;
    currentScreen.textContent= previousValue;
})
equal.addEventListener("click",function(){
    calculate();
    previousScreen.textContent= "";
    currentScreen.textContent= previousValue;
})
decimal.addEventListener("click", function(){
    addDecimal();
})
})
function handleNum(no){
    if(currentValue.length<=8){
currentValue +=no;
    }
}
function handleOperator(op){
    operator= op;
    previousValue= currentValue;
    currentValue= "";
}
function calculate(){
    if(previousValue !="" && currentValue !=""){
    previousValue= Number(previousValue);
    currentValue= Number(currentValue);
    if(operator == '+'){
        previousValue+= currentValue;
    } 
    else if(operator == '-'){
    previousValue-= currentValue;
    } else if (operator == '*'){
        previousValue*= currentValue;
    } else {
        previousValue/= currentValue;
    }
}
previousValue= previousValue.toString();
currentValue= currentValue.toString();
}
function addDecimal(){
    if(!currentValue.includes(".")){
        currentValue += '.';
    }
}