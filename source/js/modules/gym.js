const playVideoBtn = document.querySelector('.gym__button');
const coverBlock = document.querySelector('.gym__cover');
const videoBlock = document.querySelector('.gym__video');
const video = document.querySelector('.gym__video iframe');

const onPlayButtonClick = function () {
  if (!coverBlock.classList.contains('hidden')) {
    coverBlock.classList.add('hidden');
  }

  if (videoBlock.classList.contains('hidden')) {
    videoBlock.classList.remove('hidden');
  }

  playVideoBtn.removeEventListener('click', onPlayButtonClick);
  if (!playVideoBtn.classList.contains('hidden')) {
    playVideoBtn.classList.add('hidden');
  }
};

const initGym = function () {
  playVideoBtn.addEventListener('click', onPlayButtonClick);
};

export {initGym};
