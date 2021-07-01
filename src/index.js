import { compose, pipe } from "lodash/fp";

//// Functions are First-Class Citizens
// function sayHello() {
//   return function () {
//     return "Hello Max";
//   };
// }

// let fn = sayHello();
// let message = fn();

// console.log(message);

// // Higher Order Functions

// let numbers = [1, 2, 3];

// // .map() and setTimeout() are higher order functions... take another function as an argument
// numbers.map((number) => number * 2);

// setTimeout(() => console.log("Hello"), 1000);

// Functional Composition
let input = "   JavaScript   ";

const trim = (str) => str.trim();
// Combining function...
// const wrapInDiv = (str) => `<div>${str}</div>`;
// const wrapInSpan = (str) => `<span>${str}</span>`;
// const wrap = (type, str) => `<${type}>${str}</${type}>`;
// Currying
const wrap = (type) => (str) => `<${type}>${str}</${type}>`;
const toLowerCase = (str) => str.toLowerCase();

console.log("classic way", wrap(toLowerCase(trim(input))));

// Composing and Piping ... using Lodash
const composeTransform = compose(wrap("span"), toLowerCase, trim); // conducted right to left
console.log("composed", composeTransform(input));

const pipeTransform = pipe(trim, toLowerCase, wrap("div")); // conducted left to right
console.log("piped", pipeTransform(input));
