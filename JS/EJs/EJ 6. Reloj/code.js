function setTime(hour, minute, second) {
    const now = new Date();
    hour.textContent = `${now.getHours()}`.padStart(2, '0');
    minute.textContent = `${now.getMinutes()}`.padStart(2, '0');
    second.textContent = `${now.getSeconds()}`.padStart(2,'0');

}
const hour = document.getElementById("hour");
const minute = document.getElementById("minute");
const second = document.getElementById("second");

const alarmSecs = document.getElementById("secondsInput");
const msg = document.getElementById("msgInput");


document.getElementById("setAlarm").addEventListener("click",()=>{setTimeout(()=>{alert(msg.value);},alarmSecs.value*1000)});

setTime(hour, minute, second);

setInterval(() => setTime(hour, minute, second), 1000);
