// 1. დაწერ 2 ფრომისი და გაჰენდლე ისინი then/catch -ით
// 2. გაქვს 2 API შენი მიზანია გაიგო რომელი უფრო სწრაფად აბრუნებს პასუხს  let api1 = https://jsonplaceholder.typicode.com/users let api2 = https://jsonplaceholder.typicode.com/posts 
// 3. დაწერ 2 ფრომისი და გამოიყენე მეთოდები როგორიცაა all,allsetteld,race,any
// 4. დაწერე 4 ფრომისი და დააბრუნე მარტო ისინი რომელიც დარესოლვდება
// 5. დაწერე 4 ფრომისი და დააბრუნე მარტო ისინი რომელიც დარეჯექთდება
//  6. function block(){
//     for(let i = 1 ;i <10000000000;i++){}
// }


// console.log("one")
// block()
// console.log("two")
// იპოვე გამოსავალი როგორ შეიძლება გაეშვას ჯერ  console.log("one") console.log("two") შემდეგ ფუნქცია
// აუცილებელია გამოიყენო ფრომისი



// 1. დაწერ 2 ფრომისი და გაჰენდლე ისინი then/catch -ით

// let myPromise = new Promise((res,rej) => {
//     res("hello")
// })

// let myPromise2 = new Promise((res,rej) => {
//     rej("world")
// })

// myPromise.then((res) => {
//     console.log(res)
// })

// myPromise2.then((res) => console.log(res)).catch((error) => {
//     console.log(error,"error")
// })



// 2. გაქვს 2 API შენი მიზანია გაიგო რომელი უფრო სწრაფად აბრუნებს პასუხს 
//  let api1 = https://jsonplaceholder.typicode.com/users 
//  let api2 = https://jsonplaceholder.typicode.com/posts 


// async function FetchUsers() {
//     let res = await fetch("https://jsonplaceholder.typicode.com/users")
//     let data = await res.json()
//     return data[0]
// }

// async function FetchPosts(){
//     let res = await fetch("https://jsonplaceholder.typicode.com/posts")
//     let data = await res.json()
//     return data[0]
// }

// Promise.race([FetchPosts(),FetchUsers()]).then(res => console.log(res))




// 3. დაწერ 2 ფრომისი და გამოიყენე მეთოდები როგორიცაა all,allsetteld,race,any

// let myPromise = new Promise((res,rej) => {
//      res(1)
// })

// let myPromise2 = new Promise((res,rej) => {
//     rej(2)
// })


// let myPromise3 = new Promise((res,rej) => {
//     res(3)
// })

// let myPromise4 = new Promise((res,rej) => {
//     rej(4)
// })


// // Promise.all([myPromise,myPromise2,myPromise3]).then(([one,two,three]) => console.log(one,two,three))
// // Promise.all([myPromise,myPromise2,myPromise3]).then(res => console.log(res))
// //  Promise.race([myPromise2,myPromise,myPromise3]).then(res => console.log(res))
// // Promise.any([myPromise,myPromise2,myPromise3]).then(res => console.log(res))

// Promise.allSettled([myPromise,myPromise2,myPromise3,myPromise4]).then(res => {
//     let filteredArr = res.filter(el => el.status === "rejected")
//     console.log(filteredArr)
// })



//  6. function block(){
//     for(let i = 1 ;i <10000000000;i++){}
// }


// console.log("one")
// block()
// console.log("two")
// იპოვე გამოსავალი როგორ შეიძლება გაეშვას ჯერ  console.log("one") console.log("two") შემდეგ ფუნქცია
// აუცილებელია გამოიყენო ფრომისი

// let myPromise = new Promise((res,rej) => {
//     res("helsadasda")
// })

// function block(){
//     for(let i = 0;i<10000000000;i++){}
// }


// console.log(1)
// myPromise.then(res => {
//     block()
// })
// console.log(2)

//1) default syntax
// class DefaultClass{
//     name = "girogi"
//     lastName = "chavchavdze"
//     age = 10
// }

// let person = new DefaultClass
// let person2 = new DefaultClass

// console.log(person)
// console.log(person2)
// console.log(person.name,"name")
// console.log(person.age,"age")
// console.log(person.lastName,"lastName")

//2)კონსტრუქტორი = დინამიურობას

// function greeting(name,age,lastname){
//     console.log(`hello ${name} ${age} ${lastname}`)
// }

