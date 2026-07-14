"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const connectDB = require("./connect.db");
const app = express();
const PORT = 3030;
app.get("/", (req, res) => {
    res.send("Hello World");
});
app.listen(PORT, () => {
    console.log({ message: `Server is running on port http://localhost:${PORT}` });
    connectDB();
});
// 2)შექმენი პროგრამა, რომელიც ამატებს მომხმარებლის სახელს და ასაკს და აბრუნებს ტექსტს User Nika is 22 years old.
function userInfo(name, age) {
    return `User ${name} is ${age} years old.`;
}
console.log(userInfo("Nika", 22));
const products = [
    {
        name: "Laptop",
        price: 1200
    },
    {
        name: "Mouse",
        price: 50
    },
    {
        name: "Keyboard",
        price: 80
    }
];
let totalPrice = 0;
products.forEach((product) => {
    totalPrice += product.price;
});
console.log("Total price:", totalPrice);
if (totalPrice > 100) {
    console.log("Discount available!");
}
function levelUp(hero) {
    if (hero.age > 30) {
        hero.level = "Pro";
    }
    else {
        hero.level = "Newbie";
    }
    console.log(`${hero.name} is now level: ${hero.level}`);
}
const hero1 = {
    name: "Batman",
    age: 35,
    power: "Stealth"
};
levelUp(hero1);
// 5)დაწერე generic ფუნქცია, რომელიც აბრუნებს მასივის პირველ ელემენტს.
function getFirst(arr) {
    return arr[0];
}
const numbers = [10, 20, 30];
const firstNumber = getFirst(numbers);
console.log(firstNumber);
