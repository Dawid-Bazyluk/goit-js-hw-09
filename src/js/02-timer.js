import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const startBtn = document.querySelector('[data-start]');
const timerDays = document.querySelector('[data-days]');
const timerHours = document.querySelector('[data-hours]');
const timerMinutes = document.querySelector('[data-minutes]');
const timerSeconds = document.querySelector('[data-seconds]');

let nowDate = new Date();
let selectedDate = new Date();

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0].getTime() <= nowDate.getTime()) {
      Notiflix.Notify.failure('Please choose a date in the future');
      startBtn.disabled = true;
    } else {
      startBtn.disabled = false;
      selectedDate = selectedDates[0];
    }
  },
};

flatpickr('#datetime-picker', options);

const addLeadingZero = value => {
  return value.padStart(2, '0');
};

function convertMs(ms) {
  nowDate = new Date();

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  timerDays.innerHTML = addLeadingZero(String(days));
  timerHours.innerHTML = addLeadingZero(String(hours));
  timerMinutes.innerHTML = addLeadingZero(String(minutes));
  timerSeconds.innerHTML = addLeadingZero(String(seconds));
}

startBtn.addEventListener('click', () => {
  startBtn.disabled = true;
  const timer = setInterval(() => {
    let dateDifference = selectedDate.getTime() - nowDate.getTime();
    if (dateDifference > 0) {
      convertMs(dateDifference);
    } else {
      clearInterval(timer);
    }
  }, 1000);
});