// greeting("გიორგი")
// greeting("ნიკა")
// greeting("მარიამი")

// class DefaultClass{
//     constructor(name,lastName,age){
//         this.name = name
//         this.lastName = lastName
//         this.age = age
//     }

//     getInfo(){
//         console.log(`i am ${this.name} last name is ${this.lastName} ${this.age} years old`)
//     }
// }

// let person = new DefaultClass("giorgi","giorgadze",22)
// // let person2 = new DefaultClass("nika","niakdze",11)
// // let person3 = new DefaultClass("test","test",44)

// // console.log(person,"person 1")
// // console.log(person2,"person 2")
// // console.log(person3, "test")

// person.getInfo()

//3) მემკვიდრეობა

// class Animal{
//     #age
//     #name
//     #color
//     constructor(name,age,color){
//         this.name = name
//         this.age = age
//         this.color =color
//     }
// }


// class Dog extends Animal{
//     constructor(name,age,color,legs){
//         super(name,age,color)
//         this.legs = legs
//     }
// }

// class Fish extends Animal{
//     constructor(name,age,color,fin){
//      super(name,age,color)
//      this.fin = fin
//     }
// }

// let doginstance = new Dog("max",3,"black",4)
// let fishinstance = new Fish("nemo",2,"black and red",8)
// console.log(doginstance)
// console.log(fishinstance)


//4)calc

// class Calculator{
//     constructor(initialValue){
//         this.initialValue = initialValue
//     }

//     add(num){
//         this.initialValue += num
//         return this
//     }

//     sub(num){
//         this.initialValue -= num
//         return this
//     }

//     div(num){
//         this.initialValue /=num
//         return this
//     }

//     mult(num){
//         this.initialValue *= num
//         return this
//     }

//     getInfo(){
//         console.log(this.initialValue)
//     }
// }

// let calcainstance = new Calculator(10)

// calcainstance.add(10).sub(5).div(2).mult(3).getInfo()
// // calcainstance.sub(5)
// calcainstance.div(2)
// calcainstance.mult(3)

// calcainstance.getInfo()



// 1.შექმენი Rectangle (მართკუთხედი) კლასი, რომელიც იღებს სიგანეს და სიმაღლეს, და დაამატე შემდეგი მეთოდები: getArea(), getPerimeter(), isSquare().

// 2. შექმენი Circle (წრე) კლასი, რომელსაც ექნება მეთოდი, რომლითაც რადიუსის მიხედვით ფართობს დაითვლის.

// 3. შექმენი Car (მანქანა) კლასი, რომელსაც ექნება property-ები: make, model, year. შემდეგ შექმენი მისი ექსტენშენი (მაგალითად ElectricCar), რომელსაც დაემატება batteryLevel.

// class Rectangle{
//     constructor(width,height){
//         this.width = width
//         this.height = height
//     }

//     getArea(){
//         console.log(this.width * this.height)
//     }

//     getPerimeter(){
//         console.log(2 * (this.width + this.height))
//     }
//     isSquare(){
//         if(this.height === this.width){
//             return true
//         }else{
//             return false
//         }
//     }
// }

// let rectangeleinstance = new Rectangle(30,30)

// // rectangeleinstance.getArea()
// // rectangeleinstance.getPerimeter()

// console.log(rectangeleinstance.isSquare())


// 2. შექმენი Circle (წრე) კლასი, რომელსაც ექნება მეთოდი, რომლითაც რადიუსის მიხედვით ფართობს დაითვლის.


// class Circle{
//     constructor(r){
//         this.radius = r
//     }
//     getArea(){
//         return Math.PI * this.radius * this.radius
//     }
// }

// let circleinstance = new Circle(10)

// console.log(circleinstance.getArea())



// 3. შექმენი Car (მანქანა) კლასი, რომელსაც ექნება property-ები: make, model, year. შემდეგ შექმენი მისი ექსტენშენი (მაგალითად ElectricCar), რომელსაც დაემატება batteryLevel.


// class Car{
//     constructor(make, model, year){
//         this.make = make
//         this.model = model
//         this.year = year
//     }
// }

// class ElectricCar extends Car{
//     constructor(make, model, year,batteryLevel){
//         super(make, model, year)
//         this.batteryLevel = batteryLevel
//     }
// }

// let carinstance = new Car("toyota","supra mk4",2001)
// console.log(carinstance)
// let electroisntance = new ElectricCar("byd","model2",2024,"99%")
// console.log(electroisntance)