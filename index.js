const videoContainer = document.querySelector('.video__container');
const dateContainer = document.querySelector('.date__container');
const video = document.querySelector('video');
const playBtn = document.querySelector('#play-btn');
const closeBtn = document.querySelector('#stop-btn');
const day = document.querySelector('#day');
const mounth = document.querySelector('#mounth');
const yare = document.querySelector('#yare');

const validateDate = () => {
  const dayValue = +day.value;
  const mounthValue = +mounth.value;
  const yareValue = +yare.value;
  debugger;
  return !!(dayValue >= 1 && dayValue <= 31 && mounthValue <= 12 && mounthValue >= 1 && yareValue <= 2022); 
};

const startVideo = () => {
  if (!validateDate()) return;

  videoContainer.classList.remove('hidden');
  dateContainer.classList.add('hidden');
  video.play();
};

const stopVideo = () => {
  video.pause();
  videoContainer.classList.add('hidden');
  dateContainer.classList.remove('hidden');
};

const checkNumberType = (value) => !isNaN(value);

const checkDay = (value) => {
  return !!(!isNaN(value) && value >= 1 && value <= 31);  
};

const checkMounth = (value) => {
  return !!(!isNaN(value) && value >= 1 && value <= 12);  
};

const checkYare = (value) => {
  return !!(!isNaN(value) && value <= 2022);  
};

const dayChange = (e) => {
  if (!checkDay(e.target.value)) {
    day.classList.add('error');
  } else {
    day.classList.remove('error');
  }
};

const mounthChange = (e) => {
  if (!checkMounth(e.target.value)) {
    mounth.classList.add('error');
  } else {
    mounth.classList.remove('error');
  }
};

const yareChange = (e) => {
  if (!checkYare(e.target.value) || !e.target.value) {
    yare.classList.add('error');
  } else {
    yare.classList.remove('error');
  }
};

playBtn.addEventListener('click', startVideo);
closeBtn.addEventListener('click', stopVideo);
day.addEventListener('change', dayChange);
mounth.addEventListener('change', mounthChange);
yare.addEventListener('change', yareChange);
