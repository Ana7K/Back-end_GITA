const express = require("express");
const connectDB = require("./connect.db");
import type { Request, Response } from "express";

const app = express();

const PORT = 3030;

app.get("/", (req: Request, res: Response): void => {
    res.send("Hello World");
  });

app.listen(PORT, () => {
  console.log({ message: `Server is running on port http://localhost:${PORT}` });
  connectDB();
});


// 2)შექმენი პროგრამა, რომელიც ამატებს მომხმარებლის სახელს და ასაკს და აბრუნებს ტექსტს User Nika is 22 years old.

function userInfo(name: string, age: number): string {
    return `User ${name} is ${age} years old.`;
}

console.log(userInfo("Nika", 22));


// 3)აღწერე პროდუქტები ინტერფეისით და გამოითვალე საერთო ფასი.
//   თუ ფასი მეტია 100-ზე, დაბეჭდე "Discount available!"

interface IProduct {
    name: string;
    price: number;
}

const products: IProduct[] = [
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



// 4)შექმენი ორი ინტერფეისი  IHero და ISuperHero.

// IHero უნდა აღწერდეს ჩვეულებრივი გმირის მონაცემებს:
// name: string - გმირის სახელი
// age: number - გმირის ასაკი.

// ISuperHero უნდა დაექსთენდდეს IHero-ით და დაამატოს:
// power: string - გმირის ძალა
// level?: string - optional ველი, რომელიც განისაზღვრება მოგვიანებით

// შექმენი ფუნქცია levelUp(hero: ISuperHero): void, რომელიც:
// ამოწმებს გმირის ასაკს
// თუ ასაკი მეტია 30-ზე - level = "Pro"
// თუ ნაკლებია ან ტოლია 30-ის - level = "Newbie"
// დაბეჭდავს შედეგს კონსოლში:
// "Batman is now level: Pro"

interface IHero {
    name: string;
    age: number;
}

interface ISuperHero extends IHero {
    power: string;
    level?: string;
}

function levelUp(hero: ISuperHero): void {

    if (hero.age > 30) {
        hero.level = "Pro";
    } else {
        hero.level = "Newbie";
    }

    console.log(`${hero.name} is now level: ${hero.level}`);
}

const hero1: ISuperHero = {
    name: "Batman",
    age: 35,
    power: "Stealth"
};

levelUp(hero1);



// 5)დაწერე generic ფუნქცია, რომელიც აბრუნებს მასივის პირველ ელემენტს.

function getFirst<T>(arr: T[]): T {
    return arr[0];
}

const numbers = [10, 20, 30];
const firstNumber = getFirst(numbers);
console.log(firstNumber);
