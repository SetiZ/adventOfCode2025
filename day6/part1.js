import fs from "fs";

// let array = fs.readFileSync("example").toString().split("\n");
let array = fs.readFileSync("input").toString().split("\n");

if (array[array.length - 1] === "") {
  array = array.slice(0, -1);
}

// 1. Clean and split the rows into arrays
const parsedRows = array.map((row) => row.trim().split(/\s+/));
// console.log(parsedRows);
// 2. Transpose (flip) rows to columns
const columns = parsedRows[0].map((_, colIndex) =>
  parsedRows.map((row) => row[colIndex]),
);

// console.log(columns);
let res = [];
for (let i = 0; i < columns.length; i++) {
  const operation = columns[i].pop();
  // console.log(operation);
  if (operation === "+") {
    // console.log("addition", columns[i]);
    const sum = columns[i].reduce((total, num) => total + Number(num), 0);
    res.push(sum);
  }
  if (operation === "*") {
    // console.log("multiplication", columns[i]);
    const mult = columns[i].reduce((total, num) => total * Number(num), 1);
    res.push(mult);
  }
}

// console.log(res);
const totalSum = res.reduce((total, num) => total + Number(num), 0);
console.log(totalSum);
