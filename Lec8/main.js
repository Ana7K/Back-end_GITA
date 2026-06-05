// String

// 1. let str = “javascript” შენი მიზანია ამოიღო ბოლო ასო
let str = "javascript";
console.log(str[str.length - 1]);
// 2. let text = "Hello world" ამოჭერი მხოლოდ world
let text = "Hello world";
console.log(text.split(" ")[1]);
// 3. let name = "gio”  გადაიყვანე დიდ ასოებში
let firstName = "gio";
console.log(firstName.toUpperCase());
// 4. let first = "Hello" let second = "World” გააერთიანე ეს ორი სტრინგი
let first = "Hello";
let second = "World";
console.log(`${first} ${second}`);
// 5. let str  = "   I love js js js   " შენი მიზანია წაშალო თავში და ბოლოში სფეისები da js ჩაანაცვლო javascript-ით
let str2 = "   I love js js js   ";
console.log(str2.trim().replace("js", "javascript"));

// Arr

// 1. let nums = [1, 2, 3, 4, 5] იპოვე ჯამი
let nums = [1, 2, 3, 4, 5];
let sum = nums.reduce((acc, curr) => acc + curr, 0);
console.log(sum);

// 2. let arr = [1,2,2,3,4,4,5] დააბრუნე მხოლოდ უნიკლალურები Set ის დახმარებით
let arr = [1, 2, 2, 3, 4, 4, 5];
let unique = [...new Set(arr)];
console.log(unique);

// 3. იპოვე სტუდენტი სახელად ნიკა
let students = [
  { name: "Giorgi", age: 20 },
  { name: "Nika", age: 22 },
  { name: "Ana", age: 19 },
];
let nika = students.find((student) => student.name === "Nika");
console.log(nika);

// 4. დაალაგე სტუდენტები ასაკის მიხედვით
let people = [
  { name: "Gio", age: 30 },
  { name: "Luka", age: 25 },
  { name: "Ana", age: 28 },
];
let sortedPeople = people.sort((a, b) => a.age - b.age);
console.log(sortedPeople);

// 5.  let sentence = "apple orange apple banana apple orange kiwi" შენი მიზანია ეს სტრინგი გადააქციო მასივად და რედიუსის დახმარებით  დათავლო თითოეული ხილი რამდენჯერ მეორდება
let sentence = "apple orange apple banana apple orange kiwi";
let arr1 = sentence.split(" ");

// 6. let arr = [[1,[12,46],4,5,6,7]] დაალაგე ზრდის მიხედვით და დათვალე ჯამი
let arr2 = [[1, [12, 46], 4, 5, 6, 7]];
let sortedArr = arr2.flat(Infinity).sort((a, b) => a - b);
let sumArr2 = sortedArr.reduce((acc, curr) => acc + curr, 0);
console.log(sumArr2);

// 7 let arr = [1,20,90,100,3,3] ყველა გადააქციე 1-იანად ანუ უნდა დააბრუნოს [1,1,1,1,1,1]

// 8 let text = "I love JavaScript and I love coding in JavaScript JavaScript";
// შენი მიზანია გაიგო რომელი მეორდება ყველაზე ხშირად
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 4.შექმენი Library (ბიბლიოთეკა) კლასი, რომელიც ინახავს წიგნების სიას (array-ში). დაამატე მეთოდები: addBook(), removeBook(), listBooks().

// 5.შექმენი BankAccount (საბანკო ანგარიში) კლასი, რომელსაც ექნება მეთოდები: deposit(), withDraw(), transferMoney(), transactionHistory(), getBalance().

// 6.შექმენი Employee (თანამშრომელი) კლასი, რომელსაც ექნება მეთოდი calculateSalary(), რომელიც დათვლის ხელფასს სამუშაო საათებისა და საათობრივი ტარიფის მიხედვით.

// 7.შექმენი ShoppingCart (საყიდლების კალათა) კლასი, რომელიც ინახავს ნივთების სიას. დაამატე მეთოდები: addItem(), deleteItem(), updateItem().

// 4.შექმენი Library (ბიბლიოთეკა) კლასი, რომელიც ინახავს წიგნების სიას (array-ში). დაამატე მეთოდები: addBook(), removeBook(), listBooks().

// class Library{
//     constructor(){
//         this.booksArr = []
//     }

