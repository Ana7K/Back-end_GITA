// let numsArr = [1,2,3,4]

// let sum = numsArr.reduce((tot,curr) =>tot + curr ,0)

// console.log(sum)


// let numsArr = [1, 2, 3, 4];
// let sum = 0;
// for (let i = 0; i < numsArr.length; i++) {
//   sum += numsArr[i];
// }
// console.log(sum); // 10


// main()

// function main(name="giorgi"){
//     console.log(`hello ${name}`)
// }


// const main2 = (name="giorgi") => {
//     console.log(`hello ${name}`)
// }

// main2()


// 1.გააორმაგე თითოეული ელემენტი მასივში
// 2.ამოიღე ლუწი რიცხვები მასივიდან
// 3.მოცემული სტრინგების მასივიდან ამოიღე სტრინგები, რომლებსაც აქვთ 5-ზე მეტი სიმბოლო და გააერთიანე დარჩენილი სტრინგები ერთ სტრინგად # ნიშნით გამოყოფით
// 4.გაამრავლე ყველა ელემენტი მასივში 2-ზე და შემდეგ ამოიღე რიცხვები, რომლებიც იყოფა 3-ზე
// 5.დააბრუნე ყველა დადებითი რიცხვის ჯამი
// 6.მოცემული სტრინგების მასივიდან წაშალე თითოეული სტრინგის ბოლო სიმბოლო
// 7.შექმენი ფუნქცია, რომელიც დააბრუნებს ორ ყველაზე მცირე დადებით რიცხვზე ჯამს
// * მაგ: [19, 5, 42, 2, 77] → 7


// // 1.გააორმაგე თითოეული ელემენტი მასივში
// //for loop
// let numsArr = [1, 2, 3, 4];
// let doubledArr = [];
// for (let i = 0; i < numsArr.length; i++) {
//   doubledArr.push(numsArr[i] * 2);
// }
// console.log(doubledArr); // [2, 4, 6, 8]

// //map

// let arr = [1,2,3,4,5]
// let mappedArr = arr.map((el) => el * 2)
// console.log(mappedArr)



// 2.ამოიღე ლუწი რიცხვები მასივიდან

// let numbers = [1, 2, 3, 4, 5, 6];
// let oddNumbers = [];

// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] % 2 === 0) {
//     oddNumbers.push(numbers[i]);
//   }
// }

// console.log(oddNumbers); // [1, 3, 5]


// let numbers = [1, 2, 3, 4, 5, 6];

// let evens = numbers.filter((el) => el %2 === 0)

// console.log(evens)


// 3.მოცემული სტრინგების მასივიდან ამოიღე სტრინგები
// , რომლებსაც აქვთ 5-ზე მეტი სიმბოლო და გააერთიანე დარჩენილი 
// სტრინგები ერთ სტრინგად # ნიშნით გამოყოფით

// let words = ["cat", "house", "sun", "apple", "hi", "school"];
// let filteredWords = [];

// for (let i = 0; i < words.length; i++) {
//   if (words[i].length <= 5) {
//     filteredWords.push(words[i]);
//   }
// }

// let result = filteredWords.join("#");
// console.log(result); // cat#house#sun#apple#hi


// let strArr = ["cat", "house", "sun", "apple", "hi", "school","giorgiii","tornikee"];
// let filterdArr = strArr.filter((el) => el.length > 5).join("#")
// console.log(filterdArr)

// 4.გაამრავლე ყველა ელემენტი მასივში 2-ზე და შემდეგ ამოიღე რიცხვები, რომლებიც იყოფა 3-ზე
// for loop
// let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let multiplied = [];
// let finalNumbers = [];

// for (let i = 0; i < nums.length; i++) {
//   multiplied.push(nums[i] * 2);
// }

// for (let i = 0; i < multiplied.length; i++) {
//   if (multiplied[i] % 3 !== 0) {
//     finalNumbers.push(multiplied[i]);
//   }
// }

// console.log(finalNumbers); // [2, 4, 8, 10, 14, 16]

// let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// // let mappedArr = nums.map((el) => el * 2)
// let mappedArr = nums.map((el) => el * 2).filter((el) => el % 3 === 0)

// console.log(mappedArr)



