//1st example
console.log("start");

setTimeout(() => {
  console.log("setTimeout");
}, 0);
setInterval(() => {
  console.log("Hello World");
}, 1000)

Promise.resolve().then(() => {
  console.log("Promise");
});

console.log("end");

//2nd example
console.log("First");

setTimeout(() => {
  console.log("Second");
}, 0);
console.log("Third");
