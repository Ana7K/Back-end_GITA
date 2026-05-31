// 1) შექმენი Triangle (სამკუთხედი) კლასი, რომელიც იღებს სამ გვერდს (a, b, c) და დაამატე მეთოდები: getPerimeter(), getArea() , isRightTriangle().
class Triangle {
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
  }

  getPerimeter() {
    return this.a + this.b + this.c;
  }
  getArea() {
    let p = this.getPerimeter() / 2;
    return Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
  }
  isRightTriangle() {
    if (this.a * this.a + this.b * this.b == this.c * this.c) {
      return "triangle is right angled";
    }
  }
}

let triangle = new Triangle(3, 4, 5);

console.log("Perimeter:", triangle.getPerimeter()); // 12
console.log("Area:", triangle.getArea()); // 6
console.log("Right triangle:", triangle.isRightTriangle()); // true
console.log("--------------------------------------------");

// 2) შექმენი Smartphone (სმარტფონი) კლასი property-ებით: brand, model, releaseYear. გააკეთე ექსტენშენი GamingPhone,
// რომელსაც დაემატება gpuScore და batteryCapacity, და დაამატე მეთოდი performanceIndex().
class Smartphone {
  constructor(brand, model, releaseYear) {
    this.brand = brand;
    this.model = model;
    this.releaseYear = releaseYear;
  }
}

class GamingPhone extends Smartphone {
  constructor(brand, model, releaseYear, gpuScore, batteryCapacity) {
    super(brand, model, releaseYear);
    this.gpuScore = gpuScore;
    this.batteryCapacity = batteryCapacity;
  }

  performanceIndex() {
    return this.gpuScore + this.batteryCapacity;
  }
}

let phone = new GamingPhone("Asus", "Phone", 2025, 9500, 6000);
console.log(phone.performanceIndex(), "- performance index");
console.log("--------------------------------------------");

// 3)შექმენი CryptoWallet (კრიპტო საფულე) კლასი, მეთოდებით: deposit(), withdraw(), transfer(), getHistory(),
//🥲
class CryptoWallet {
  constructor(owner, balance = 0) {
    this.owner = owner;
    this.balance = balance;
    this.history = [];
  }

  deposit(amount) {
    this.balance += amount;
    this.history.push(`Deposited: ${amount}`);
  }
  withdraw(amount) {
    if (amount > this.balance) {
      return "არასაკმარისი თანხა";
    }
    this.balance -= amount;
    this.history.push(`Withdrawn: ${amount}`);
  }
  transfer(receiver, amount) {
    if (amount > this.balance) {
      return "არასაკმარისი თანხა";
    }

    this.balance -= amount;
    receiver.balance += amount;

    this.history.push(`Transferred ${amount} to ${receiver.owner}`);
    receiver.history.push(`Received ${amount} from ${this.owner}`);
  }
  getHistory() {
    return this.history;
  }
}

let wallet1 = new CryptoWallet("Ana", 1000);
let wallet2 = new CryptoWallet("Nino", 800);

wallet1.deposit(200);
wallet1.withdraw(100);
wallet1.transfer(wallet2, 300);

console.log(wallet1.balance, "I balance");
console.log(wallet2.balance, "II balance");

console.log(wallet1.getHistory());
console.log(wallet2.getHistory());
console.log("--------------------------------------------");

// 4)შექმენი Wishlist (სურვილების სია) კლასი, რომელიც ინახავს ნივთებს. მეთოდები: addItem(), deleteItem(id), updateItem()
class Wishlist {
  constructor() {
    this.items = [];
  }

  addItem(item) {
    this.items.push(item);
  }
  deleteItem(id) {
    this.items = this.items.filter((item) => item.id !== id);
  }
  updateItem(id, newData) {
    this.items = this.items.map((item) => {
      if (item.id === id) {
        return { ...item, ...newData };
      }
      return item;
    });
  }
}

let wishlist = new Wishlist();

wishlist.addItem({ id: 1, name: "iPhone 11" });
wishlist.addItem({ id: 2, name: "MacBook" });

wishlist.updateItem(1, { name: "iPhone 18" });
wishlist.deleteItem(2);

console.log("Wishlist:\n\n", wishlist.items);
console.log("--------------------------------------------");

// 5)შექმენი Freelancer (ფრილანსერი) კლასი მეთოდით calculateEarnings(), რომელიც დათვლის შემოსავალს შესრულებული საათებისა
// და საათობრივი ტარიფის მიხედვით, დამატებით optional bonus-ს გადამეტებულ საათებზე (მაგ >160 სთ).
class Freelancer {
  constructor(hourlyRate, hoursWorked, bonusPerHour = 0) {
    this.hourlyRate = hourlyRate;
    this.hoursWorked = hoursWorked;
    this.bonusPerHour = bonusPerHour;
  }

  calculateEarnings() {
    let paycheck = this.hourlyRate * this.hoursWorked;

    if (this.hoursWorked > 160) {
      let extraHours = this.hoursWorked - 160;
      paycheck += extraHours * this.bonusPerHour;
    }
    return paycheck;
  }
}

let freelancer = new Freelancer(15, 161, 5);
console.log(freelancer.calculateEarnings(), "- earned");
