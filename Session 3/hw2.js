// ======== Homework ES6 Class =========

class Shape {
  constructor(id, x, y) {
    this.id = id;
    this.x = x;
    this.y = y;
  };

  move(x, y) {
    this.x = x;
    this.y = y;
  };
};

class Rectangle extends Shape {
  constructor(id, x, y, width, height) {
    super(id, x, y);
    this.width = width;
    this.height = height;
  };
};

class Circle extends Shape {
  constructor(id, x, y, radius) {
    super(id, x, y);
    this.radius = radius;
  };
};

class Eye extends Circle {
  constructor(id, x, y, radius, color) {
    super(id, x, y, radius);
    this.color = color;
  };

  roll(rollAmount) {
    super.move(this.x, this.y);
    this.x += rollAmount;
  };
};