const { write, read, reverseSTR, calculateSum } = require("./utils/helper");

async function main() {
  // 1) write in file1.txt
  await write("file1.txt", "Hello World");

  // 2) write in file2.json
  await write("file2.json", { name: "Ana", age: 22 }, true);

  // 3) read
  let file1 = await read("file1.txt");
  let file2 = await read("file2.json", true);

  console.log("FILE1:", file1);
  console.log("FILE2:", file2);

  // 4) sum
  console.log("SUM:", calculateSum([1, 2, 3, 4, 5]));

  // 5) reverse string
  console.log("REVERSE:", reverseSTR("ana"));
}

main();
