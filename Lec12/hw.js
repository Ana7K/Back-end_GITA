// 1)შექმენი 2 ფოლდერი 3 ფაილი, წაშალე მარტო ფოლდერები. შეამომწე lstat-ის მეშვეობით
// const fs = require("fs/promises");

// async function main() {
//   await fs.mkdir("folder1", { recursive: true });
//   await fs.mkdir("folder2", { recursive: true });

//   await fs.writeFile("file1.txt", "hello");
//   await fs.writeFile("file2.txt", "hello");
//   await fs.writeFile("file3.txt", "hello");

//   let data = await fs.readdir(__dirname);

//   for (let item of data) {
//     let info = await fs.lstat(item);

//     if (info.isDirectory()) {
//       await fs.rmdir(item);
//       console.log(item + " deleted");
//     }
//   }
// }

// main();

// 2)შექმენი  მთავარი ფოლდერი, ფოლდერში აიღე ერთი main.js ამ main.js ით შექმენი (mkdir) ფოლდერი და ამ ფოლდერში ჩაწერე index.js შემდეგ ამ index.js-ით ჩაწერე მთავარფოლდერში message.txt, ამ message.txt-ში რაც გექნება შეატრიალე ეგ სტრინგი და ისევ იგივეში ჩაწერე.
// const fs = require("fs/promises");

// async function main() {
//   await fs.mkdir("folder1", { recursive: true });

//   let code = `
// const fs = require("fs/promises")

// async function main() {
//     await fs.writeFile("../message.txt","hello world")

//     let data = await fs.readFile("../message.txt","utf-8")
//     let reversed = data.split("").reverse().join("")

//     await fs.writeFile("../message.txt",reversed)
// }

// main()
// `;

//   await fs.writeFile("folder1/index.js", code);
// }

// main();

// 3) შექმენი ფოლდერი ამ ფოლდერში გქონდეს 6 ფაილი. 3 ფაილის გაფართოვება უნდა იყოს .txt. 3 ფაილის გაფართოვება უნდა იყოს .js. შენ უნდა იპოვო ,ისეთი ფაილები, რომლის გაფართოვებაცაა .txt და ისინი ჩწერო საერთო all.txt-ში
// const fs = require("fs/promises");

// async function main() {
//   await fs.mkdir("files", { recursive: true });

//   await fs.writeFile("files/first.txt", "hello");
//   await fs.writeFile("files/second.txt", "world");
//   await fs.writeFile("files/third.txt", "ana");

//   await fs.writeFile("files/one.js", "console.log(1)");
//   await fs.writeFile("files/two.js", "console.log(2)");
//   await fs.writeFile("files/three.js", "console.log(3)");

//   let files = await fs.readdir("files");
//   let result = "";

//   for (let item of files) {
//     if (item.endsWith(".txt")) {
//       let data = await fs.readFile(`files/${item}`, "utf-8");
//       result += data + " ";
//     }
//   }

//   await fs.writeFile("files/all.txt", result);
// }

// main();

// 4) დაწერე http სერვერი და გამოდგი 3 ენდფოინითი (/animals,/cars,/motorcycle)
const http = require("http");

let animals = [
  {
    name: "cat",
  },
  {
    name: "tiger",
  },
  {
    name: "dog",
  },
];

let cars = [
  {
    brand: "BMW",
  },
  {
    brand: "Mercedes",
  },
  {
    brand: "Porsche",
  },
];

let motorcycles = [
  {
    brand: "Honda",
  },
  {
    brand: "Yamaha",
  },
  {
    brand: "Kawasaki",
  },
];

const server = http.createServer((req, res) => {
  if (req.url === "/animals") {
    res.writeHead(200, { "content-type": "application/json" });
    res.write(JSON.stringify(animals));
    res.end();
  }

  if (req.url === "/cars") {
    res.writeHead(200, { "content-type": "application/json" });
    res.write(JSON.stringify(cars));
    res.end();
  }

  if (req.url === "/motorcycle") {
    res.writeHead(200, { "content-type": "application/json" });
    res.write(JSON.stringify(motorcycles));
    res.end();
  }
});

server.listen(8000, () => {
  console.log("server running on http://localhost:8000");
});
