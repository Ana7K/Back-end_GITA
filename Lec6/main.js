// 1. დაწერე ფუნქცია , რომელიც არგუმენტად იღებს sec-ს და ითვლის უკუსვლით იქმადე სანამ 0-მდე არ მივა

// 2. დაწერე ფუქნცია ფუქნციას გადააწოდე რიცხვი  და ასევე ლოგე რენდომული რიცხვი იქამდე სანამ ეს გადაცემული და რენდომ რიცხვი არ. დაემთხვევა ერთმამენთს

// 3.და წერე ფუქნცია რომელიც მიიღებს n და callback-ს როცა n > 27-ზე გაუშვი ეს callback-ი რომელიც დააკონსოლებს რომ ეს ნამდვილად მეტია 27-ზე სხვა შემთხვევაში დააკონსოლე რომ n ნაკლებია

// 4.დაწერე ფუქნცია რომელიც პარამეტრად მიიღებს API და დააბრუნებს ამ API-ში მყოფ  4 - users. https://jsonplaceholder.typicode.com/users დაწერე ორივენაირად than/catch & async/await

// 5) დააწყვილე reduce-თი ცალკე ვისი ასაკიც მეტია 10 ზე და ვისი ასაკიც ნაკლებია 20

// let people = [
//   { name: "Giorgi", age: 25 },
//   { name: "Nika", age: 15 },
//   { name: "Mariam", age: 30 },
//   { name: "Luka", age: 18 }
// ];

// 1. დაწერე ფუნქცია , რომელიც არგუმენტად იღებს sec-ს და ითვლის უკუსვლით იქმადე სანამ 0-მდე არ მივა

// function timer(sec){
//     let interval = setInterval(() => {
//         console.log(sec)
//         sec--
//         if(sec < 0){
//             clearInterval(interval)
//         }
//     },1000)
// }

// timer(5)

// 2. დაწერე ფუქნცია ფუქნციას გადააწოდე რიცხვი  და ასევე ლოგე რენდომული რიცხვი იქამდე სანამ ეს გადაცემული და რენდომ რიცხვი არ. დაემთხვევა ერთმამენთს

// function randomCompare(n){
//     let interval = setInterval(() => {
//         let random = Math.floor(Math.random() * 11)
//         console.log(random)
//         if(n === random){
//             clearInterval(interval)
//             console.log("დაემთხვა და გაჩერდა ფუნქცია")
//         }
//     },1000)
// }

// randomCompare(5)

// 3.დაწერე ფუქნცია რომელიც მიიღებს n და callback-ს როცა n > 27-ზე გაუშვი
// ეს callback-ი რომელიც დააკონსოლებს რომ ეს ნამდვილად მეტია 27-ზე სხვა შემთხვევაში დააკონსოლე რომ n ნაკლებია

// function greeting(name,callbakc){
//     console.log(`hello ${name}`)
//     callbakc()
// }

// function giorgi(){
//     console.log("you are welcome")
// }

// greeting("nini",giorgi)
// function foo(n,callback){
//     if(n>27){
//         callback()
//     }else{
//         console.log("n ნაკლებია")
//     }
// }

// function foo2(){
//     console.log("27-ზე მეტია")
// }

// foo(200,foo2)

// 4.დაწერე ფუქნცია რომელიც პარამეტრად მიიღებს API და დააბრუნებს ამ API-ში მყოფ
//  4 - users. https://jsonplaceholder.typicode.com/users დაწერე ორივენაირად than/catch & async/await

// async function fetchAPI(API){
//     let res = await fetch(API)
//     let  data = await res.json()
//     //map
//     // let mappedData = data.map((el) => el.address.street)
//     // console.log(mappedData)
//     //////
//     ///reduce
//     let sum = data.reduce((tot,curr) => tot + curr.id ,0)
//     console.log(sum,"sum")
// }

// fetchAPI("https://jsonplaceholder.typicode.com/users")

// 5) დააწყვილე reduce-თი ცალკე ვისი ასაკიც მეტია 10 ზე და ვისი ასაკიც ნაკლებია 20

