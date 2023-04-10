"use strict";
//Global Variables

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
/* ~~~~~~~~~~~~~~~~~ Chapter 3: Control Flow - Prime Numbers ~~~~~~~~~~~~~~~~~ */
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

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ EVENT LISTENERS ~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
function createEventListeners() {
    document.addEventListener("DOMContentLoaded", function () {
        let bmiButton = document.getElementById("bmi");
        if (document.querySelector(".wrapper-functions")) {
            bmiButton.addEventListener("click", calculateBMI);
        }
        let primeBtn = document.getElementById("prime-button");
        if (document.querySelector(".wrapper-control")) {
            primeBtn.addEventListener("click", validateInput);
        }
    });
}

if (window.addEventListener) {
    window.addEventListener("load", setUpPage);
} else if (window.attachEvent) {
    window.attachEvent("onload", setUpPage);
} else {
    window.onload = setUpPage;
}

document.addEventListener("click", closeMenuOnClickOutside);
if (window.addEventListener) {
    window.addEventListener("load", setUpPage, false);
} else if (window.attachEvent) {
    window.attachEvent("onload", setUpPage);
}

function closeMenuOnClickOutside(event) {
    const menuToggle = document.getElementById("menu-toggle");
    const slideMenu = document.querySelector(".slide-menu");

    if (!slideMenu.contains(event.target) && menuToggle.checked) {
        menuToggle.checked = false;
    }
}

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ SETUP PAGE ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
function setUpPage() {
    displayHeader();
    displayNav();
    displayFooter();
    createEventListeners();
}

/* ~~~~~~~~~~~~~~~~~~~~~~~~~ Header, Nav, Footer Code ~~~~~~~~~~~~~~~~~~~~~~~~ */
function displayHeader() {
    let headerContent = '<img src="images/flower.png" alt="Left Flower" class="nav-image left" width="100" height="75">';
    headerContent += "<h1>Edward's JavaScript Website</h1>";
    headerContent += '<img src="images/flower.png" alt="Right Flower" class="nav-image right" width="100" height="75">';
    let pageHeader = document.getElementsByTagName("header");
    pageHeader[0].innerHTML = headerContent;
}

function displayNav() {
    let navContent = '<ul class="hideMobile">';
    navContent += '<li><a href="index.html">Home</a></li>';
    navContent += '<li><a href="functions.html">Functions</a></li>';
    navContent += '<li><a href="controlflow.html">Control Flow</a></li>';
    navContent += '<li><a href="debug.html">Debug</a></li>';
    navContent += '<li><a href="#">CSP05</a></li>';
    navContent += '<li><a href="#">CSP06</a></li>';
    navContent += '<li><a href="#">CSP07</a></li>';
    navContent += '<li><a href="#">CSP08</a></li>';
    navContent += '<li><a href="#">CSP09</a></li>';
    navContent += '<li><a href="#">CSP10</a></li>';
    navContent += '<li><a href="#">CSP11</a></li>';
    navContent += '<li><a href="#">CSP12</a></li>';
    navContent += '</ul>';

    let navElement = document.getElementsByTagName("nav")[0];
    navElement.innerHTML = navContent;

    let menuToggle = document.createElement("input");
    menuToggle.setAttribute("type", "checkbox");
    menuToggle.setAttribute("id", "menu-toggle");
    menuToggle.classList.add("hideDesktop");

    let menuIcon = document.createElement("label");
    menuIcon.setAttribute("for", "menu-toggle");
    menuIcon.classList.add("menu-icon", "hideDesktop");
    menuIcon.innerHTML = "<span class='hideDesktop'>&#9776;</span>";

    let navList = document.createElement("ul");
    navList.classList.add("slide-menu", "hideDesktop");
    navList.innerHTML = '<li><a href="index.html">Home</a></li>';
    navList.innerHTML += '<li><a href="functions.html">Functions</a></li>';
    navList.innerHTML += '<li><a href="controlflow.html">Control Flow</a></li>';
    navList.innerHTML += '<li><a href="debug.html">Debug</a></li>';
    navList.innerHTML += '<li><a href="#">CSP05</a></li>';
    navList.innerHTML += '<li><a href="#">CSP06</a></li>';
    navList.innerHTML += '<li><a href="#">CSP07</a></li>';
    navList.innerHTML += '<li><a href="#">CSP08</a></li>';
    navList.innerHTML += '<li><a href="#">CSP09</a></li>';
    navList.innerHTML += '<li><a href="#">CSP10</a></li>';
    navList.innerHTML += '<li><a href="#">CSP11</a></li>';
    navList.innerHTML += '<li><a href="#">CSP12</a></li>';

    if (navElement) {
        navElement.appendChild(menuToggle);
        navElement.appendChild(menuIcon);
        navElement.appendChild(navList);
    }
}

function displayFooter() {
    let footerContent = '<ul class="hideMobile">';
    footerContent += '<li><a href="index.html">Home</a></li>';
    footerContent += '<li><a href="functions.html">Functions</a></li>';
    footerContent += '<li><a href="controlflow.html">Control Flow</a></li>';
    footerContent += '<li><a href="debug.html">Debug</a></li>';
    footerContent += '<li><a href="#">CSP05</a></li>';
    footerContent += '<li><a href="#">CSP06</a></li>';
    footerContent += '<li><a href="#">CSP07</a></li>';
    footerContent += '<li><a href="#">CSP08</a></li>';
    footerContent += '<li><a href="#">CSP09</a></li>';
    footerContent += '<li><a href="#">CSP10</a></li>';
    footerContent += '<li><a href="#">CSP11</a></li>';
    footerContent += '<li><a href="#">CSP12</a></li>';
    footerContent += '</ul>';
    footerContent += '<a href="mailto:edward@davis.com">edward@davis.com</a>';
    footerContent += "last Modified: " + document.lastModified;
    footerContent += '<p>Disclaimer: Oklahoma City Community College does not necessarily endorse the content or the respective links of this webpage.</p>';
    let pageFooter = document.getElementsByTagName("footer");
    pageFooter[0].innerHTML = footerContent;
}