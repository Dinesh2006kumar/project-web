const display=document.getElementById("display");
const startBtn = document.getElementById("start-btn");
const pauseBtn = document.getElementById("pause-btn");
const resetBtn = document.getElementById("reset-btn");
let seconds=0;
let minutes=0;
let hours=0;
let timer=null;
let running= false;
function updateTime(){
    seconds++;
    if(seconds==60){
        seconds=0;
        minutes++;
    }
    if(minutes==60){
        minutes=0;
        hours++;
    }
    display.innerHTML=hours +":"+minutes+":"+seconds;
}
startBtn.addEventListener("click",function(){
    if(!running){
        timer=timer = setInterval(updateTime, 1000);
        isRunning = true;
    }
});
pauseBtn.addEventListener("click", function(){
     if(isRunning){
        clearInterval(timer);
        isRunning = false;
        pauseBtn.innerHTML = "Resume";
    }
    else{
        timer = setInterval(updateTime, 1000);
        isRunning = true;
        pauseBtn.innerHTML = "Pause";
    }

});
resetBtn.addEventListener("click", function(){

    clearInterval(timer);

    seconds = 0;
    minutes = 0;
    hours = 0;
    running=false;
    pauseBtn.innerHTML = "Pause";


    display.innerHTML = "00:00:00";

});