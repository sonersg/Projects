
// Variables

const startStopBtn = document.querySelector(".start-stop-btn");
const resetBtn = document.querySelector(".reset-btn");

let miliSeconds = 0;
let seconds = 0;
let minutes = 0;

// Variables for leading zeroes


let leadingMiliSeconds = 0;
let leadingSeconds = 0;
let leadingMinutes = 0;


// variables for set interval, timer status

let timerInterval = null;
let timerStatus = "stopped";


function stopWatch(){

    miliSeconds++;

    if(miliSeconds/100 === 1){

        miliSeconds = 0;
        seconds++;
        
    }
    if(seconds/60 === 1){

        seconds = 0;
        minutes++;
    }


    if(miliSeconds < 10){
        leadingMiliSeconds = "0"+ miliSeconds.toString();
    }
    else{
        leadingMiliSeconds = miliSeconds;
    }

    if(seconds < 10){
        leadingSeconds = "0"+seconds.toString();
    }
    else{
        leadingSeconds = seconds;
    }

    if(minutes < 10){
        leadingMinutes = "0"+minutes.toString();
    }
    else{
        leadingMinutes = minutes;
    }

    let displayTimer = document.querySelector(".timer").innerText =
    leadingMinutes+":"+leadingSeconds+":"+leadingMiliSeconds;
}


startStopBtn.addEventListener('click', function(){

    if(timerStatus === "stopped"){

        timerInterval = window.setInterval(stopWatch, 10);
        timerStatus = "started";

        document.getElementById("start-stop-icon").innerHTML
        = '<i class="fa-solid fa-pause" id="pause"></i>';

    }
    else{

        window.clearInterval(timerInterval);
        timerStatus = "stopped";

        document.getElementById("start-stop-icon").innerHTML
        = '<i class="fa-solid fa-play" id="play"></i>';

    }

    document.querySelector(".container").style.backgroundColor 
    = "rgba(0,0,0, .5";
});

resetBtn.addEventListener('click', function(){

    seconds = 0;
    minutes = 0;
    hours = 0;

    document.querySelector(".timer").innerHTML = "00:00:00";

    window.clearInterval(timerInterval);

    document.querySelector(".container").style.backgroundColor 
    = "rgba(0,0,0, 0.01)";
});

