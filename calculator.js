//TODO: fix the bug where you can't do the 3rd operation
//like i give a shit lmfao

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
        if (editNum1 == true) {
            editNum1 = false;
            console.log(operation.innerHTML);
            operator = operation.innerHTML;
            num1 = parseInt(numResult);
            numResult = '';
        }else if(editNum1 == false) {
            editNum1 = true;
            console.log(operation.innerHTML);
            operator = operation.innerHTML;
            num2 = parseInt(numResult);
            numResult = '';
            temp = operate(num1,num2,operator);
            num1 = temp;
        
            display.innerHTML = temp;
        }
    })
})

let equal = document.querySelector(".equal");
equal.addEventListener("click" , (e) => {
    editNum1 = true;
    console.log("=");
    num2 = parseInt(numResult);
    console.log(num1 + operator + num2)
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
    
