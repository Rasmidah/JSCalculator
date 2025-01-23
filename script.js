//declare global variables

let firstNum = '';
let operator = '';
let secondNum = '';

//use getElementById to get the value from display box
let display = document.getElementById('display'); 

//function to capture numbers
function addNumber(num) {
    if (operator === '') {
        firstNum += num;
        display.value = firstNum;
        console.log(firstNum);
    }
    
    else{
        secondNum += num;
        display.value = secondNum;
        console.log(secondNum);
    }
}

//function to capture the operator
function addOperator(op) {
    firstNum = display.value;
    console.log(firstNum);
    operator = op;
    console.log(operator);
}

//clearing the display
function clearDisplay() {
    document.getElementById('display').value = '';
    firstNum = '';
    secondNum = '';
    operator = '';
}

//function to perform calculations
function calculate() {
    let result = 0;
    let num1 = Number(firstNum); //convert the string into a data type to calculate
    console.log(num1);
    let num2 = Number(secondNum);
    console.log(num2);

    //check whether it's not a number
    if (isNaN(num1) || isNaN(num2)){
        display.value = "Error";
        return;
    }

    if (operator === '+') {
        result = num1 + num2;
    } else if( operator === '-') {
        result = num1 - num2 ;
    } else if (operator === '*') {
        result = num1 * num2;
    } else if (operator === '/') {
        result = num2 !== 0 ? num1/num2: 'Error';
    }
    else {
        return;
    }

    //update the display area with the result value
        display.value = result;
        console.log(result);
        firstNum = '';
        secondNum = '';
        operator = '';
}

