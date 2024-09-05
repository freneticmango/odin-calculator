//Updates the display with number clicked, limits the number of decimal places displayed.
const display = document.querySelector("#display");

let displayValue = "";

function limitDisplay(value) {
    return +parseFloat(value).toFixed(14);
}

function updateDisplay (element) {
    displayValue += element.textContent;
    display.textContent = limitDisplay(displayValue);
}

//Clears the display and all numerical values
const clearKey = document.querySelector("#clear");

function clearDisplay() {
    display.textContent = "";
    displayValue = "";
    firstOperand = "";
    secondOperand = ""; 
}

clearKey.addEventListener("click", () => clearDisplay());


//Clears one digit from the end of the number displayed
const backspaceKey = document.querySelector("#backspace");

function backspace() {
    display.textContent = display.textContent.slice(0, -1);
    displayValue = display.textContent;
}

backspaceKey.addEventListener("click", () => {
    backspace();
});


//Adds click event listeners for each number key
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

//Object containing functions to perform operations, accessible with strings
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

//Each operator gets the first operand and the operation to be performed. The stored value is cleared, and operatorPressed is set to true.
const operatorKeys = document.querySelectorAll(".operator");

function selectOperator(opKey) {
    firstOperand = displayValue;
    displayValue = "";
    selectedOperator = opKey.id;
    operatorPressed = true;
}

operatorKeys.forEach((opKey) => {
    opKey.addEventListener("click", () => selectOperator(opKey));
});

//The equalsKey button gets the second operand and performs an operation if operatorPressed is true. Once the operation is performed, operatorPressed is set to false.
const equalsKey = document.querySelector("#equals");

function performOperation() {
    if (operatorPressed && displayValue) {
        secondOperand = displayValue;
        if (secondOperand == 0 && selectedOperator == 'divide') {
            display.textContent = "No dividing by zero!";
        } else {
            let result = math[selectedOperator](firstOperand,secondOperand);
            firstOperand = displayValue = result;
            display.textContent = limitDisplay(displayValue); 
            operatorPressed = false;
        };
    };
}

equalsKey.addEventListener("click", () => {
    performOperation();
});


//Changes the sign of the displayed value
const changeSignKey = document.querySelector("#changeSign");

function changeSign() {
    displayValue *= (-1);
    display.textContent = displayValue;
}

changeSignKey.addEventListener("click", () => {
    changeSign();
});


//Converts displayed value to a percentage
const percentKey = document.querySelector("#percent");

function makePercent() {
    displayValue /= 100;
}

percentKey.addEventListener("click", () => {
    makePercent();
});


//Add keyboard support for each button
document.addEventListener('keydown', handleKeys);

function handleKeys(event) {
    numberKeys.forEach((numKey) => {
        if (event.key == numKey.textContent)
            updateDisplay(numKey);
    })

    operatorKeys.forEach((opKey) => {
        if (event.key == opKey.textContent)
            selectOperator(opKey)
    })

    switch (event.key) {
        case "=":
        case "Enter": 
            performOperation();
            break;
        case "%":
            makePercent();
            break;
        case "c":
            changeSign();
            break;
        case "Backspace":
            backspace();
            break;
        case "Delete":
            clearDisplay();
    }

    // if (event.key == "=" || event.key == "Enter")
    //     performOperation();

    // if (event.key == "%")
    //     makePercent();

    // if (event.key == "c")
    //     changeSign();

    // if (event.key == "Backspace")
    //     backspace();

    // if (event.key == "Delete")
    //     clearDisplay();
}
