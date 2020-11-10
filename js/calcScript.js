let buttons = document.querySelectorAll(".numberButton");
let input = document.querySelector("#input");
let operators = document.querySelectorAll(".operator");
console.log(operators);
let inputValue = '';
let firstValue = '';
let secondValue = '';
let currentOperator = '';



function add(a,b) {
    a = Number(a);
    b = Number(b);
    return a + b;
}

function subtract(a,b){
    a = Number(a);
    b = Number(b);
    return a - b;
}

function multiply(a,b){
    a = Number(a);
    b = Number(b);
    return a * b;
}

function divide(a,b){
    a = Number(a);
    b = Number(b);
    return a / b;
}

function operator(op,a,b){
    if (op === "+") {
        return add(a,b);
    } else if (op === "-") {
        return subtract(a,b);
    } else if (op === "*") {
        return multiply(a,b);
    } else if (op === "/") {
        return divide(a,b);
    } else {
        alert ("you fucked up");
    }
}

function getValue(input) {
    let value = input.textContent;
    return value;
}

function addToInput(number) {
    console.log(number);
    inputValue = inputValue + number;
    input.value = inputValue;
}

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        let numberToPass = getValue(button);
        addToInput(numberToPass);
    });

});



function clearInput() {
    inputValue = '';
    input.value = inputValue;
}
function clearFirst() {
    firstValue = '';
}

function clearSecond() {
    secondValue = '';
}


operators[0].addEventListener('click', () => {
    clearInput();
    clearFirst();
    clearSecond();
});

function storeNumber () {
    firstValue = input.value;
    clearInput();
}

for (let i = 1; i <= 4; i++) {
    operators[i].addEventListener('click', () => {
        storeNumber();
    });
}

operators[1].addEventListener('click', () => {
    if (currentOperator != '') {
        console.log(currentOperator);
        secondValue = input.value;
        output = operator(currentOperator, firstValue, secondValue);
        firstValue = output;
        console.log(output);
        input.value = firstValue;
        clearSecond()
    }
    currentOperator = "+";
});

operators[2].addEventListener('click', () => {
    if (currentOperator != '') {
        secondValue = input.value;
        output = operator(currentOperator, firstValue, secondValue);
        firstValue = output;
        input.value = firstValue;
        clearSecond()
    }
    
    currentOperator = "-";
});

operators[3].addEventListener('click', () => {
    if (currentOperator != '') {
        secondValue = input.value;
        output = operator(currentOperator, firstValue, secondValue);
        firstValue = output;
        input.value = firstValue;
        clearSecond()
    }
    
    currentOperator = "*";
});

operators[4].addEventListener('click', () => {
    if (currentOperator != '') {
        secondValue = input.value;
        output = operator(currentOperator, firstValue, secondValue);
        firstValue = output;
        input.value = firstValue;
        clearSecond()
    }
    
    currentOperator = "/";
});

operators[5].addEventListener('click', () => {
    secondValue = input.value;
    console.log(currentOperator);
    output = operator(currentOperator, firstValue, secondValue);
    firstValue = output;
    input.value = firstValue;
    clearSecond();

});