// // 5.დააბრუნე ყველა დადებითი რიცხვის ჯამი
// // for loop
// let values = [-5, 10, -3, 7, 0, 12, -1];
// // let positiveSum = 0;

// // for (let i = 0; i < values.length; i++) {
// //   if (values[i] > 0) {
// //     positiveSum += values[i];
// //   }
// // }

// // console.log(positiveSum); // 29


// let filteredArr = values.filter((el) => el > 0).reduce((tot,curr) => tot + curr,0)

// console.log(filteredArr)


// 6.მოცემული სტრინგების მასივიდან წაშალე თითოეული სტრინგის ბოლო სიმბოლო

// let strings = ["hello", "world", "javascript", "code"];
// let trimmedStrings = [];

// for (let i = 0; i < strings.length; i++) {
//   trimmedStrings.push(strings[i].slice(0, strings[i].length - 1));
// }

// console.log(trimmedStrings); // ["hell", "worl", "javascrip", "cod"]

// let strings = ["hello", "world", "javascript", "code"];
// let deletechar = strings.map((el) =>el.slice(0,-1))
// console.log(deletechar)

// 7.შექმენი ფუნქცია, რომელიც დააბრუნებს ორ ყველაზე მცირე დადებით რიცხის ჯამს
// * მაგ: [19, 5, 42, 2, 77] → 7

// function sumTwoSmallestPositiveNumbers(numbers) {
//   let min1 = Infinity;
//   let min2 = Infinity;

//   for (let i = 0; i < numbers.length; i++) {
//     let current = numbers[i];

//     if (current > 0) {
//       if (current < min1) {
//         min2 = min1;
//         min1 = current;
//       } else if (current < min2) {
//         min2 = current;
//       }
//     }
//   }

//   return min1 + min2;
// }

// console.log(sumTwoSmallestPositiveNumbers([19, 5, 42, 2, 77])); // 7



// let numsArr = [19, 5, 42, 2, 77,-10,-20]

// // let sortedNums = numsArr.sort((a,b) => a-b).slice(0,2).reduce((tot,curr) => tot+curr,0)
// let sum = numsArr.filter((el) => el >0).sort((a,b) => a-b).slice(0,2).reduce((tot,curr) => tot+curr,0)
// console.log(sum)
// console.log(sortedNums[0] + sortedNums[1])

// console.log(sortedNums)


// let arr = [
//     {
//         category:"iphone",
//         price:2000
//     },
//     {
//         category:"samsung",
//         price:2500
//     },
//     {
//         category:"nokia",
//         price:1700
//     },
//     {
//         category:"iphone",
//         price:2000
//     },
//     {
//         category:"nokia",
//         price:2000
//     },
// ]

// let grouped = arr.reduce((tot,curr) => {
//     let price = curr.price
//     if(!tot[price]) tot[price] = []
//     tot[price].push(curr)
//     return tot
// },{})

// console.log(grouped)


//str
//num
//arr
//obj

// let str = "asdad asd sad as das d nika [] {} () => {}"
// let arr = [1,"nika",null]



// let person = {
//     name:"გიორგი",
//     lastName:"ბაჩიძე",
//     age:22,
//     address:"დოლიძე"
// }

// console.log(person)


//1) ამოღება

// let person = {
//     name:"გიორგი",
//     lastName:"ბაჩიძე",
//     age:22,
//     address:"დოლიძე"
// }

// console.log(person.name,"სახელი")
// console.log(person.lastName,"გვარი")
// console.log(person.age,"ასაკი")
// console.log(person.address,"მისამართი")

// console.log(person["age"],"სახელი")
// console.log(person["lastName"],"გვარი")
// console.log(person["name"],"სახელი")
// console.log(person["address"],"მოსამრთი")


//2)დამატება

// let person = {
//     name:"nika",
//     lastName:"nikadze",
//     age:22,
//     address:"paliashvili"
// }

// // person.name = "lika" გადაწერა

// person.isSmoker = true
// person["isMerried"] = false
// console.log(person.isMerried)
// console.log(person.isSmoker)

//3)წაშლა 

// let person = {
//     name:"nika",
//     lastName:"nikadze",
//     age:22,
//     address:"paliashvili"
// }

// person.isSmoker = true
// person["isMerried"] = false

