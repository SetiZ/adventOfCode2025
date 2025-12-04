import fs from "fs";

// let array = fs
//   .readFileSync("example")
//   .toString()
//   .replace(/\r/g, "")
//   .split("\n");
let array = fs.readFileSync("input").toString().replace(/\r/g, "").split("\n");
if (array[array.length - 1] === "") {
  array = array.slice(0, -1);
}
let total = 0;
// console.log(array);
for (let i = 0; i < array.length; i++) {
  const line = array[i];
  for (let j = 0; j < line.length; j++) {
    // read each and what's around it
    const index = line[j];
    const around = [
      line[j - 1],
      line[j + 1],
      array[i - 1]?.[j - 1],
      array[i - 1]?.[j],
      array[i - 1]?.[j + 1],
      array[i + 1]?.[j - 1],
      array[i + 1]?.[j],
      array[i + 1]?.[j + 1],
    ];
    // console.log(index);
    const aroundFiltered = around.filter((x) => x !== undefined);
    // console.log("around:", aroundFiltered);
    if (index === "@") {
      const count = aroundFiltered.filter((x) => x === "@").length;
      if (count < 4) {
        total++;
      }
    }
  }
}

console.log(total);
