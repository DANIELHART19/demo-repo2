//constructor function
function Circle(radius) {
  console.log(this);
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}

const circle = new Circle(10);

circle.location = { x: 1 };

//loop through object and it keys
for (let key in circle) {
  console.log(key, circle[key]);
}

//get all an objects keys
const keys = Object.keys(circle);
console.log(keys);

//check for an existance of a property or method
if ("radius" in circle) {
  console.log("circle has a radius");
}
