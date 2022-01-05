(function() {
'use strict';

//console log the current time

// let date = new Date();
// let hours = date.getHours(); 
// let minutes = date.getMinutes(); 
// let seconds = date.getSeconds();
//     time = hours + ":" + minutes + ":" + seconds;
//     console.log(time);

//console log the time every second.

// setInterval(function(){
//     let date = new Date();
//     let hours = date.getHours(); 
//     let minutes = date.getMinutes(); 
//     let seconds = date.getSeconds();
//     time = hours + ":" + minutes + ":" + seconds;
//     console.log(time);
// }, 1000);

//display current time everysecond

let currentTime = function() {
    let date = new Date();
    let hours = date.getHours(); 
    let minutes = date.getMinutes(); 
    let seconds = date.getSeconds();
    return hours + ":" + minutes + ":" + seconds;
};

const timeText = document.querySelector(".clock-display");

function displayTime() {
 timeText.textContent = currentTime();
};

setInterval(displayTime, 1000);

// 


}) ();