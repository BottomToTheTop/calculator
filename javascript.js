function add(a, b) {
    return a + b;
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


let firstNumber;
let operator;
let secondNumber;

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

let displayNumber;

const digits = document.querySelectorAll(".digits > button")
digits.forEach((element) => {
    element.addEventListener("click", () => {
        const display = document.querySelector(".display")
        display.textContent = element.textContent;
    })
})
