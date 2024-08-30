//Object containing functions to perform mathematical calculations

let math = {
add: function (firstNum, secondNum) {
    return firstNum + secondNum;
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

percent: function (firstNum) {
    return firstNum / 100;
},

changeSign: function (firstNum) {
    return -(firstNum);
},

operate: function (firstNum, secondNum, operator) {
    return operator(firstNum, secondNum);
},
}
//Logic for clearing display 
const clear = document.querySelector("#clear");

clear.addEventListener("click", () => {
    displayValue.textContent = "";
});


//Logic for updating the display with numbers clicked
const displayValue = document.querySelector("#displayValue");

const numbers = document.querySelectorAll(".number");

numbers.forEach((num) => {
    num.addEventListener("click", () => {
        displayValue.textContent += num.textContent;
    });
});


//Logic for performing operations
const operators = document.querySelectorAll(".operator");

let firstOperand;
let secondOperand;
let selectedOperator;

//Each operator gets the first operand and the operation to be performed
operators.forEach((operator) => {
    operator.addEventListener("click", () => {
        firstOperand = displayValue.textContent;
        selectedOperator = operator.id;
    });
});





