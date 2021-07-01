// currying calls a funtion within a function
// purpose - so we don't need to pass multiple parameters, helpful during piping

function add(a) {
  return function (b) {
    return a + b;
  };
}

const add1 = add(1);
add1(5);
add(1)(5);
// explanation - when add is called, it returns a function with 'a' stored as a variable
// explanation - then when add1 is called, it passes 'b' as the parameter and returns 'a + b'

const add2 = (a) => (b) => a + b;
