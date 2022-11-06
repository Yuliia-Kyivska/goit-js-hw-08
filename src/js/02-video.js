import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const STORAGE_KEY = "videoplayer-current-time";

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);





// function timePlayer() { 

// }
// const onPlay = function(data) {
//     // data — це об’єкт, що містить властивості, характерні для цієї події
// };

// player.on('play', onPlay);


//  player.setCurrentTime(1000).then(function(seconds) {
//     // секунд = фактичний час, який гравець прагнув
// }).catch(function(error) {
//     switch (error.name) {
//         case 'RangeError':
//             // час був меншим за 0 або більшим за тривалість відео
//             break;

//         default:
//             // сталася інша помилка
//             break;
//     }
// });   