// delete person.address
// delete person.isMerried
// delete person.name

// console.log(person)


//4)გადაწერა

// let person = {
//     name:"nika",
//     lastName:"nikadze",
//     age:22,
//     address:"paliashvili"
// }

// person.name = "mariami"
// person.lastName = "chavchavadze"
// person.age = 34

// console.log(person)

//5)გაყინვა

// let person = {
//     name:"nika",
//     lastName:"nikadze",
//     age:22,
//     address:"paliashvili"
// }

// Object.freeze(person)  // -> გაყინვა

// person.name = "mariami"
// person.lastName = "chavchavadze"
// person.age = 34

// person.isSmoker=  "true"



//6)დესტრუქტურიზაცია

// let str = "hello nika"
// let splitedArr = str.split(" ")
// console.log(splitedArr)
// let [w1,w2] = splitedArr

// console.log(w1)
// console.log(w2)

// let person = {
//     name:"giorgi",
//     lastName:"giorgadze",
//     age:22,
//     cars:["bugatti","bmw","mercedes"],
//     numbers:[1,2,3,4,5],
//     hello:function(name="nika"){
//         console.log(`hello ${name}`)
//     }
// }

// let {name,lastName,age,cars,numbers,hello} = person

// console.log(name,"name")
// console.log(lastName,"lastname")
// console.log(age,"age")
// console.log(cars,"cars")
// console.log(numbers,"numbers")
// hello()


// let slicedArr = cars.map((el) => el.slice(1))
// console.log(slicedArr)
// let mappedArr = numbers.map((el) => el*el).reduce((tot,curr) => tot+curr,0)
// console.log(mappedArr)
// let filteredArr = numbers.filter((el) => el > 4)
// console.log(filteredArr)


//7)მეთოდები

// let person = {
//     name:"giorgi",
//     lastName:"giorgadze",
//     age:22,
//     cars:["bugatti","bmw","mercedes"],
//     numbers:[1,2,3,4,5],
//     hello:function(name="nika"){
//         console.log(`hello ${name}`)
//     }
// }

// // console.log(Object.keys(person))
// // console.log(Object.values(person))
// console.log(Object.entries(person))

// let arr = [
//     [ 'name', 'giorgi' ],
//     [ 'lastName', 'giorgadze' ],
//     [ 'age', 22 ],
//     [ 'cars', [ 'bugatti', 'bmw', 'mercedes' ] ],
//     [ 'numbers', [ 1, 2, 3, 4, 5 ] ],
//   ]

//   console.log(Object.fromEntries(arr))


//8) კალკულატორი


// let calculator = {
//     value:0,
//     add:function(num){
//         this.value += num
//         return this
//     },
//     sub:function(num){
//         this.value -= num
//         return this
//     },
//     answer:function(){
//         console.log(this.value)
//     }
// }

// calculator.add(100).sub(40).answer()

// // calculator.add(100)
// // calculator.sub(40)
// // calculator.answer()


//9) hasOwnProperty

// let person = {
//     name:"giorgi",
//     lastName:"giorgadze",
//     age:22,
//     cars:["bugatti","bmw","mercedes"],
//     numbers:[1,2,3,4,5],
//     hello:function(name="nika"){
//         console.log(`hello ${name}`)
//     }
// }
// console.log(person.hasOwnProperty("nameasdas"))

//10) spread

// let arr1 = [1,2]
// let arr2 = [3,4]
// let all = [...arr1,...arr2]
// console.log(all)

// let a = {
//     a:10
// }

// let b = {
//     b:20
// }
// let c = {...a,...b}
// console.log(c)

// let a = {
//     a:10
// }

// let b = {
//      b:10
// }

// console.log(a === b)


// let a = {
//     a:10
// }

// let b = a

// console.log(a === b)


//11)for in

let person = {
    name:"giorgi",
    lastName:"giorgadze",
    age:22,
    cars:["bugatti","bmw","mercedes"],
    numbers:[1,2,3,4,5],
    hello:function(name="nika"){
        console.log(`hello ${name}`)
    }
}


// for(let keys in person){
//     console.log(keys)
// }


// for(let values in person){
//     console.log(person[values],"values")
// }

for(let value in person){
    if(typeof person[value] !== "string") delete person[value]
}
console.log(person)