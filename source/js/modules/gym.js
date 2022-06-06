const playVideoBtn = document.querySelector('.gym__button');
const coverBlock = document.querySelector('.gym__cover');
const videoBlock = document.querySelector('.gym__video');
const tag = document.createElement('script');
const firstScriptTag = document.getElementsByTagName('script')[0];


function getVideoId() {
  const video = videoBlock.querySelector('iframe');
  const start = video.src.lastIndexOf('/') + 1;
  const end = video.src.indexOf('?');
  return (video.src.substring(start, end));
}

function onYouTubeIframeAPIReady() {
  const player = new YT.Player('player', {
    videoId: getVideoId(),
    events: {
      'onReady': onPlayerReady,
    },
  });
  return player;
}

function onPlayerReady(event) {
  event.target.playVideo();
}

const onPlayButtonClick = function () {
  if (!coverBlock.classList.contains('hidden')) {
    coverBlock.classList.add('hidden');
  }

  if (videoBlock.classList.contains('hidden')) {
    videoBlock.classList.remove('hidden');

    tag.src = 'https://www.youtube.com/iframe_api';
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;
    window.onPlayerReady = onPlayerReady;
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
