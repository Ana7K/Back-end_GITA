// 1 შექმენი წრის ობიექტი, რომელიც მიიღებს რადიუსს და ექნება getArea მეთოდი

// let radiusObj = {
//     getArea : function(r){
//
//     }
// }

// 2 შექმენი ობიექტების მასივი და კონსოლში დაბეჭდე მხოლოდ მათი სახელები
// const people = [
// { name: "Giorgi", age: 21 },
// { name: "Nika", age: 19 },
// { name: "Mariam", age: 25 },
// { name: "Lika", age: 30 },
// ];

// 3 შექმენი ობიექტების მასივი, გაფილტრე ისინი 20$-ზე მეტ ფასზე და დათვალე ჯამი
// const products = [
// { title: "Mouse", price: 15 },
// { title: "Keyboard", price: 45 },
// { title: "USB Cable", price: 7 },
// { title: "Headphones", price: 29.9 },
// { title: "Webcam", price: 52 },
// ];

// 4 გაქვს ობიექტების მასივი, სადაც თითოეულს აქვს year, დაალაგე კლებადობით
// const movies = [
// { title: "Inception", year: 2010 },
// { title: "Interstellar", year: 2014 },
// { title: "Memento", year: 2000 },
// { title: "Tenet", year: 2020 },
// ];

// 5 გაქვს ლეპტოპების მასივი, იპოვე ყველაზე ძვირი და გამოიტანე კონსოლში
// const laptops = [
// { model: "Dell XPS 13", price: 1800 },
// { model: "MacBook Pro 14", price: 2499 },
// { model: "Lenovo ThinkPad X1", price: 2100 },
// { model: "Asus Zephyrus G14", price: 1999 },
// ];

// 6 შექმენი მანქანის ობიექტი, რომელსაც ექნება მარკა, მოდელი და გამოშვების წელი, დაამატე მეთოდი, რომელიც დააბრუნებს მანქანის სრულ აღწერას\

// 1 შექმენი წრის ობიექტი, რომელიც მიიღებს რადიუსს და ექნება getArea მეთოდი

// let radiusObj = {
//     getArea : function(r){
//
//     }
// }

// let radiusObj = {
//   getArea: function (r) {
//     let p = 3.14159;
//     let fixed = p.toFixed(2)
//     return fixed * r * r;
//   },
//   name:"giorgi",
//   age:22
// };
// console.log(radiusObj.getArea(2))
// console.log(radiusObj.name)
// console.log(radiusObj.age)

// 2 შექმენი ობიექტების მასივი და კონსოლში დაბეჭდე მხოლოდ მათი სახელები

// const people = [
// { name: "Giorgi", age: 21 },
// { name: "Nika", age: 19 },
// { name: "Mariam", age: 25 },
// { name: "Lika", age: 30 },
// ];

// people.forEach((el) => {
//     console.log(el.name)
// })

// const names = people.reduce((tot,curr) => {
//     tot.push(curr.name)
//     return tot
// },[])

// console.log(names)

// const sumofAge = people.reduce((tot,curr)=> tot + curr.age,0)
// console.log(sumofAge)

// 3 შექმენი ობიექტების მასივი, გაფილტრე ისინი 20$-ზე მეტ ფასზე და დათვალე ჯამი

// const products = [
//   { title: "Mouse", price: 15 },
//   { title: "Keyboard", price: 45 },
//   { title: "USB Cable", price: 7 },
//   { title: "Headphones", price: 29.9 },
//   { title: "Webcam", price: 52 },
// ];

// // let filteredProducts = products.filter((el) => el.price > 20).reduce((tot,curr)=>tot + curr.price,0)
// // console.log(filteredProducts)

// // const total = products.reduce((tot,curr)=> {
// //     if(curr.price > 20){
// //         return tot + curr.price
// //     }
// //     return tot
// // },0)

// // console.log(total)

