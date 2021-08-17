const clock = document.getElementById('clock');
const lblState = document.getElementById('lblState')
const audio = new  Audio('https://assets.mixkit.co/sfx/preview/mixkit-alarm-digital-clock-beep-989.mp3');
audio.loop = true;
let alarmTime = null;
let alarmTimeout = null;
let updateTime = () =>{
     const date = new Date();
     const hour = formatTime(date.getHours());
     const minutes = formatTime(date.getMinutes());
     const seconds = formatTime(date.getSeconds());
     clock.innerText=`${hour} : ${minutes} : ${seconds}`
}


let formatTime = (time) => {
     if (time < 10)return '0' + time;
     return time;
 }


let setAlarmTime = (val) => {
     alarmTime=val
};
let setAlarm = () =>{
     if(alarmTime){
          const current = new Date();
          const timeToAlarm = new Date(alarmTime);
          lblState.innerText = "Alarm Set"
          setTimeout(() => lblState.innerText = "", 1000)
          if(alarmTime > current){
               const timeout = timeToAlarm.getTime();
               alarmTime = setTimeout(() => audio.play, timeout);
          }
     }
}


let clearAlarm = () =>{
     audio.pause();
     lblState.innerText = "Alarm Cleared"
     setTimeout(() => lblState.innerText = "", 1000)
     if(alarmTimeout){
      clearTimeout(alarmTimeout);
     }
}

setInterval(updateTime, 1000);
document.addEventListener('DOMContentLoaded', updateTime());