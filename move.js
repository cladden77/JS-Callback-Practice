function move(element) {
  element.style.position = "fixed";

  function moveToCoordinates(left, bottom) {
    element.style.left = left + "px";
    element.style.bottom = bottom + "px";
  }

  return {
    to: moveToCoordinates,
  };
}

// initial code for practicing setTimeout
function east() {
  moveToCoordinates(500, 250);
}

function west() {
  moveToCoordinates(100, 650);
}

function north() {
  moveToCoordinates(500, 650);
}

function south() {
  moveToCoordinates(100, 250);
}
