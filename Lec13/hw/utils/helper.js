const fs = require("fs/promises");

// WRITE (if stringify is needed)
async function write(filePath, data, stringify = false) {
  await fs.writeFile(
    filePath,
    stringify ? JSON.stringify(data, null, 2) : data,
  );
}

// READ (if parse is needed)
async function read(filePath, parse = false) {
  let data = await fs.readFile(filePath, "utf-8");
  return parse ? JSON.parse(data) : data;
}

// STRING REVERSE
function reverseSTR(str) {
  return str.split("").reverse().join("");
}

// SUM
function calculateSum(arr) {
  return arr.reduce((sum, num) => sum + num, 0);
}

module.exports = {
  write,
  read,
  reverseSTR,
  calculateSum,
};