//     addBook(book){
//         let lastId = this.booksArr[this.booksArr.length - 1]?.id || 0
//         let newObj = {
//             id:lastId + 1,
//             book
//         }
//         this.booksArr.push(newObj)
//     }

//     removeBook(bookName){
//         this.booksArr = this.booksArr.filter(el => el.book !== bookName)
//     }

//     listBooks(){
//         console.log(this.booksArr)
//     }
// }

// let library = new Library()

// library.addBook("book1")
// library.addBook("book2")
// library.addBook("book3")
// library.removeBook("book2")
// library.listBooks()

// 5.შექმენი BankAccount (საბანკო ანგარიში) კლასი, რომელსაც ექნება მეთოდები: deposit(), withDraw(), transferMoney(), transactionHistory(), getBalance().

// class BankAccount{
//     constructor(initiaValue){
//         this.initiaValue = initiaValue
//         this.hisotry = []
//     }

//     deposit(money){
//         this.initiaValue += money
//         this.hisotry.push({
//             type:"Deposit",
//             amount:money,
//             date:Date()
//         })
//     }

//     withDraw(money){
//         if(money > this.initiaValue){
//             console.log("ar aris sakamrisi tanxa")
//             return
//         }
//         this.initiaValue -= money

//         this.hisotry.push({
//             type:"withDraw",
//             amount:money,
//             date:Date()
//         })
//     }

//     transferMoney(money,toAccount){
//         if(money > this.initiaValue){
//             console.log("ar aris sakamrisi tanxa")
//             return
//         }
//         this.initiaValue -= money
//         this.hisotry.push({
//             type:"money out",
//             amount:money,
//             date:Date()
//         })

//         toAccount.initiaValue += money
//         toAccount.hisotry.push({
//             type:"money in",
//             amount:money,
//             date:Date()
//         })
//     }

//     transactionHistory(){
//         console.log(this.hisotry)
//     }

//     getBalance(){
//         console.log(this.initiaValue)
//     }
// }

// let acc1 = new BankAccount(300)
// let acc2 = new BankAccount(400)

// // acc1.deposit(400)

// acc1.transferMoney(150,acc2)
// acc2.transactionHistory()
// acc2.getBalance()

// 6.შექმენი Employee (თანამშრომელი) კლასი, რომელსაც ექნება მეთოდი calculateSalary(), რომელიც დათვლის ხელფასს სამუშაო საათებისა და საათობრივი ტარიფის მიხედვით.

// class Employee{
//     constructor(name,hourWork,hourRate){
//         this.name = name
//         this.hourWork  = hourWork
//         this.hourRate = hourRate
//     }

//     calculate(){
//         console.log(this.hourWork * this.hourRate)
//     }
// }

// let person = new Employee("nika",9,8)
// person.calculate()

// 7.შექმენი ShoppingCart (საყიდლების კალათა) კლასი, რომელიც ინახავს ნივთების სიას. დაამატე მეთოდები: addItem(), deleteItem(), updateItem().

// class ShoppingCart{
//     constructor(){
//         this.itemList = []
//     }

//     addItem(item){
//         let lastId = this.itemList[this.itemList.length -1]?.id || 0
//         let newObj = {
//             id:lastId + 1,
//             item
//         }
//         this.itemList.push(newObj)
//     }

//     removeitem(item){
//         this.itemList = this.itemList.filter(el => el.item !== item)
//     }

//     update(id,newName){
//         let find = this.itemList.find(el => el.id === id)
//         console.log(find)
//         if(find){
//             find.item = newName
//         }
//     }
// }

// let cart = new ShoppingCart
// cart.addItem("bread")
// cart.addItem("milk")
// cart.addItem("cocacola")
// cart.removeitem("bread")
// cart.update(2,"nika")
// console.log(cart)

// String

// 1. let str = “javascript” შენი მიზანია ამოიღო ბოლო ასო
// 2. let text = "Hello world" ამოჭერი მხოლოდ world
// 3. let name = "gio”  გადაიყვანე დიდ ასოებში
// 4. let first = "Hello" let second = "World” გააერთიანე ეს ორი სტრინგი
// 5. let str  = "   I love js js js   " შენი მიზანია წაშალო თავში და ბოლოში სფეისები da js ჩაანაცვლო javascript-ით

