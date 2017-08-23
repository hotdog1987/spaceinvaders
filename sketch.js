// Code goes here

var ship;
var aliens = [];
var shootingStars = [];

function setup() {
  // create canvas
  createCanvas(1500, 500);
  // create ship
  ship = new Ship();
  // create aliens
  for (var i = 0; i < 27; i++) {
    aliens[i] = new Alien(i*65+65, 30);
  }

}

function draw() {
  background(160);

  // draw ship & move it
  ship.draw();
  ship.move();

  // draw aliens & move them
  for (var j = 0; j < aliens.length; j++) {
    aliens[j].draw();
    aliens[j].move();

    if (aliens[j].x > width || aliens[j].x < 0) {
      aliens[j].moveDown();
    }
  }

  // draw shooting stars & move them
  for (var i = 0; i < shootingStars.length; i++) {
    shootingStars[i].draw();
    shootingStars[i].move();

    // if shoorting stars touch any alien, remove it
    shootingStars[i].killAlien(aliens);
  }
}

// perform logic on keyboard key release
function keyReleased() {
  if (key !== ' ') {
    ship.setDir(0);
  }
}

// perform logic when keyboard keys are pressed
function keyPressed() {
  if (key === ' ') {
    shootingStars.push(new ShootingStar(ship.x));
  }

  if (keyCode === LEFT_ARROW) {
    ship.setDir(-1);
  } else if (keyCode === RIGHT_ARROW) {
    ship.setDir(1);
  }
}