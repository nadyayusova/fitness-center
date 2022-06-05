const playVideoBtn = document.querySelector('.gym__button');
const coverBlock = document.querySelector('.gym__cover');
const videoBlock = document.querySelector('.gym__video');

function getVideoId() {
  const video = videoBlock.querySelector('iframe');
  const start = video.src.lastIndexOf('/') + 1;
  const end = video.src.indexOf('?');
  return (video.src.substring(start, end));
}

const onPlayButtonClick = function () {
  if (!coverBlock.classList.contains('hidden')) {
    coverBlock.classList.add('hidden');
  }

  if (videoBlock.classList.contains('hidden')) {
    videoBlock.classList.remove('hidden');

    let tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    let firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    let player;

    function onYouTubeIframeAPIReady() {
      player = new YT.Player('player', {
        videoId: getVideoId(),
        events: {
          'onReady': onPlayerReady,
        }
      });
    }

    function onPlayerReady(event) {
      event.target.playVideo();
    }

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
