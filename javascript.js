const display = document.querySelector(".display");
const addition = document.querySelector(".operators > .add");
const subtraction = document.querySelector(".subtract");
const multipication = document.querySelector(".multiply");
const division = document.querySelector(".divide")
const equals = document.querySelector(".equals");
const digits = document.querySelectorAll(".digits");
const clear = document.querySelector(".clear");

let displayNumber = '';
let firstNumber;
let operator;
let result; 

function add(a, b) {
    return parseInt(a) + parseInt(b);
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(operate, a, b) {
    switch (operate) {  
        case "add":
            return add(a, b);
        case "subtract": 
            return subtract(a, b);
        case "multiply": 
            return multiply(a, b);
        case "divide":
            return divide(a, b);
    }
}

digits.forEach((element) => {
    element.addEventListener("click", () => {
        if (displayNumber.length < 8) {
            if (element.textContent == 0 && displayNumber == "") {
                displayNumber = "";
                display.textContent = "0";
                return;
            }

            if (result != undefined) {
                result = undefined;
            }

            displayNumber += element.textContent
            display.textContent = displayNumber;
        }
    })
})

addition.addEventListener("click", () => {
    if (operator != undefined) {
        if (displayNumber == "") {
            operator = "add"
            return;
        }
        displayNumber = operate(operator, firstNumber, displayNumber);

        if (displayNumber % 1 != 0) {
            displayNumber = Number(displayNumber).toFixed(4);
        }
        if (displayNumber.toString().length > 8) {
            displayNumber = displayNumber.toExponential(1)
        }
        display.textContent = displayNumber;
    }

    if (displayNumber == "") {
        displayNumber = 0;
    } 

    operator = "add";
    if (result != undefined) {
        firstNumber = result;
        result = undefined;
    } else {
        firstNumber = displayNumber;
    }

    displayNumber = '';
});

subtraction.addEventListener("click", () => {
    if (operator != undefined) {

        if (displayNumber == "") {
            operator = "subtract"
            return;
        }
        displayNumber = operate(operator, firstNumber, displayNumber);

        if (displayNumber % 1 != 0) {
            displayNumber = Number(displayNumber).toFixed(4);
        }
        if (displayNumber.toString().length > 8) {
            displayNumber = displayNumber.toExponential(1)
        }
        display.textContent = displayNumber;
    }

    if (displayNumber == "") {
        displayNumber = 0;
    } 

    operator = "subtract";
    if (result != undefined) {
        firstNumber = result;
        result = undefined;
    } else {
        firstNumber = displayNumber;
    }

    displayNumber = '';
});

multipication.addEventListener("click", () => {
    if (operator != undefined) {
        if (displayNumber == "") {
            operator = "multiply"
            return;
        }
        displayNumber = operate(operator, firstNumber, displayNumber);

        if (displayNumber % 1 != 0) {
            displayNumber = Number(displayNumber).toFixed(4);
        }
        if (displayNumber.toString().length > 8) {
            displayNumber = displayNumber.toExponential(1)
        }
        display.textContent = displayNumber;
    }

    if (displayNumber == "") {
        displayNumber = 0;
    } 

    operator = "multiply";
    if (result != undefined) {
        firstNumber = result;
        result = undefined;
    } else {
        firstNumber = displayNumber;
    }

    displayNumber = '';
})

division.addEventListener("click", () => {
    if (operator != undefined) {
        if (displayNumber == "") {
            operator = "divide"
            return;
        }

        displayNumber = operate(operator, firstNumber, displayNumber);

        if (displayNumber % 1 != 0) {
            displayNumber = Number(displayNumber).toFixed(4);
        }
        if (displayNumber.toString().length > 8) {
            displayNumber = displayNumber.toExponential(1)
        }

        display.textContent = displayNumber;
    }

    if (displayNumber == "") {
        displayNumber = 0;
    } 

    operator = "divide";
    if (result != undefined) {
        firstNumber = result;
        result = undefined;
    } else {
        firstNumber = displayNumber;
    }

    displayNumber = '';
    display.textContent = firstNumber;
})

equals.addEventListener("click", () => {
    if (firstNumber != undefined && display.textContent == "0" && operator == "divide") {
        display.textContent = "No"
        firstNumber = undefined;
        operator = undefined;
        result = undefined;
        displayNumber = '';
        return;
    }

    if (displayNumber == "" && operator != undefined) {
        displayNumber = display.textContent;
    }
    
    if (firstNumber === undefined || operator == undefined) {
        return;
    }

    result = operate(operator, firstNumber, displayNumber);

    if (result % 1 != 0) {
        result = result.toFixed(4);
    }
    if (result.toString().length > 8) {
        result = Number(result).toExponential(1)
    }

    display.textContent = result;
    firstNumber = undefined;
    displayNumber = '';
    operator = undefined;
});

clear.addEventListener("click", () => {
    firstNumber = undefined;
    operator = undefined;
    result = undefined;

    displayNumber = '';
    display.textContent = '0';
});