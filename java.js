//Logic for updating the display with number clicked
const display = document.querySelector("#display");

function limitDisplay(value) {
    return +parseFloat(value).toFixed(14);
}

function updateDisplay (element) {
    displayValue += element.textContent;
    display.textContent = limitDisplay(displayValue);
}

let displayValue = "";

const numberKeys = document.querySelectorAll(".number");

numberKeys.forEach((numKey) => {
    if (numKey.id == "decimal") {
        numKey.addEventListener("click", () => {
            if (!displayValue.includes(".")) {
                updateDisplay(numKey);
            }
        })
    } else { 
        numKey.addEventListener("click", () => updateDisplay(numKey))
    };
});


//Logic for clearing display 
const clearKey = document.querySelector("#clear");

const clearDisplay = () => {
    display.textContent = ""
    displayValue = "";
    firstOperand = "";
    secondOperand = ""; 
}
clearKey.addEventListener("click", () => clearDisplay());

//Object containing functions to perform operations
let math = {
    add: function (firstNum, secondNum) {
        return (+firstNum) + (+secondNum);
    },

    subtract: function (firstNum, secondNum) {
        return firstNum - secondNum;
    },

    multiply: function (firstNum, secondNum) {
        return firstNum * secondNum;
    },

    divide: function (firstNum, secondNum) {
        return firstNum / secondNum;
    },
}


//Variables for holding operands and operatorKeys for calculation
let firstOperand;
let secondOperand;
let selectedOperator;

let operatorPressed;

//Each operator gets the first operand and the operation to be performed, and then clears the display for the next operand. operatorPressed is set to true.
const operatorKeys = document.querySelectorAll(".operator");

operatorKeys.forEach((operator) => {
    operator.addEventListener("click", () => {
        firstOperand = displayValue;
        displayValue = "";
        selectedOperator = operator.id;
        operatorPressed = true;
    });
});

//The equalsKey button gets the second operand and performs an operation if operatorPressed is true. Once the operation is performed, operatorPressed is set to false.
const equalsKey = document.querySelector("#equals");

equalsKey.addEventListener("click", () => {
    secondOperand = displayValue;

    if (operatorPressed) {
        let result = math[selectedOperator](firstOperand,secondOperand);
        firstOperand = displayValue = result;
        display.textContent = limitDisplay(displayValue); 
        operatorPressed = false;
    };
});

const changeSignKey = document.querySelector("#changeSign");

changeSignKey.addEventListener("click", () => {
    displayValue *= (-1);
    display.textContent = displayValue;
});


const percentKey = document.querySelector("#percent");

percentKey.addEventListener("click", () => {
    displayValue /= 100;
});