// const total = products.reduce((tot, curr) => {
//   return curr.price > 20 ? tot + curr.price : tot;
// }, 0);

// console.log(total);



// // 4 გაქვს ობიექტების მასივი, სადაც თითოეულს აქვს year, დაალაგე კლებადობით
// const movies = [
// { title: "Inception", year: 2010 },
// { title: "Interstellar", year: 2014 },
// { title: "Memento", year: 2000 },
// { title: "Tenet", year: 2020 },
// ];

// // let sortedMovies = movies.sort((a,b)=> a.year - b.year) ზრდადობით
// // let sortedMovies = movies.sort((a,b)=> b.year - a.year) კლებადობით

// console.log(sortedMovies)


// 5 გაქვს ლეპტოპების მასივი, იპოვე ყველაზე ძვირი და გამოიტანე კონსოლში
// const laptops = [
// { model: "Dell XPS 13", price: 1800 },
// { model: "MacBook Pro 14", price: 2499 },
// { model: "Lenovo ThinkPad X1", price: 2100 },
// { model: "Asus Zephyrus G14", price: 1999 },
// ];

// let sortedLaptops = laptops.sort((a,b) => a.price - b.price)
// let mostExpensive = sortedLaptops[sortedLaptops.length - 1]
// console.log(mostExpensive)


// 6 შექმენი მანქანის ობიექტი, რომელსაც ექნება მარკა, მოდელი და გამოშვების წელი, დაამატე მეთოდი, რომელიც დააბრუნებს მანქანის სრულ აღწერას\

// let carObj = {
//     mark:"toyota",
//     model:"Supra MK4",
//     year:2001,
//     fullDescription: function(){
//         console.log(`mark:${this.mark} model:${this.model} year:${this.year}`)
//     }
// }

// carObj.fullDescription()


//1) primitves/non primitives + run time

// let obj = {
//     name:"giorgi",
//     age:11
// }

// obj.name= "luka"

// console.log(obj.name)

// let firstName = "nika"

// firstName[0] = "l"

// console.log(firstName)

// let name = 10
// console.log(name)

// console.log(3)
// console.log(1)
// console.log(2)

// function one(){
//     console.log(1)
//     two()
// }

// function two(){
//     console.log(2)
//     three()
// }

// function three(){
//     console.log(3)
// }

// one()

// function one(){ ესეთი რაღაც არ გააკეთოთ
//     one()
// }

// one()


//4)callback

// function greeting(name,callback){
//     console.log(`hello ${name}`)
//     callback()
// }

// function callbkacFN(){
//     console.log("nice to meet you")
// }

// greeting("nika",callbkacFN)


// console.log("შესრულებას სჭირდება 4 საათი")
// console.log("ამას სჭირდება 1 წამი")


// console.time()
// for(let i = 0;i<10000000000;i++){

// }

// console.timeEnd()

// console.log("hello")


// setTimeout(() => {
//     console.log(1)
// },5000)

// console.log("hello")

// setTimeout(() => {
//     for(let i = 0;i<10000000000;i++){

//     }
    
// }, 1000);

// console.log("hello")


// setTimeout(() => {
//     console.log("ჩაქაფული")
// },5000)

// console.log("კვერცხი")

// let timer = 0
// let interval = setInterval(() => {
//     console.log(timer)
//     timer++
//     if(timer > 3){
//         clearInterval(interval)
//     }
// }, 1000);

//7)fetch

// async function fetchaAPI(API){
//     let res = await fetch(API)
//     let data = await res.json()
//     let slicedArr = data.slice(0,-5)
//     console.log(sl)
// }

// fetchaAPI("https://jsonplaceholder.typicode.com/users")



// function fetchAPI(API){
//     fetch(API).then(res => res.json()).then(data => console.log(data)).catch((error) => {
//         console.log(error,"error")
//     })
// }


// fetchAPI("https://jsonplaceholder.typicode.com/users")