let [seconds,minutes,hours] = [0,0,0];
let display_time = document.getElementById("display-time");
let timer  = null;
function stop_watch(){
    seconds++;
    if(seconds == 60){
        minutes++;
        seconds = 0;
    }
    if(minutes == 60){
        minutes = 0;
        hours++;
    }
//00:00:00 format
    let h = hours < 10? "0" + hours : hours;
    let m = minutes < 10? "0" + minutes : minutes;
    let s = seconds < 10? "0" + seconds : seconds;
    display_time.innerHTML = h + ":" + m + ":" + s;
        
}

function watch_start(){
    if(timer !== null){
        clearInterval(timer);
    }
    timer = setInterval(stop_watch, 1000);
}

function watch_stop(){
    clearInterval(timer);
}
function watch_reset(){
    clearInterval(timer);
    [seconds,minutes,hours] = [0,0,0];
    display_time.innerHTML = "00:00:00";
}
