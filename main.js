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


})();
