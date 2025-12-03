import fs from "fs";

// let array = fs.readFileSync("example").toString().replace(/\r/g, "").split("\n");
let array = fs.readFileSync("input").toString().replace(/\r/g, "").split("\n");
if (array[array.length - 1] === "") {
  array = array.slice(0, -1);
}

// let result = [];
// for (let i = 0; i < array.length; i++) {
//   let gett = [array[i][0], array[i][1]];
//   console.log("==============");
//   console.log(gett);
//   for (let j = 1; j < array[i].length; j++) {
//     console.log(gett, array[i][j]);
//     if (gett[0] < array[i][j]) {
//       // gett[0] = array[i][j];
//       if (gett[1] < array[i][j]) {
//         gett[1] = array[i][j];
//       } else {
//         gett[0] = array[i][j];
//       }
//     } else if (gett[1] && gett[1] < array[i][j]) {
//       gett[1] = array[i][j];
//     }
//   }
//   console.log(gett);
//   result.push(Number(gett.join("")));
// }
// console.log(result);
// const sum = result.reduce((total, num) => total + num, 0);
// console.log(sum);

let resu = [];
for (let a = 0; a < array.length; a++) {
  let max = 0;
  let num = 0;
  for (let i = 0; i < array[a].length - 1; i++) {
    // console.log(array[a]);
    for (let j = i + 1; j < array[a].length; j++) {
      num = parseInt(array[a][i] + array[a][j], 10);
      if (num > max) max = num;
    }
  }
  console.log(max);
  resu.push(max);
}

console.log(resu);
const sum = resu.reduce((total, num) => total + num, 0);
console.log(sum);
