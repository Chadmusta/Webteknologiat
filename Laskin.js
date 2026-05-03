let counter = 0;
let calcarray = [];

window.onload = function () {
    document.getElementById("input1").value = getRandomInt(11);
    document.getElementById("input2").value = getRandomInt(11);
    document.getElementById("operationSelect").value = "+";
}
function calculate() {
    let nrValue1 = document.getElementById("input1").value;
    let nrValue2 = document.getElementById("input2").value;
    let operation = document.getElementById("operationSelect").value;
    let result = 0;
    counter++;

    document.getElementById("counter").innerHTML = "Laskettu " + counter + " kertaa";
    

    switch (operation) {

        case "+":
            result = parseFloat(nrValue1) + parseFloat(nrValue2);
            break;

        case "-":
            result = parseFloat(nrValue1) - parseFloat(nrValue2);
            break;

        case "*":

            result = parseFloat(nrValue1) * parseFloat(nrValue2);
            break;
        case "/":
            if (parseFloat(nrValue2) === 0) {
                result = "Error: Division by zero";
            } else {
                result = parseFloat(nrValue1) / parseFloat(nrValue2);
            }
            break;
    }
    console.log(result);
    document.getElementById("result").value = result;
    document.getElementById("calculatecounter").innerHTML +=
        "<br>" + nrValue1 + " " + operation + " " + nrValue2 + " = " + result;

}
function getRandomInt(max) {
    return Math.floor(Math.random() * max); 2
}

function increaseLeftvalue() {
    let input1 = document.getElementById("input1").value;
    input1 = parseInt(input1) + 1;
    document.getElementById("input1").value = input1;
}

function increaseRightvalue() {
    let input2 = document.getElementById("input2").value;
    input2 = parseInt(input2) + 1;
    document.getElementById("input2").value = input2;
}

function decreaseLeftvalue() {
    let input1 = document.getElementById("input1").value;
    if (input1 > 0) {
        input1 = input1 - 1;
        document.getElementById("input1").value = input1;
    }
}

function decreaseRightvalue() {
    let input2 = document.getElementById("input2").value;
    if (input2 > 0) {
        input2 = input2 - 1;
        document.getElementById("input2").value = input2;
    }
}

