import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const STORAGE_KEY = "videoplayer-current-time";

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('play', function (data) {
  let storedTime = localStorage.getItem(STORAGE_KEY);

  if (storedTime !== null) {
    player.setCurrentTime(storedTime);
  }
});
  
player.on('timeupdate', throttle(onTimeUpdate, 1000));

function onTimeUpdate(data) {
  localStorage.setItem(STORAGE_KEY, data.seconds);
}
