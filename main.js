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

document.body.style.backgroundColor = convertToColor();

function changeBackground() {
     document.body.style.backgroundColor = convertToColor();
};

setInterval(changeBackground, 1000);

//Displaying the color's hex value on hover

function displayColor () {
    timeText.textContent = convertToColor();
};

timeText.addEventListener("mouseover", displayColor);


// this techncially displays a code on hover, but I wanted it to also stay on that and update with the time. The end comments are stuff from tyring that. 

//I understand that the time keeps changing back to the time because of the interval but can't figure out how to set a new interval inside of an event listener. 


// timeText.addEventListener("mouseover",
// e => setInterval(displayColor, 1000));

// timeText.addEventListener('mouseleave', e=>
// setInterval(displayTime,1000)
// );

// timeText.textContent = convertToColor();

// setTimeout(displayColor(), 50000);

// timeText.addEventListener("mouseover", function() {
//     timeText.textContent = convertToColor(); 1000;
// });
  
// timeText.addEventListener('mouseleave', function() {
//         timeText.textContent = currentTime();
// });

        // leaveEventCount++;    
    // reset the color after a short delay
//     setTimeout(1000);
//   }, false);

})();
