"use strict";
//Global Variables


/* ~~~~~~~~~~~ Chapter 3: Control Flow - Prime Numbers~~~~~~~~~~~~ */
document.addEventListener("DOMContentLoaded", function () {
    let primeBtn = document.getElementById("prime-button");
    if (document.querySelector(".wrapper-control")) {
        primeBtn.addEventListener("click", validateInput);
    }
});

function validateInput() {
    let firstNum = parseInt(document.getElementById("firstNum").value);
    let secondNum = parseInt(document.getElementById("secondNum").value);

    if (isNaN(firstNum) || isNaN(secondNum)) {
        alert("Error: Both inputs must be a number.");
        return;
    }
    else if (firstNum < 0 || secondNum < 0) {
        alert("Error: All input must be a positive number.");
        return;
    }
    else if (secondNum < firstNum) {
        alert("Error: Second number must be greater than first number.");
        return;
    }

    displayPrimeNumbers(firstNum, secondNum);
}

function displayPrimeNumbers(firstNum, secondNum) {
    function isPrime(num) {
        if (num <= 1) {
            return false;
        }
        for (let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++) {
            if (num % i === 0) {
                return false;
            }
        }
        return num !== 1;
    }

    //body
    let tableHTML = "<body style='font-family: Arial, sans-serif;background-color: #919FA7;display: flex;justify-content: center;align-items: center;'><main>";

    //button
    tableHTML += "<button onclick='window.location.reload()' onMouseOver='this.style.color=`#4b778d`' onMouseOut='this.style.color=`black`' style='padding: 5px;width: 200px;border-radius: 10px;cursor: pointer;font-size: large;transition: 0.3s;'>Back</button>";

    //table
    tableHTML += "<table style='display: flex;flex-direction: column;background-color: #C6CDD1;border-radius: 10px;box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);width: 200px;height: auto;'>";

    //table header
    tableHTML += "<thead style='color: #4b778d;font-size: 1.5rem;'>";
    tableHTML += "<tr><th style='padding: 8px;'>Prime Numbers</th></tr></thead>";

    //table body
    tableHTML += "<tbody style='display: flex;flex-direction: column;align-items: center;justify-content: center;height: 100%;text-align: center;'>"

    for (let i = firstNum; i <= secondNum; i++) {
        if (isPrime(i)) {
            tableHTML += `<tr><td style='padding: 8px;
            border-bottom: 1px solid #fff;'>${i}</td></tr>`;
        }
    }
    tableHTML += "</tbody></table></main></body>";
    document.write(tableHTML);
}



/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
/* ~~~~~~~~~~~~~~~~~~ Chapter 2: Functions - BMI Calculator ~~~~~~~~~~~~~~~~~~ */

//(weight * 703) / (height * height) = BMI

document.addEventListener("DOMContentLoaded", function () {
    const bmiButton = document.getElementById("bmi");
    if (document.querySelector(".wrapper-functions")) {
        bmiButton.addEventListener("click", calculateBMI);
    }
});

function calculateBMI() {
    const weight = parseInt(document.getElementById("weight").value);
    const height = parseInt(document.getElementById("height").value);

    if (isNaN(weight) || isNaN(height)) {
        alert("Error: Both weight and height values are required and must be a number.");
        return;
    }
    if (weight <= 0 || weight >= 750) {
        alert("Error: Weight value must be between 0 and 750.");
        return;
    }
    if (height <= 0 || height >= 100) {
        alert("Error. Height value must be between 0 and 100.");
        return;
    }


    const bmi = (weight * 703) / (height * height);
    document.getElementById("bmi-output").value = bmi.toFixed(2);

    console.log(bmi.toFixed(2));
    return bmi.toFixed(2);
}