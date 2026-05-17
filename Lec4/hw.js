// 1) გაქვს ლეპტოპების მასივი, იპოვე ყველაზე ძვირი და გამოიტანე კონსოლში
const laptops = [
  { model: "Dell XPS 13", price: 1800 },
  { model: "MacBook Pro 14", price: 2499 },
  { model: "Lenovo ThinkPad X1", price: 2100 },
  { model: "Asus Zephyrus G14", price: 1999 },
];

let mostExpensive = laptops[0];

for (let i = 0; i < laptops.length; i++) {
  if (laptops[i].price > mostExpensive.price) {
    mostExpensive = laptops[i];
  }
}

console.log(mostExpensive);
console.log("---------------------------");

// 2)შექმენი ობიექტი, რომელსაც ექნება width, height და getArea() მეთოდი, რომელიც დააბრუნებს ფართობს.
const rectangle = {
  width: 10,
  height: 5,

  getArea() {
    return this.width * this.height;
  },
};

console.log(rectangle.getArea());
console.log("---------------------------");

// 3)დაბეჭდე მხოლოდ იმ სტუდენტების სახელები, რომელთაც passed === true.
const students = [
  { name: "Giorgi", score: 85, passed: true },
  { name: "Nika", score: 50, passed: false },
  { name: "Mariam", score: 92, passed: true },
  { name: "Luka", score: 60, passed: false },
];

for (let i = 0; i < students.length; i++) {
  if (students[i].passed === true) {
    console.log(students[i].name);
  }
}
console.log("---------------------------");

// 4)გაფილტრე ისეთი პროდუქტები, რომლებიც 10$-ზე იაფია და დააბრუნე მხოლოდ მათი სათაურების მასივი.
const products = [
  { title: "Pencil", price: 2 },
  { title: "Notebook", price: 5 },
  { title: "Backpack", price: 35 },
  { title: "Ruler", price: 3 },
  { title: "Calculator", price: 40 },
];

let cheapProducts = [];

for (let i = 0; i < products.length; i++) {
  if (products[i].price < 10) {
    cheapProducts.push(products[i].title);
  }
}

console.log(cheapProducts);
console.log("---------------------------");

// 5)დაალაგე ზრდადობით rating-ის მიხედვით
const movies = [
  { title: "Inception", rating: 9 },
  { title: "Avatar", rating: 7.5 },
  { title: "Joker", rating: 8.2 },
  { title: "Tenet", rating: 6.9 },
];

movies.sort((a, b) => a.rating - b.rating);

console.log(movies);
console.log("---------------------------");

// 6)იპოვე ყველაზე იაფი ტელეფონი და გამოიტანე მხოლოდ მისი model
const phones = [
  { model: "iPhone 15", price: 1200 },
  { model: "Samsung Galaxy S24", price: 950 },
  { model: "Xiaomi Redmi 13", price: 250 },
  { model: "Pixel 8", price: 800 },
];

let cheapestPhone = phones[0];

for (let i = 0; i < phones.length; i++) {
  if (phones[i].price < cheapestPhone.price) {
    cheapestPhone = phones[i];
  }
}

console.log(cheapestPhone.model, "- cheapest model");
console.log("---------------------------");

// 7)დაბეჭდე 300- გვერდიანზე მეტი
const books = [
  { title: "Harry Potter", pages: 500 },
  { title: "The Little Prince", pages: 120 },
  { title: "Lord of the Rings", pages: 700 },
  { title: "Animal Farm", pages: 250 },
];

console.log("more than 300 pages:");
for (let i = 0; i < books.length; i++) {
  if (books[i].pages > 300) {
    console.log(books[i].title);
  }
}

console.log("---------------------------");

// 8)დაალაგე ზრდადობით და შეკრიბე ფასი
const mobilePhones = [
  { model: "iPhone 15", price: 1200 },
  { model: "Samsung Galaxy S24", price: 950 },
  { model: "Xiaomi Redmi 13", price: 250 },
  { model: "Pixel 8", price: 800 },
];

mobilePhones.sort((a, b) => a.price - b.price);

console.log(mobilePhones);

let sum = 0;

for (let i = 0; i < mobilePhones.length; i++) {
  sum += mobilePhones[i].price;
}

console.log(sum, "sum");