// 1. let str = “javascript” შენი მიზანია ამოიღო ბოლო ასო

// let str = "javascriptasdasdasasdaaaaa"

// let lastChar = str[str.length - 1]
// console.log(lastChar)

// let slicedStr = str.slice(-1)
// console.log(slicedStr)

// let lastChar = str.at(-1)
// console.log(lastChar)

// let hcarAtt= str.charAt(str.length - 1)
// console.log(hcarAtt)

// // 2. let text = "Hello world" ამოჭერი მხოლოდ world
// let text = "Hello world"

// // let secondChar = text.slice(6)
// // console.log(secondChar)

// let splittedText = text.split(" ")
// console.log(splittedText[1])

// 3. let name = "gio”  გადაიყვანე დიდ ასოებში

// let firstName = "gio"

// let uppercase = firstName.toUpperCase()

// console.log(uppercase)

// 4. let first = "Hello" let second = "World” გააერთიანე ეს ორი სტრინგი

// let first = "Hello"
// let second = "World"

// // let megre = first.concat(second)

// // console.log(megre)

// // console.log(first + " " + second)

// console.log(`${first} ${second}`)

// 5. let str  = "   I love js js js   " შენი მიზანია წაშალო თავში და ბოლოში სფეისები da js ჩაანაცვლო javascript-ით

// let str  = "   I love js js js   "
// let trimmedStr = str.trim()
// let replace = trimmedStr.replaceAll("js","javascript")
// console.log(replace)

// 1. let nums = [1, 2, 3, 4, 5] იპოვე ჯამი
// 2. let arr = [1,2,2,3,4,4,5] დააბრუნე მხოლოდ უნიკლალურები Set ის დახმარებით
// 3 let students = [
//   {name: "Giorgi", age: 20},
//   {name: "Nika", age: 22},
//   {name: "Ana", age: 19}
// ]
// იპოვე სტუდენტი სახელად ნიკა
// 4. let people = [
//   {name: "Gio", age: 30},
//   {name: "Luka", age: 25},
//   {name: "Ana", age: 28}
// ]
// დაალაგე სტუდენტები ასაკის მიხედვით
// 5.  let sentence = "apple orange apple banana apple orange kiwi" შენი მიზანია ეს სტრინგი გადააქციო მასივად და რედიუსის დახმარებით  დათავლო თითოეული ხილი რამდენჯერ მეორდება

// 6. let arr = [[1,[12,46],4,5,6,7]] დაალაგე ზრდის მიხედვით და დათვალე ჯამი

// 7 let arr = [1,20,90,100,3,3] ყველა გადააქციე 1-იანად ანუ უნდა დააბრუნოს [1,1,1,1,1,1]

// 8 let text = "I love JavaScript and I love coding in JavaScript JavaScript";
// შენი მიზანია გაიგო რომელი მეორდება ყველაზე ხშირად

// 1. let nums = [1, 2, 3, 4, 5] იპოვე ჯამი

// let nums = [1, 2, 3, 4, 5]

// let sum = nums.reduce((tot,curr)=> tot  +curr,0)

// console.log(sum)

// 2. let arr = [1,2,2,3,4,4,5] დააბრუნე მხოლოდ უნიკლალურები Set ის დახმარებით

// let arr = [1,2,2,3,4,4,5]

// let unique = [...new Set(arr)]
// console.log(unique)

// 3 let students = [
//   {name: "Giorgi", age: 20},
//   {name: "Nika", age: 22},
//   {name: "Ana", age: 19}
// ]
// იპოვე სტუდენტი სახელად ნიკა

// let students = [
//   { name: "Giorgi", age: 20 },
//   { name: "Nika", age: 22 },
//   { name: "Ana", age: 19 },
// ];


// let student = students.find(student => student.name === "Nika")
// console.log(student)


// 4. let people = [
//   {name: "Gio", age: 30},
//   {name: "Luka", age: 25},
//   {name: "Ana", age: 28}
// ]
// დაალაგე სტუდენტები ასაკის მიხედვით

// let people = [
//       {name: "Gio", age: 30},
//       {name: "Luka", age: 25},
//       {name: "Ana", age: 28}
//     ]

//     let sortedStudents = people.sort((a,b) => a.age - b.age)

