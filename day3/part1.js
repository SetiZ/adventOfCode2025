import fs from "fs";

const ex = fs.readFileSync("example").toString().replace(/\r|\n/g, "");
const array = fs.readFileSync("input").toString().replace(/\r|\n/g, "");

console.log(ex);

for (let i = 0; i < ex.length; i++) {
  const split = ex[i].split();
  console.log(split);
}
