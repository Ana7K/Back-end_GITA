const fs = require("fs/promises");

// 1)წაიკითხე ყველა რიცხვი ფაილიდან, გამოთვალე მათი ჯამი და ჩაწერე სხვა ფაილში
async function Main() {
  let numsArr = [1, 2, 3, 4, 5];
  await fs.writeFile("numbers.json", JSON.stringify(numsArr));

  let readNums = await fs.readFile("numbers.json", "utf-8");
  let numsToArr = JSON.parse(readNums);
  let sum = numsToArr.reduce((total, curr) => total + curr, 0);

  await fs.writeFile("sum.txt", String(sum));
}

Main();

// 2)ერთი ფაილიდან წაიკითხე ტექსტი, გადაატრიალე (reverse) და ჩაწერე სხვა ფაილში
async function ReverseText() {
  await fs.writeFile("first.txt", "javascript");

  let readText = await fs.readFile("first.txt", "utf-8");
  let reversedText = readText.split("").reverse().join("");

  await fs.writeFile("second.txt", reversedText);
}

ReverseText();

// 3)შექმენი მომხმარებლების მასივი შემდეგი თვისებებით: name, age, email — შემდეგ ეს მონაცემები ჩაწერე data.json ფაილში
async function WriteUsers() {
  let users = [
    {
      name: "nino",
      age: 15,
      email: "nino@gmail.com",
    },
    {
      name: "nika",
      age: 17,
      email: "nika@gmail.com",
    },
    {
      name: "ana",
      age: 22,
      email: "ana@gmail.com",
    },
  ];

  await fs.writeFile("data.json", JSON.stringify(users));
}

WriteUsers();

// 4)წაიკითხე მონაცემები ორ სხვადასხვა ფაილიდან და ჩაწერე ერთ ფაილში
async function MergeFiles() {
  await fs.writeFile("first.txt", "hello ");
  await fs.writeFile("second.txt", "world");

  let readFirst = await fs.readFile("first.txt", "utf-8");
  let readSecond = await fs.readFile("second.txt", "utf-8");
  let mergedText = readFirst.concat(readSecond);

  await fs.writeFile("third.txt", mergedText);
}

MergeFiles();

// 5)ჩაწერე ფაილში ტექსტი, შემდეგ წაიკითხე ეს მონაცემები და დათვალე რამდენი სიტყვაა
async function CountWords() {
  await fs.writeFile("text.txt", "hello world");

  let readText = await fs.readFile("text.txt", "utf-8");
  let wordsArr = readText.split(" ");

  console.log(wordsArr.length);
}

CountWords();

// 6)წაიკითხე მომხმარებლების JSON მონაცემები, გაფილტრე ისინი (ის ვინც 18 წელზე უფროსია) და თავიდან ჩაწერე
async function FilterAdults() {
  let users = [
    {
      name: "gio",
      age: 22,
    },
    {
      name: "luka",
      age: 16,
    },
    {
      name: "ana",
      age: 25,
    },
  ];

  await fs.writeFile("users.json", JSON.stringify(users));

  let readUsers = await fs.readFile("users.json", "utf-8");
  let usersArr = JSON.parse(readUsers);
  let adults = usersArr.filter((user) => user.age > 18);

  await fs.writeFile("adults.json", JSON.stringify(adults));
}

FilterAdults();

// 7)შექმენი სტუდენტების მასივი (name, score, passed), ჩაწერე students.json-ში.
// შემდეგ წაიკითხე და გაფილტრე ისინი, ვისი score 50-ზე მეტია, და ჩაწერე ახალ "passed.json" - ში
async function FilterStudents() {
  let students = [
    {
      name: "gio",
      score: 80,
      passed: true,
    },
    {
      name: "nino",
      score: 40,
      passed: false,
    },
    {
      name: "ana",
      score: 95,
      passed: true,
    },
  ];

  await fs.writeFile("students.json", JSON.stringify(students));

  let readStudents = await fs.readFile("students.json", "utf-8");
  let studentsArr = JSON.parse(readStudents);
  let passedStudents = studentsArr.filter((student) => student.score > 50);

  await fs.writeFile("passed.json", JSON.stringify(passedStudents));
}

FilterStudents();

// 8)წაიკითხე "users.json", და ყველას, ვისაც არ აქვს "@" ელფოსტაში, წაშალე
async function ValidEmails() {
  let users = [
    {
      name: "Gio",
      email: "gio@gmail.com",
    },
    {
      name: "Nika",
      email: "nikaexample.com",
    },
    {
      name: "Mariam",
      email: "mariam@reeducate.ge",
    },
    {
      name: "Lasha",
      email: "lashareeducate.ge",
    },
    {
      name: "Ana",
      email: "ana@mail.com",
    },
  ];

  await fs.writeFile("users.json", JSON.stringify(users));

  let readUsers = await fs.readFile("users.json", "utf-8");
  let usersArr = JSON.parse(readUsers);
  let validUsers = usersArr.filter((user) => user.email.includes("@"));

  await fs.writeFile("validUsers.json", JSON.stringify(validUsers));
}

ValidEmails();
