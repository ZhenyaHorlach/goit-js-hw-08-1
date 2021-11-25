import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const player = new Player('vimeo-player');
addCurrentTime();

player.on(
  'timeupdate',
  throttle(function (event) {
    localStorage.setItem('videoplayer-current-time', event.seconds);
  }, 1000),
);

function addCurrentTime() {
  const currentTime = localStorage.getItem('videoplayer-current-time');
  if (currentTime) {
    player.setCurrentTime(currentTime);
  }
}
