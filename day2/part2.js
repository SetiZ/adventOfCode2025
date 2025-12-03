import fs from "fs";

const ex = fs.readFileSync("example").toString().replace(/\r|\n/g, "");
const array = fs.readFileSync("input").toString().replace(/\r|\n/g, "");

function isRepeatedNumberPattern(num) {
  const str = String(num); // Ensure num is treated as a string
  // return /^(\d{2,})\1$/.test(str);
  return /^(\d+)\1+$/.test(str);
}

function matchesDoubleDigitRepeat(num) {
  const str = String(num);
  // Even length, split in half, both halves must match
  if (str.length % 2 !== 0) return false;
  const half = str.length / 2;
  return str.slice(0, half) === str.slice(half);
}

const test = array.split(",");
// console.log(test);
let invalids = [];
for (let i = 0; i < test.length; i++) {
  // console.log(test[i]);
  const split = test[i].split("-");
  console.log("from", split[0], "to", split[1]);
  for (let j = Number(split[0]); j <= Number(split[1]); j++) {
    // console.log(j);
    if (isRepeatedNumberPattern(j)) {
      invalids.push(j);
      console.log("match:", j);
    }
  }
}

console.log(invalids);
const sum = invalids.reduce((total, num) => total + num, 0);
console.log(sum);
