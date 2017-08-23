function Alien(x, y) {
  this.x = x;
  this.y = y;
  this.r = 30;
  this.xDir = 1;

  // this is the draw function
  this.draw = function() {
    var c = color(0, 255, 0);  // Define color 'c'
    fill(c);  // Use color variable 'c' as fill color
    noStroke();  // Don't draw a stroke around shapes
    ellipse(this.x, this.y, this.r, this.r);
  };

  // this is the move function
  this.move = function() {
    this.x += this.xDir * 25;
  };

  this.moveDown = function(){
    this.xDir *= -1;
    this.y += this.r;
  }
}