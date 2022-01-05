// git add README.md images/ index.html main.js styles/


(function() {
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

let currentTime = function() {
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

//adding padding

function padding(num) {
    if (num <10) {
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

let justSeconds = function () {
    let date = new Date(); 
    let seconds = date.getSeconds();
    return seconds;
}

function percentageDisplay() {
    let perc = justSeconds()/60
    console.log(perc);
   };

setInterval(percentageDisplay, 1000);

})();

//