// let people = [
//   { name: "Giorgi", age: 25 },
//   { name: "Nika", age: 15 },
//   { name: "Mariam", age: 30 },
//   { name: "Luka", age: 18 }
// ];

// let grouped = people.reduce((tot,curr) => {
//     let age = curr.age
//     if(age>10) tot.moreThanTen++
//     if(age<20) tot.moreThenTwenty++
//     return tot
// },{moreThanTen:0,moreThenTwenty:0})

// console.log(grouped)

// let grouped = people.reduce((tot,curr) => {
//     if(curr.age>10){
//         tot.moreThanTen.push(curr)
//     }
//     if(curr.age<20){
//         tot.moreThenTwenty.push(curr)
//     }
//     return tot
// },{moreThanTen:[],moreThenTwenty:[]})

// console.log(grouped)

// console.time()
// async function fetchAPi(API) {
//     let res =await fetch(API)
//     let data = await res.json()
//     console.log(data[0])
// }

// fetchAPi("https://jsonplaceholder.typicode.com/users")
// console.timeEnd()

//2)settimout,sync,promise

// setTimeout(() => {
//     console.log(1)
// }, 0);

// console.log(2)

// let myPromise = new Promise((res,rej) => {
//     res(3)
// })

// console.log(myPromise)

// let myPromise = new Promise((res,rej) => {
//     setTimeout(() => {
//         res("pirveli promisi")
//     }, 4000);
// })

// let myPromise2 = new Promise((res,rej) => {
//     setTimeout(() => {
//         res("meore promisi")
//     },1000)
// })

// myPromise.then(res => {
//     console.log(res)
//     return myPromise2
// }).then(res => console.log(res))
// myPromise.then(res => console.log(res))
// myPromise2.then(res =>console.log(res))

// let handleProblem = new Promise((res,rej)=>{
//     res("res")
// })
// function block(){
//     for(let i=0;i<10000000000;i++){

//     }
// }
// console.log("one")
// handleProblem.then(res => block())
// console.log("two")

// let myPromise = new Promise((res,rej) => {
//     rej("resolve1")
// })

// let myPromise2 = new Promise((res,rej) => {
//     res("resolve2")
// })

// async function handleProblem() {
//     try {
//         let myPromise1 = await myPromise
//         let myPromise22 = await myPromise2
//         console.log(myPromise1)
//         console.log(myPromise22)
//     } catch (error) {
//         console.log(error,"this promise rejected")
//     }

// }
// handleProblem()

// let myPromise = new Promise((res,rej) => {
//     res("1")
// })

// let myPromise2  = new Promise((res,rej) => {
//     res("2")
// })

// Promise.all([myPromise,myPromise2]).then(res => console.log(res))

// async function fetchUsers() {
//   let res = await fetch("https://jsonplaceholder.typicode.com/users");
//   let data = await res.json();
//   return data[0];
// }

// async function fetchPosts() {
//   let res = await fetch("https://jsonplaceer.typicode.com/posts");
//   let data = await res.json();
//   return data[0];
// }

// // // Promise.all([fetchUsers(), fetchPosts()]).then((res) => console.log(res));

// // Promise.race([fetchUsers(), fetchPosts()]).then((res) => console.log(res));

// Promise.any([fetchUsers(), fetchPosts()]).then((res) => console.log(res));


// let myPromise = new Promise((res,rej) => {
//     res(1)
// })
// let myPromise2 = new Promise((res,rej) => {
//     rej(2)
// })
// let myPromis3 = new Promise((res,rej) => {
//     res(3)
// })
// let myPromise4 = new Promise((res,rej) => {
//     rej(4)
// })
// let myPromise5 = new Promise((res,rej) => {
//     rej(5)
// })

// Promise.allSettled([myPromise,myPromise2,myPromis3,myPromise4,myPromise5]).then(res => {
//     let filterdArr = res.filter((el) => el.status === "rejected")
//     console.log(filterdArr)
// })