import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from "notiflix";


const picker = document.querySelector("input#datetime-picker");
const startBtn = document.querySelector("button[data-start]");
const dataDays = document.querySelector('[data-days]');
const dataHours = document.querySelector('[data-hours]');
const dataMinutes = document.querySelector('[data-minutes]');
const dataSeconds = document.querySelector('[data-seconds]');



const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
  },
};

const dataPicker = flatpickr(picker, options);
let targetDate;
let intervalId;

function convertMs(ms) {
  
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

// перетворюємо значення на строку і якщо значення де двухсимвольни додаємо 0

function formatTime(value) {
  return value.toString().padStart(2, '0');
}

function timerUpdate(){
  const currentDate = new Date();
  const differentDate = targetDate - currentDate;

  if(differentDate > 0){
    const { days, hours, minutes, seconds } = convertMs(differentDate);
    dataDays.textContent = formatTime(days);
    dataHours.textContent = formatTime(hours);
    dataMinutes.textContent = formatTime(minutes);
    dataSeconds.textContent = formatTime(seconds);
    
  } else{
    clearInterval(intervalId);
    Notiflix.Notify.failure('Please choose a date in the future');
    btnStart.disabled = true;
  }
}

startBtn.addEventListener("click", startTimer);

function startTimer(){
  startBtn.disabled = false;
  if(dataPicker.selectedDates.length > 0){
    targetDate = new Date(dataPicker.selectedDates[0])
    
    timerUpdate();
    clearInterval(intervalId);
    intervalId = setInterval(timerUpdate, 1000);
    
    
  }else{
    Notiflix.Notify.warning("Choose a date");
  }
}

