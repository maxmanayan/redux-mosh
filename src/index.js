function sayHello() {
  return function () {
    return "Hello Max";
  };
}

let fn = sayHello();
let message = fn();

console.log(message);
