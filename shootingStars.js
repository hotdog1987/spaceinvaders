function ShootingStar(x) {
  this.x = x;
  this.y = height;
  this.r = 10;
  this.yDir = 1;

  // this is the draw function
  this.draw = function() {
    var c = color(255, 255, 255);  // Define color 'c'
    fill(c);  // Use color variable 'c' as fill color
    noStroke();  // Don't draw a stroke around shapes
    ellipse(this.x, this.y, this.r, this.r);
  };

  // this is the move function based on the keyboard keypress
  this.move = function() {
    this.y -= this.yDir * 25;
  };

  this.killAlien = function(aliens) {
    for (var i = aliens.length - 1; i >= 0; i--) {
      if (dist(this.x, this.y, aliens[i].x, aliens[i].y) < (this.r + aliens[i].r)) {
        aliens.splice(i, 1);
      }
    }
  };
}