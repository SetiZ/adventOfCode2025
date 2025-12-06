import fs from "fs";

// const array = fs.readFileSync("example").toString().split("\n");
const array = fs.readFileSync("input").toString().split("\n");

const range = [];
const nums = [];
let good = 0;
// console.log(array);
for (let i = 0; i < array.length; i++) {
  if (array[i].includes("-")) {
    range.push(array[i]);
  } else if (array[i].length > 0) {
    nums.push(array[i]);
  }
}
// console.log(nums.length);
range.forEach((r) => {
  const split = r.split("-");
  // console.log(split);
  const a = Number(split[0]);
  const b = Number(split[1]);
  console.log(a, b);
  for (let i = 0; i < nums.length; i++) {
    if (Number(nums[i]) >= a && Number(nums[i]) <= b) {
      // if (a <= Number(nums[i]) <= b) {
      console.log(nums[i]);
      good++;
      nums.splice(i, 1);
    }
  }
  console.log(good);
});
console.log(good);

// console.log(spoiled);
