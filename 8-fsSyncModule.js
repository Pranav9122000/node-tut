const { readFileSync, writeFileSync } = require("fs");
console.log("Start");
const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");

console.log(first, second);

//creates a file if not present and overwrites the data
writeFileSync(
  "./content/result.txt",
  `Here is the result : ${first} ${second}`
);

//Append the data present in file
writeFileSync(
  "./content/result.txt",
  `Here is the result : ${first} ${second}`,
  { flag: "a" } // for appending the data
);

console.log("Done with the task");
console.log("Starting with new one");