//     console.log(sortedStudents)


// 5.  let sentence = "apple orange apple banana apple orange kiwi" შენი მიზანია ეს სტრინგი გადააქციო მასივად და რედიუსის დახმარებით  დათავლო თითოეული ხილი რამდენჯერ მეორდება
    // let sentence = "apple orange apple banana apple orange kiwi"
    // let splittedArr = sentence.split(" ")
    // let groupe = splittedArr.reduce((tot,curr)=> {
    //     if(tot[curr]){
    //         tot[curr] += 1
    //     }else{
    //         tot[curr] = 1
    //     }

    //     return tot
    // },{})

    // console.log(groupe)



    // 6. let arr = [[1,[12,46],4,5,6,7]] დაალაგე ზრდის მიხედვით და დათვალე ჯამი


    // let arr = [[1,[12,46],4,5,6,7]] 

    // let flattedArr = arr.flat(Infinity)

    // console.log(flattedArr)


    // 7 let arr = [1,20,90,100,3,3] ყველა გადააქციე 1-იანად ანუ უნდა დააბრუნოს [1,1,1,1,1,1]


    // let arr = [1,20,90,100,3,3]


    // let mappedArr = arr.map(el => el = 1)

    // console.log(mappedArr)


    // 8 let text = "I love JavaScript and I love coding in JavaScript JavaScript";
// შენი მიზანია გაიგო რომელი მეორდება ყველაზე ხშირად


// let text = "I love JavaScript and I love coding in JavaScript JavaScript";

// let splittedText = text.split(" ")

// let grouped = splittedText.reduce((tot,curr)=> {
//     if(tot[curr]){
//         tot[curr] +=1
//     }else{
//         tot[curr] = 1
//     }

//     return tot
// },{})


// let maxCount = 0
// let maxWord = ""

// for(let word in grouped){
//     if(grouped[word] > maxCount){
//         maxCount = grouped[word]
//         maxWord = word
//     }
// }


// console.log(`ყველაზე ხშირად მეორდება სიტყვა ${maxWord} ${maxCount}-ჯერ`)



// 1.let person = {name: "Giorgi", age: 25, city: "Tbilisi"}
// დააკონსოლე ცალკე key-ს  ცალკე value-ს

// 2 let car = {brand: "BMW", model: "X5"} დაამატე year

// 3 let products = [
//   {name:"Phone", price: 1200},
//   {name:"Book", price: 40},
//   {name:"Pen", price: 5}
// ];

// იპოვე ისეთი ობიექტი რომლის ფასიც 40-ია

// 4 შექმენი კალკულატორის ობიექტი სადაც გექნება დამატება წაშლა გაყოფა და გამრავლება



// 1.let person = {name: "Giorgi", age: 25, city: "Tbilisi"}
// დააკონსოლე ცალკე key-ს  ცალკე value-ს

// let person = {name: "Giorgi", age: 25, city: "Tbilisi"}

// console.log(Object.keys(person))
// console.log(Object.values(person))

// for(let keys in person){
//     console.log(keys)
// }

// for(let values in person){
//     console.log(person[values])
// }

// 2 let car = {brand: "BMW", model: "X5"} დაამატე yearx

// let car = {brand: "BMW", model: "X5"}

// car.year = 2005
// console.log(car)



// 3 let products = [
//   {name:"Phone", price: 1200},
//   {name:"Book", price: 40},
//   {name:"Pen", price: 5}
// ];

// იპოვე ისეთი ობიექტი რომლის ფასიც 40-ია


// let products = [
//       {name:"Phone", price: 1200},
//       {name:"Book", price: 40},
//       {name:"Pen", price: 5}
//     ];

//     let price40 = products.find(el => el.price === 40)

//     console.log(price40)

// 4 შექმენი კალკულატორის ობიექტი სადაც გექნება დამატება წაშლა გაყოფა და გამრავლება

// let calculator = {
//     initialValue:0,
//     add(num){
//         this.initialValue += num
//         return this
//     },
//     sub(num){
//         this.initialValue -= num
//         return this
//     },
//     mult(num){
//         this.initialValue *= num
//         return this
//     },
//     div(num){
//         this.initialValue /= num
//         return this
//     }
// }

// let sum = calculator.add(100).sub(20).mult(2).div(2)
// console.log(sum)