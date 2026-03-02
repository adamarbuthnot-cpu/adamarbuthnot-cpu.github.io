/* global $, sessionStorage */

$(document).ready(runProgram);

function runProgram() {

////////////////////////////////////////////////////////////////////////////////
//////////////////////////// SETUP /////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

const KEY = {
  ENTER: 13,
  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40,
};

var FRAME_RATE = 60;
var FRAMES_PER_SECOND_INTERVAL = 1000 / FRAME_RATE;

// walker object
var walker = {
  x: 0,
  y: 0,
  speedX: 0,
  speedY: 0,
};

// start game loop
var interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);

// event listeners
$(document).on("keydown", handleKeyDown);
$(document).on("keyup", handleKeyUp);

////////////////////////////////////////////////////////////////////////////////
///////////////////////// CORE LOGIC ///////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function newFrame() {
  repositionGameItem();
  wallCollision();
  redrawGameItem();
}

function handleKeyDown(event) {
  if (event.which === KEY.LEFT) {
    walker.speedX = -5;
  }
  if (event.which === KEY.RIGHT) {
    walker.speedX = 5;
  }
  if (event.which === KEY.UP) {
    walker.speedY = -5;
  }
  if (event.which === KEY.DOWN) {
    walker.speedY = 5;
  }
}

function handleKeyUp(event) {
  if (event.which === KEY.LEFT || event.which === KEY.RIGHT) {
    walker.speedX = 0;
  }
  if (event.which === KEY.UP || event.which === KEY.DOWN) {
    walker.speedY = 0;
  }
}

////////////////////////////////////////////////////////////////////////////////
////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function repositionGameItem() {
  walker.x = walker.x + walker.speedX;
  walker.y = walker.y + walker.speedY;
}

function redrawGameItem() {
  $("#walker").css("left", walker.x);
  $("#walker").css("top", walker.y);
}

function wallCollision() {
  var boardWidth = $("#board").width();
  var boardHeight = $("#board").height();
  var walkerWidth = $("#walker").width();
  var walkerHeight = $("#walker").height();

  // left boundary
  if (walker.x < 0) {
    walker.x -= walker.speedX;
  }

  // right boundary
  if (walker.x > boardWidth - walkerWidth) {
    walker.x -= walker.speedX;
  }

  // top boundary
  if (walker.y < 0) {
    walker.y -= walker.speedY;
  }

  // bottom boundary
  if (walker.y > boardHeight - walkerHeight) {
    walker.y -= walker.speedY;
  }
}

function endGame() {
  clearInterval(interval);
  $(document).off();
}

}