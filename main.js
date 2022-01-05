//console log the current time

let date = new Date();
let hours = date.getHours(); 
let minutes = date.getMinutes(); 
let seconds = date.getSeconds();
    time = hours + ":" + minutes + ":" + seconds;
    console.log(time);

//console log the time every second.

setInterval(function(){
    let date = new Date();
    let hours = date.getHours(); 
    let minutes = date.getMinutes(); 
    let seconds = date.getSeconds();
    time = hours + ":" + minutes + ":" + seconds;
    console.log(time);
}, 1000);