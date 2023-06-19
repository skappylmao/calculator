let num1;
let num2;
let operator;
let editNum1 = true;
function add(a,b) {
    return (a+b)
}

function subtract(a,b) {
    return (a-b)
}

function multiply(a,b) {
    return (a*b)
}

function divide(a,b) {
    return (a/b)
}

function modulo(a,b) {
    return (a%b)
}

function operate(a,b,operator) {
    switch (operator) {
        case "+":
            return add(a,b);
            break;
        case "-":
            return subtract(a,b);
            break;
        case "*":
            return multiply(a,b);
            break;
        case "/":
            return divide(a,b);
            break;
        case "%":
            return modulo(a,b);
            break;
        default:
            return("Invalid operation");
    }
}


let numResult = '';
let numbers = document.querySelectorAll(".number");
numbers.forEach(number => {
    number.addEventListener('click' , (e) => {
        console.log(number.innerHTML);
        numResult += (number.innerHTML);
        display = document.querySelector("#resultDisplay");
        display.innerHTML = numResult;
        })
    })

let operation = document.querySelectorAll(".operation");
operation.forEach(operation => {
    operation.addEventListener("click" , (e) => {
        editNum1 = false;
        console.log(operation.innerHTML);
        operator = operation.innerHTML;
        num1 = parseInt(numResult)
        numResult = '';
        display.innerHTML = operator;
    })
})

let equal = document.querySelector(".equal");
equal.addEventListener("click" , (e) => {
    editNum1 = true;
    console.log("=");
    num2 = parseInt(numResult);
    display.innerHTML = operate(num1,num2,operator);
    console.log(display.innerHTML)
    num2 = 0;
    num1 = 0;
    numResult = '';
    
})

let ac = document.querySelector("#ac");
ac.addEventListener("click" , (e) => {
    numResult = '';
    display.innerHTML = '0';
    num1 = 0;
    num2 = 0;
    operator = '';
})
    
let plusminus = document.querySelector("#plusminus");
plusminus.addEventListener("click" , (e) => {
    if (parseInt(numResult) > 0) {
        numResult = "-" + numResult;
    }else if(parseInt(numResult) === 0) {
        numResult = numResult;
    }else if (parseInt(numResult) < 0) {
        numResult = numResult.replace("-","");
        
    }
        display.innerHTML = numResult;
        console.log(display.innerHTML);
    }
    
)
    
