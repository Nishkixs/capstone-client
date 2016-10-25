'use strict';


const gameEvents = require('./game/events.js');



// On document ready
$(() => {
  gameEvents.addHandlers();
});
