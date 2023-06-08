import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const buttonEl = document.querySelector('button[data-start]');
const dataDays = document.querySelector('span[data-days]');
const dataHours = document.querySelector('span[data-days]');
const dataMinutes = document.querySelector('span[data-minutes]');
const dataSeconds = document.querySelector('span[data-seconds]');
console.log(dataDays);

buttonEl.disabled = true;

const fp = flatpickr("#datetime-picker", {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      const currentTime = new Date();
      
      if (selectedDates[0] < currentTime){
        window.alert("Please choose a date in the future");
        buttonEl.disabled = true;
      } else {
        buttonEl.disabled = false;
      }
    }
  });

  

const interval = setInterval(() => {
const currentTimeNow = new Date();    
currentDey = currentTimeNow.getDay();
currentHours = currentTimeNow.getHours();
currentMinutes = currentTimeNow.getMinutes();
currentSeconds = currentTimeNow.getSeconds();

const formatTime = `${currentDey.toString().padStart(2, '0')} :
${currentHours.toString().padStart(2, '0')} : 
${currentMinutes.toString().padStart(2, '0')} : 
${currentSeconds.toString().padStart(2, '0')}`
console.log(formatTime)
}, 1000)
console.log()