import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';
import convertMs from './dateConvert';

const input = document.querySelector('#datetime-picker');

const startBtn = document.querySelector('button[data-start]');

let timerDays = document.querySelector('span[data-days]');
let timerHours = document.querySelector('span[data-hours]');
let timerMinutes = document.querySelector('span[data-minutes]');
let timerSeconds = document.querySelector('span[data-seconds]');

const currentDate = new Date();


startBtn.disabled = true;
let timerId;

const options = flatpickr(input, {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0].getTime() - currentDate.getTime() < 0) {
      Notiflix.Report.warning('WARNING!', 'Please choose a date in the future', 'Ok');
    } else {
      startBtn.disabled = false;
      startBtn.addEventListener('click', () => {
       const timerId = setInterval(() => {
         const currentTime = new Date();
         const ms = selectedDates[0].getTime() - currentTime.getTime();
         timerDays.textContent = addLeadingZero(convertMs(ms).days);
         timerHours.textContent = addLeadingZero(convertMs(ms).hours);
         timerMinutes.textContent = addLeadingZero(convertMs(ms).minutes);
         timerSeconds.textContent = addLeadingZero(convertMs(ms).seconds);
         if (ms < 0) {
           clearInterval(timerId);
           timerDays.textContent = '00';
           timerHours.textContent = '00';
           timerMinutes.textContent = '00';
           timerSeconds.textContent = '00';
         }
        }, 1000)
      })
    }
  },
});

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}

