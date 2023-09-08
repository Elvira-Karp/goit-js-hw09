import getRandomHexColor from './randomHexColor';

const dataStartRef = document.querySelector('[data-start]');
const dataStopRef = document.querySelector('[data-stop]');
const bodyRef = document.querySelector('body');

let timerId = null;


dataStartRef.addEventListener('click', onStart);
dataStopRef.addEventListener('click', onStop);


function onStart() {
  timerId = setInterval(getBgColor, 1000);

  dataStartRef.toggleAttribute('disabled');
}


function onStop() {
  dataStartRef.removeAttribute('disabled');
  dataStopRef.toggleAttribute('disabled');
  clearInterval(timerId);
}


function getBgColor() {
  bodyRef.style.backgroundColor = getRandomHexColor();
}