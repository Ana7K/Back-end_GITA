////////////////////////// 1 task ///////////////////////////
// 1) შექმენი utils/helper.js სადაც გექნება ფუქნციები read(უნდა პარსავდეს true-ს გადაწოდების შემდეგ) და write(ანალოგიურად stringify-უნდა გაუკეთოს).
// შექმენი ამ ფუქნციებით 2 ფაილი და ჩაწერე შიგნით ნებისმიერი რამ. ასევე ჰელფერებში დაამატე ჯამის დათვლა და სტრინგის შეტრიალების ფუქნცია.

// const { write, read, reverseSTR, calculateSum } = require("./utils/helper");

// async function main() {
//   // 1) write in file1.txt
//   await write("file1.txt", "Hello World");

//   // 2) write in file2.json
//   await write("file2.json", { name: "Ana", age: 22 }, true);

//   // 3) read
//   let file1 = await read("file1.txt");
//   let file2 = await read("file2.json", true);

//   console.log("FILE1:", file1);
//   console.log("FILE2:", file2);

//   // 4) sum
//   console.log("SUM:", calculateSum([1, 2, 3, 4, 5]));

//   // 5) reverse string
//   console.log("REVERSE:", reverseSTR("ana"));
// }

// main();

////////////////////////// 3 task ///////////////////////////
// 3) commander-ით შექმენი phone-cli, რომელსაც ექნება დამატება,წაშლა,id-ის მიხედვით კონკრეტული ობიექტის ამოღება, და option-ის მიხედვით(--america)-
// ამ ოფშენს თუ გადავცემთ ნომერს წინ უნდა დაუამტოს 011 (ანუ phone-cli add giorgi 574221355 --america)- ასე თუ გადავცემთ უნდა დაამტოს 011574221355

const { Command } = require("commander");
const { read, write } = require("./utils/helper");

const program = new Command();

program
  .command("add")
  .argument("<name>")
  .argument("<phone>")
  .option("--america")
  .action(async (name, phone, options) => {
    let data = await read("phones.json", true);

    let lastId = data[data.length - 1]?.id || 0;

    let finalPhone = options.america ? "011" + phone : phone;

    data.push({
      id: lastId + 1,
      name,
      phone: finalPhone,
    });

    await write("phones.json", data, true);
  });

// delete
program
  .command("delete")
  .argument("<id>")
  .action(async (id) => {
    let data = await read("phones.json", true);

    data = data.filter((el) => el.id !== +id);

    await write("phones.json", data, true);
  });

// get by ID
program
  .command("get")
  .argument("<id>")
  .action(async (id) => {
    let data = await read("phones.json", true);

    let user = data.find((el) => el.id === +id);

    console.log(user);
  });
  
program.parse();
