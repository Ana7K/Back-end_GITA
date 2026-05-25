// 1. დაწერე ფუნქცია , რომელიც არგუმენტად იღებს sec-ს და ითვლის უკუსვლით იქმადე სანამ 0-მდე არ მივა
function countdown(sec) {
  let interval = setInterval(() => {
    console.log(sec);
    sec--;
    if (sec < 0) {
      clearInterval(interval);
    }
  }, 1000);
}

// countdown(10);

// 2. დაწერე ფუქნცია ფუქნციას გადააწოდე რიცხვი  და ასევე ლოგე რენდომული რიცხვი იქამდე სანამ ეს გადაცემული და რენდომ რიცხვი არ. დაემთხვევა ერთმამენთს
function randomComparison(num) {
  let interval = setInterval(() => {
    let rand = Math.floor(Math.random() * 11);
    console.log(rand);
    if (num === rand) {
      clearInterval(interval);
      console.log("it's a match");
    }
  }, 1000);
}

// randomComparison(4);

// 3.დაწერე ფუქნცია რომელიც მიიღებს n და callback-ს როცა n > 27-ზე გაუშვი ეს callback-ი რომელიც დააკონსოლებს რომ ეს ნამდვილად მეტია 27-ზე სხვა შემთხვევაში დააკონსოლე რომ n ნაკლებია
function check(n, callback) {
  if (n > 27) {
    callback();
  } else {
    console.log("n is less than 27");
  }
}

function checkMessage() {
  console.log("n is more than 27");
}

// check(30, checkMessage);
// check(20, checkMessage);

// 4.დაწერე ფუქნცია რომელიც პარამეტრად მიიღებს API და დააბრუნებს ამ API-ში
// მყოფ  4 - users. https://jsonplaceholder.typicode.com/users დაწერე ორივენაირად than/catch & async/await


// 5) დააწყვილე reduce-თი ცალკე ვისი ასაკიც მეტია 10 ზე და ვისი ასაკიც ნაკლებია 20
// let people = [
//   { name: "Giorgi", age: 25 },
//   { name: "Nika", age: 15 },
//   { name: "Mariam", age: 30 },
//   { name: "Luka", age: 18 }
// ];

// 6. დაწერე ფუნქცია რომელიც მიიღებს ორ რიცხვს და callback-ს. თუ პირველი მეტია მეორეზე გაუშვი callback და დაუბეჭდე "მეტია", სხვა შემთხვევაში "ნაკლები ან ტოლია".

// 7.დაწერე reduce, რომელიც დააჯგუფებს - ცალკე 20-ზე მეტ ფასიან რიცხვებს და
// ცალკე 20-ზე ნაკლები ან ტოლი ფასიანი ნივთები
// let products = [
//   { name: "Mouse", price: 15 },
//   { name: "Keyboard", price: 45 },
//   { name: "USB Cable", price: 7 },
//   { name: "Headphones", price: 29.9 },
//   { name: "Webcam", price: 52 }
// ];
