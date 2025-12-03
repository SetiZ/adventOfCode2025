import fs from "fs";

const ex = fs.readFileSync("example").toString().split("\n");
const array = fs.readFileSync("input").toString().split("\n");

const dialStart = 50;
let dial = dialStart;
// console.log(array);
// const i = 0;
let counter = 0;
// console.log(dial);
for (let i = 0; i < array.length; i++) {
  // console.log(ex[i]);
  const letter = array[i].charAt(0);
  const rotation = Number(array[i].substring(1));
  let score = dial;
  // console.log(letter, rotation);
  if (letter === "L") {
    score = dial - rotation;
    if (score < 0) {
      while (score < 0) {
        score = score + 100;
        counter++;
      }
      counter++;
    }
    dial = score;
    // console.log(i, dial);
  }
  if (letter === "R") {
    score = dial + rotation;
    if (score >= 100) {
      while (score >= 100) {
        score = score - 100;
        counter++;
      }
      counter++;
    }
    dial = score;
    // console.log(i, dial);
  }

  if (dial === 0) {
    counter++;
  }
}
console.log("NOT WORKING");
console.log(counter);
