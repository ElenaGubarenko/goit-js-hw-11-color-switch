const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const startRef = document.querySelector('.start');
const stopRef = document.querySelector('.stop');
const bodyRef = document.querySelector('body');
let startInterval = null;

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const changeColor = () => {
  const randomColor = colors[randomIntegerFromInterval(0, 5)];
  return (bodyRef.style.backgroundColor = `${randomColor}`);
};

const doStart = () => {
  startInterval = setInterval(changeColor, 1000);
  startRef.disabled = 'true';
};

const doStop = () => {
  return clearInterval(startInterval);
};

startRef.addEventListener('click', doStart);
stopRef.addEventListener('click', doStop);
