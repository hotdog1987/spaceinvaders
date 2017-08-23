function Ship() {
  this.x = width/2;
  this.y = height;
  this.xDir = 0;

  // this is the draw function
  this.draw = function() {
    var c = color(255, 255, 255);  // Define color 'c'
    fill(c);  // Use color variable 'c' as fill color
    noStroke();  // Don't draw a stroke around shapes
    triangle(this.x - 30, this.y, this.x + 30, this.y, this.x, this.y - 30);
  };

  // this is to set direction
  this.setDir = function(direction) {
    this.xDir = direction;
  };

  // this is the move function based on the keyboard keypress
  this.move = function() {
    if (this.x > (width - 30)) {
      this.x = width - 30;
    } else if (this.x < 30) {
      this.x = 30;
    }
    this.x += this.xDir*5;
  };
}