// git add README.md images/ index.html main.js styles/


(function () {
    'use strict';

    //console log the current time

    // let date = new Date();
    // let hours = date.getHours(); 
    // let minutes = date.getMinutes(); 
    // let seconds = date.getSeconds();
    // time = hours + ":" + minutes + ":" + seconds;
    // console.log(time);

    //console log the time every second.

    // setInterval(function(){
    //     let date = new Date();
    //     let hours = date.getHours(); 
    //     let minutes = date.getMinutes(); 
    //     let seconds = date.getSeconds();
    //     time = hours + ":" + minutes + ":" + seconds;
    //     console.log(time);
    // }, 1000);

    //display current time immediately

const timeText = document.querySelector(".clock-display");
const progressBar = document.querySelector(".clock-progress-bar");
const clockFace = document.querySelector(".clock-face");

let index = 0
let isHovering = false;

timeText.addEventListener('mouseover', function (){
    isHovering = true;
});

timeText.addEventListener('mouseout', function (){
    isHovering = false;
});

    let currentTime = function () {
        let date = new Date();

        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();

        hours = padding(hours);
        minutes = padding(minutes);
        seconds = padding(seconds);

        return hours + ":" + minutes + ":" + seconds;
    };

    const timeText = document.querySelector(".clock-display");
    timeText.textContent = currentTime();

    //making sure each section is 2 digits 

    function padding(num) {
        if (num < 10) {
            return "0" + num;
        } else {
            return num;
        }
    };

    //for padding, could have done:
    // seconds = ('0' + date.getSeconds()).slice(-2)
    //adds a zero to everything and then only returns the last 2 places. 

    //display current time every second

    function displayTime() {
        timeText.textContent = currentTime();
    };

    setInterval(displayTime, 1000);

    //calculating the percentage of a minute in console.log

    // let justSeconds = function () {
    //     let date = new Date(); 
    //     let seconds = date.getSeconds();
    //     return seconds;
    // }

    // function percentageDisplay() {
    //     let perc = justSeconds()/60
    //     console.log(perc);
    //    };

    // setInterval(percentageDisplay, 1000);

    //adjust the width of the progress bar to the percentage

    const progressBar = document.querySelector(".clock-progress-bar");

    let barLength = function () {
        let date = new Date();
        let seconds = date.getSeconds();
        let barLength = (seconds/60)*250;
        let value = `${barLength}px`;
        return value;
    }

    function adjustLength() {
        progressBar.style.width = barLength();
    }

    setInterval(adjustLength, 1000);

//console log a color based on the second.

// let colorTime = function () {
//     let date = new Date();
//     let hours = date.getHours();
//     let minutes = date.getMinutes();
//     let seconds = date.getSeconds();
//     hours = padding(hours);
//     minutes = padding(minutes);
//     seconds = padding(seconds);
//     let hexNum = `#${hours}${minutes}${seconds}`;
//     console.log(hexNum);
// };

// setInterval(colorTime, 1000);

// Updating the background based on the color

let convertToColor = function () {
    let date = new Date();
    let hours = ("0" + date.getHours()).toString(16).slice(-2);
    let minutes = ("0" + date.getMinutes());toString(16).slice(-2);    
    let seconds = ("0" + date.getSeconds());toString(16).slice(-2);
    let hexNum = `${hours}:${minutes}:${seconds}`;
    return hexNum;
    console.log(hexNum);
};

// Hexseconds = ("0" + date.getSeconds()).toString(16).slice(-2);

document.body.style.backgroundColor = convertToColor();

function changeBackground() {
     document.body.style.backgroundColor = convertToColor();
};

setInterval(changeBackground, 1000);

//Displaying the color's hex value on hover

function displayColor () {
    timeText.textContent = convertToColor();
};

timeText.addEventListener("mouseover", convertToColor);

    //for colors, could have used:
    // Hexseconds = ("0" + date.getSeconds()).toString(16).slice(-2);
    //to 16 = a hexadecimal number. 



function callColorCode () {
    let convertToColor = function () {
        let date = new Date();
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();
        hours = padding(hours);
        minutes = padding(minutes);
        seconds = padding(seconds);
        let hexNum = `#${hours}${minutes}${seconds}`;
        return hexNum;
    };
    
    function changeBackground() {
        document.body.style.backgroundColor = convertToColor();
   };
   
   setInterval(changeBackground, 1000);

};


const $clock = document.querySelector('.clock');
const $display = document.querySelector('dis

// how to make sure the time/color stays one way.
let isHovering = false;

$clock.addEventListener('mouseover', function (){
    isHovering = true;
});

$clock.addEventListener('mouseout', function (){
    isHovering = false;
});

if(isHovering) {
    //show hex
} else {
    //show time
}

$diplay.textContent = `${hour}:${minutes}:${seconds}`;
$progressBar.style.width = `${seconds/ 60 * 14}rem`;

setInterval(setDate, 1000);

//changing the colors:

function setBackground() {
    const colors = [`#DF5D69`, `3D00A5A`, `#8AC972`, `#D365E1`, `#4EACF5`, `#8A8700`];
    $clock.style.background = `${colors[index]}`;
    index === colors.length - 1 ? index = 0 : index++;
}
setInterval(setDate, 1000);
setInterval(setBackground, 5000);


const body = document.querySelector('body');
body.style.background = 'red';