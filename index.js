const videoContainer = document.querySelector('.video__container');
const dateContainer = document.querySelector('.date__container');
const video = document.querySelector('video');
const playBtn = document.querySelector('#play-btn');
const closeBtn = document.querySelector('#stop-btn');

const startVideo = () => {
  videoContainer.classList.remove('hidden');
  dateContainer.classList.add('hidden');
  video.play();
};

const stopVideo = () => {
  video.pause();
  videoContainer.classList.add('hidden');
  dateContainer.classList.remove('hidden');
}

playBtn.addEventListener('click', startVideo);
closeBtn.addEventListener('click', stopVideo);
