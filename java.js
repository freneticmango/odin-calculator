//Logic for updating the display with numberKeys clicked
const display = document.querySelector("#display");

let displayValue;

const numberKeys = document.querySelectorAll(".number");
 numberKeys.forEach((num) => {
    num.addEventListener("click", () => {
        display.textContent += num.textContent;
        displayValue = display.textContent;
    });
});

const decimalKey = document.querySelector("#decimal")


//Logic for clearing display 
const clear = document.querySelector("#clear");
const clearDisplay = () => {
    display.textContent = ""
    displayValue = "";
    firstOperand = "";
    secondOperand = ""; 
}
clear.addEventListener("click", () => clearDisplay());

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


//Variables for holding operands and operators for calculation
let firstOperand;
let secondOperand;
let selectedOperator;

let operatorPressed;

//Each operator gets the first operand and the operation to be performed, and then clears the display for the next operand. operatorPressed is set to true.
const operators = document.querySelectorAll(".operator");

operators.forEach((operator) => {
    operator.addEventListener("click", () => {
        firstOperand = displayValue;
        selectedOperator = operator.id;
        operatorPressed = true;
        display.textContent = "";
    });
});

//The equals button gets the second operand and performs an operation if operatorPressed is true. Once the operation is performed, operatorPressed is set to false.
const equals = document.querySelector("#equals");

equals.addEventListener("click", () => {
    secondOperand = displayValue;

    if (operatorPressed) {
        let result = math[selectedOperator](firstOperand,secondOperand);
        display.textContent = displayValue = firstOperand = result;
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




