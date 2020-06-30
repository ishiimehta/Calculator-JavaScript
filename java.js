const numbers= document.querySelectorAll(".number");
console.log(numbers);
const calculatorScreen = document.querySelector(".calculator-screen");
numbers.forEach((number)=>{
  number.addEventListener("click",(event)=>{
  console.log(event.target.value);
  inputNumber(event.target.value);
  updateScreen(currentInput);

});
});
const updateScreen=(number)=> {
  calculatorScreen.value =number;
}

let prevInput='0';
let calculationOperator=' ';
let currentInput='0';

const inputNumber=(number)=>{
  if(currentInput==='0'){
    currentInput=number;
  }
  else{
    currentInput+=number;
  }
}


const operators = document.querySelectorAll(".operator");

operators.forEach((operator)=>{
  operator.addEventListener(("click"),(event)=>{
    inputOperator(event.target.value);

  });
});

const inputOperator=(operator)=>{
  prevInput=currentInput;
  calculationOperator=operator;
  currentInput="0";
}
const equalSign =document.querySelector('.equal-sign');
equalSign.addEventListener("click",()=>{
  calculate();
  updateScreen(currentInput);
//  console.log("equal button is pressed");
});
const calculate=() => {
  let result=0;
  switch(calculationOperator){
    case "+":
        result=parseInt(prevInput )+parseInt(currentInput);
        break;
    case "-":
        result=parseInt(prevInput) -parseInt(currentInput);
        break;
    case "*":
        result=parseInt(prevInput)*parseInt(currentInput);
        break;
    case "/":
        result=parseInt(prevInput)/parseInt(currentInput);
        break;
    default: return;
  }
  currentInput=result.toString();
  calculationOperator=" ";


}

const clearBtn=document.querySelector('.all-clear');
const clearAll=()=>{
  prevInput='0';
  calculationOperator=' ';
  currentInput="0";
}
clearBtn.addEventListener('click', ()=>{
  clearAll();
  updateScreen(currentInput);
}
);
