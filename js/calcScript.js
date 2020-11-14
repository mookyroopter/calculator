let buttons = document.querySelectorAll(".numberButton");
let input = document.querySelector("#input");
input.defaultValue="0";
let operators = document.querySelectorAll(".operator");
console.log(input);
let inputValue = '0';
let firstValue = '';
let secondValue = '';
let currentOperator = '';
let lastClicked = '';


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
    } else if (op === "") {
        
    } else {
        alert ("you fucked up");
    }
}

function getValue(input) {
    let value = input.textContent;
    return value;
}

function addToInput(number) {
    if ((inputValue === "0" || inputValue === '') && lastClicked === '') {
        console.log("here #1")
        inputValue = number;
        input.value = inputValue;
    } else if (inputValue != '0' && lastClicked === 'number'){
        console.log("in here #2!");
        //console.log(number);
        inputValue = inputValue + number;
        input.value = inputValue;
    } else if (inputValue != '0' && lastClicked === 'operator') {
        console.log("here #3");
        input.value = number;
        inputValue = number;
        //input.textContent = number;
    }
    
}

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        let numberToPass = getValue(button);
        addToInput(numberToPass);
        lastClicked = 'number';
    });

});



function clearInput() {
    inputValue = '';
    input.value = inputValue;
}
function clearFirst() {
    firstValue = '0';
}

function clearSecond() {
    secondValue = '0';
}


operators[0].addEventListener('click', () => {
    clearInput();
    clearFirst();
    clearSecond();
    currentOperator = '';
    input.value = "0";
    input.textContent = '0';
    lastClicked = '';
});

function storeNumber (output) {
    firstValue = output;
    input.value = output;
    input.textContent = output;
    clearSecond();
}


operators[1].addEventListener('click', () => {
    if (currentOperator === "" && lastClicked === '='){
        firstValue = input.value;
        //output = operator("+", firstValue, secondValue);
        //storeNumber(output);
    }
    else if (currentOperator === '' && lastClicked === 'number') {
        secondValue = input.value;
        output = operator("+", firstValue, secondValue);
        storeNumber(output);
        }
    else {
        secondValue = input.value;
        output = operator(currentOperator, firstValue, secondValue);
        storeNumber(output);
        }
    currentOperator = "+";
    lastClicked = 'operator';   
});

operators[2].addEventListener('click', () => {
    if (currentOperator === "" && lastClicked === '='){
        firstValue = input.value;
        //output = operator("+", firstValue, secondValue);
        //storeNumber(output);
    }
    else if (currentOperator === '' && lastClicked === 'number') {
        console.log("in subtract!");
        firstValue = input.value;
        output = operator("-", firstValue, "0");
        storeNumber(output);
        }
    else {
        secondValue = input.value;
        output = operator(currentOperator, firstValue, secondValue);
        storeNumber(output);    
    }
    currentOperator = "-";
    lastClicked = 'operator';   
});

operators[3].addEventListener('click', () => {
    if (currentOperator === "" && lastClicked === '='){
        firstValue = input.value;
        //output = operator("+", firstValue, secondValue);
        //storeNumber(output);
    }
    else if (currentOperator === '' && lastClicked === 'number') {
        firstValue = input.value;
        output = operator("*", firstValue, "1");
        storeNumber(output);
    }
    else {
        secondValue = input.value;
        output = operator(currentOperator, firstValue, secondValue);
        storeNumber(output);
    }
    currentOperator = "*";
    lastClicked = 'operator';   
});

operators[4].addEventListener('click', () => {
    if (currentOperator === "" && lastClicked === '='){
        firstValue = input.value;
        //output = operator("+", firstValue, secondValue);
        //storeNumber(output);
    }
    else if (currentOperator === '' && lastClicked === 'number') {
        console.log("in divide!");
        firstValue = input.value;
        output = operator("/", firstValue, "1");
        storeNumber(output);
    }
    else {
        secondValue = input.value;
        output = operator(currentOperator, firstValue, secondValue);
        storeNumber(output);
    }
    currentOperator = "/";
    lastClicked = 'operator';   
});

operators[5].addEventListener('click', () => {
    console.log(currentOperator);
    if (currentOperator === '') {

    } else {
        secondValue = input.value;
        output = operator(currentOperator, firstValue, secondValue);
        storeNumber(output);
        clearSecond();
        currentOperator = '';
        lastClicked = '=';
    }

});