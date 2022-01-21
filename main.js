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
    const clockFace = document.querySelector(".clock");
    let isHovering = false;

    timeText.addEventListener('mouseover', function () {
        isHovering = true;
    });

    timeText.addEventListener('mouseout', function () {
        isHovering = false;
    });

    let currentTime = function () {
        let date = new Date();
        let hours, minutes, seconds;

        if (isHovering) {
            hours = ("0" + date.getHours().toString(16)).slice(-2);
            minutes = ("0" + date.getMinutes().toString(16)).slice(-2);
            seconds = ("0" + date.getSeconds().toString(16)).slice(-2);
        } else {
            hours = ("0" + date.getHours()).slice(-2);
            minutes = ("0" + date.getMinutes()).slice(-2);
            seconds = ("0" + date.getSeconds()).slice(-2);
        }

        return hours + ":" + minutes + ":" + seconds;
    };

    timeText.textContent = currentTime();

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

    let barLength = function () {
        let date = new Date();
        let seconds = date.getSeconds();
        let barLength = (seconds / 60) * 250;
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

    const convertToColor = function () {
        let date = new Date();
        let hours, minutes, seconds;
            hours = ("0" + date.getHours().toString(16)).slice(-2);
            minutes = ("0" + date.getMinutes().toString(16)).slice(-2);
            seconds = ("0" + date.getSeconds().toString(16)).slice(-2);
        return `#${hours}${minutes}${seconds}`;
    };

    function changeBackground() {

        clockFace.style.backgroundColor = convertToColor();
    
    };
    changeBackground();
    setInterval(changeBackground, 1000);
}
)();
