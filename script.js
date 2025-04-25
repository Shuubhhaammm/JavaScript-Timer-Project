const millisec = document.getElementById("millisec");
const sec = document.getElementById("second");
const min = document.getElementById("minute");
const hr = document.getElementById("hour"); 

const start = document.getElementById("start");
const stop = document.getElementById("stop");
const reset = document.getElementById("reset");

var timerrunning =  false;
var timerId;

// milisec.innerHTML = 00;
var second =0;
var minute =0;
var hour =0;
var millisecond =0;

function updateSecond () {

     // milli second update
     millisec.innerHTML = millisecond<10 ? "0" + millisecond : millisecond;
     millisecond ++;

     // second update
    if(millisecond >= 100){
        millisecond = 0;
        second ++;
        sec.innerHTML = second<10 ? "0" + second : second;
    }

     // minute update 
     if(second >= 60){
        second =0;
        minute ++;
        min.innerHTML = minute<10 ? "0" + minute : minute;
    }

    // hour update
    if(minute >= 60){
        minute=0;
        hour ++;
        hr.innerHTML = hour<10 ? "0" + hour : hour;
    }

    // main engine
    timerId = setTimeout(updateSecond, 10);
};

// updateSecond();

start.addEventListener("click", () => {
    if(!timerrunning){
        timerrunning = true;
        updateSecond();
    }
});

stop.addEventListener("click", ()=> {
    timerrunning = false;
    clearTimeout(timerId);
})

reset.addEventListener("click", () => {
    timerrunning = false;
    timerId = null;
    millisecond = second = minute = hour=0;
    millisec.innerHTML = sec.innerHTML = min.innerHTML = hr.innerHTML = "00";
})
