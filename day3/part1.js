import fs from "fs";

const ex = fs.readFileSync("example").toString().replace(/\r|\n/g, "");
const array = fs.readFileSync("input1").toString().replace(/\r|\n/g, "");
