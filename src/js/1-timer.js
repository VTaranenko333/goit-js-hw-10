import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const datePicker = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('[data-start]');
const daysElem = document.querySelector('[data-days]');
const hoursElem = document.querySelector('[data-hours]');
const minutesElem = document.querySelector('[data-minutes]');
const secondsElem = document.querySelector('[data-seconds]');

let userSelectedDate = null;
let countdownInterval = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const selectedDate = selectedDates[0];
    if (selectedDate <= new Date()) {
      iziToast.error({
        title: 'Error',
        message: 'Please choose a date in the future',
      });
      startBtn.disabled = true;
    } else {
      startBtn.disabled = false;
      userSelectedDate = selectedDate;
    }
  },
};

flatpickr(datePicker, options);

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function updateTimerInterface({ days, hours, minutes, seconds }) {
  daysElem.textContent = addLeadingZero(days);
  hoursElem.textContent = addLeadingZero(hours);
  minutesElem.textContent = addLeadingZero(minutes);
  secondsElem.textContent = addLeadingZero(seconds);
}

function startCountdown() {
  startBtn.disabled = true;
  datePicker.disabled = true;

  countdownInterval = setInterval(() => {
    const currentTime = new Date();
    const timeDiff = userSelectedDate - currentTime;

    if (timeDiff <= 0) {
      clearInterval(countdownInterval);
      updateTimerInterface(convertMs(0));
      iziToast.success({
        title: 'Success',
        message: 'Countdown has finished!',
      });
      datePicker.disabled = false;
      return;
    }

    const timeData = convertMs(timeDiff);
    updateTimerInterface(timeData);
  }, 1000);
}

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

startBtn.addEventListener('click', startCountdown);

const styles = `
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
padding: 36px 156px;
font-family: "Montserrat", sans-serif;
}

input {
padding: 8px 16px;
border-radius: 8px;
width: 272px;
height: 40px;
font-weight: 400;
font-size: 16px;
line-height: 150%;
letter-spacing: 0.04em;
color: #2e2f42;
}

input.flatpickr-input:hover {
background: #fff;
border: 1px solid #4e75ff;
border-radius: 4px;
width: 272px;
height: 40px;
}

button:disabled {
border-radius: 8px;
padding: 8px 16px;
width: 75px;
height: 40px;
background: #cfcfcf;
font-weight: 500;
font-size: 16px;
line-height: 150%;
letter-spacing: 0.04em;
color: #989898;
}

button {
border-radius: 8px;
border: none;
padding: 8px 16px;
width: 75px;
height: 40px;
background: #4e75ff;
font-weight: 500;
font-size: 16px;
line-height: 150%;
letter-spacing: 0.04em;
color: #fff;
}

button:hover {
border-radius: 8px;
padding: 8px 16px;
width: 75px;
height: 40px;
background: #6c8cff;
font-weight: 500;
font-size: 16px;
line-height: 150%;
letter-spacing: 0.04em;
color: #fff;
}

.flatpickr-input {
}

.timer {
display: flex;
gap: 24px;
margin-top: 32px;
}

.field {
display: flex;
flex-direction: column;
align-items: center;
}

.value {
font-weight: 400;
font-size: 40px;
line-height: 120%;
letter-spacing: 0.04em;
color: #2e2f42;}

.label {
font-weight: 400;
font-size: 16px;
line-height: 150%;
color: #2e2f42;
}

// .ico-error {
// border-bottom: 2px solid #ffbebe;
// border-radius: 4px;
// padding: 20px;
// width: 302px;
// height: 64px;
// background: #ef4040;
// }

`;

const styleSheet = document.createElement('style');
styleSheet.innerText = styles;

document.head.appendChild(styleSheet);
