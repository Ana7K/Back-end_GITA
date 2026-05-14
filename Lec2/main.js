// 1 - იპოვეთ სტრინგის - პირველი ასო - გაიგე სიგრძე - ბოლო ასო || let fullName = "nika nikadze" ||


// let fullName = "nika nikadzesasdasdasdasdad" 

// console.log(fullName[0])
// console.log(fullName.length)
// console.log(fullName[fullName.length-1])

// fullName[fullName.length-1]


//2 - მოაშორეთ სფეისები - მთლიანი სტრინგი გადაიყვანეთ პატარა ასოებში - მხოლოდ სიტყვა COOL შეცვალეთ Amazing-ით || const topic = " javascript is COOL"

// const topic = " javascript is COOL"
// const task = topic.trim().toLocaleLowerCase().replace("cool","amazing")
// // console.log(topic)
// // console.log(topic.trim())
// // console.log(topic.toLocaleLowerCase())
// // console.log(topic.replace("COOL","Amazing"))
// // console.log(topic.trim().toLocaleLowerCase().replace("cool","amazing"))
// console.log(task)

//3 - მოცემული სტრინგი გადააქციეთ მასივად(მინიშნება - გამოიყენეთ - split(“,”))
//  - უკვე მიღებულ მასივის გადაუარეთ for-ლუპით და დაბეჭდეთ ნუმერაციით
//  (მაგალითად - 1:banana - 2:orange - 3:kiwi) || let fruits = "apple,banana,orange,kiwi” ||

// let fruits = "apple,banana,orange,kiwi"
// let fruitsArr = fruits.split(",")
// // console.log(fruitsArr)

// for(let i = 0; i<fruitsArr.length;i++){
//     // console.log(i)
//     // console.log(fruitsArr[i])
//     console.log(`${i+1}:${fruitsArr[i]}`)
// }



// 4 - გამოიყენეთ ternary operator  - შეინახეთ ასაკი ცვლადში თუ ასაკი მეტია 18 ზე დააკონსოლეთ რომ მართვის მოწმობის აღება შესაძლებელია თუ 
// არადა დააკონსოლეთ რომ მართვის მოწმობას ვერ აიღებთ (მინიშნება. თუ გიორგი უფრო მაღალია ვიდრე 180 სანტიმეტრი ? გიორგი მაღალია : საშუალო სიმაღლისაა) 

// let age = 180

// age > 18 ? console.log("sheidzleba") :age < 29 ? console.log("ar sheidzleba") : console.log("dasdas")


// 5+5
// 5-5
// 5*5
// 5**5
// 5/5
// 5%5

//= მინიჭება

// let firstName = "giorgi"
// firstName = "nika"

// console.log(firstName)

// == რომელიც არის არამკაცრი შედარებ და ადარებს ველიუს

// console.log(5 == "5")

// === რომელიც არის მკაცრი ტოლობა და ადარებს ველიუსაც და ტიპსაც

// console.log(5 === "5")


// 5 - გამოიყენე for ლუპი 1-დან 100-მდე რიცხვებზე +
// * თუ რიცხვი იყოფა 3-ზე - "Fizz"
// * თუ იყოფა 5-ზე - "Buzz"
// * თუ იყოფა ორივეზე - "FizzBuzz"
// * თუ არა - უბრალოდ რიცხვი


// for(let i = 1 ; i<100;i++){
//     if(i % 3 === 0 && i % 5 === 0){
//         console.log("FizzBuzz")
//     }else if (i % 3 === 0){
//         console.log("Fizz")
//     }else if(i % 5 === 0){
//         console.log("Buzz")
//     }else{
//         console.log(i)
//     }
// }

// for(let i = 1; i<100; i++){
//    console.log( i % 15 === 0 ? "FizzBuzz" : i % 3 === 0 ? "Fizz": i % 5 === 0 ? "Buzz" : i )
// }



//Arr

// let str = "nika luka mariami nini girgi null fnc(){} udnefined 15"

// let arr = ["nika","luka","mariami","nini",function(){},null, undefined,15]
// console.log(arr[0][0])
// console.log(arr[1])
// console.log(arr[5])
// console.log(typeof null)




//1) typeOf

// let name = "nika"
// let nullvariable = null
// let arr = [1,2,3,4]
// console.log(typeof arr)

//2)length + lastchar

// let numsArr = [1,2,3,4,5,6,90,100]

// // console.log(numsArr.length)
// // console.log(numsArr[0])
// // console.log(numsArr[1])
// // console.log(numsArr[2])

//3)mutable immutable

// let firstName = "nika"
// firstName[0] = "l"

// console.log(firstName)

// let numsArr = [1,2,3,4]
// numsArr[0] = 90
// console.log(numsArr)

// let firstName = "luka"
// firstName = "mariami"

//4)push

// let numsArr = [1,2,3,4,5]

// // numsArr.push(15)
// let addedNum = numsArr.push(15)
// console.log(addedNum)
// // console.log(numsArr)

//5)pop
// let numsArr = [1,2,3,4,5]

// numsArr.pop()
// numsArr.pop()
// numsArr.pop()
// numsArr.pop()

// console.log(numsArr)

//6)unshift


// let numsArr = [1,2,3,4,5];
// numsArr.unshift(0);
// console.log(numsArr); 

//7) shift
// let numsArr = [1,2,3,4,5];
// numsArr.shift()
// numsArr.shift()
// numsArr.shift()


// console.log(numsArr)

//8) for

// let strArr = ["apple","pear","watermelon"]

// for(let  index = 0;index<=strArr.length;index++){
//     // console.log(index)
//     console.log(strArr[index])
// }


//9)slice დაჭრა

// let strArr = ["apple","pear","watermelon"]
// let slicedArr = strArr.slice(1)
// console.log(slicedArr)


//10)join

// let fruits = ["apple","pear","watermelon"]
// let joinedArr = fruits.join(",")
// console.log(typeof joinedArr)


//11)reverse შეტრიალება



// let fruitsArr = ["apple","pear","watermelon"]

// console.log(fruitsArr.reverse())

//12)splice

// let fruitsArr = ["apple","pear","watermelon"]

// // let removed = fruitsArr.splice(1, 2)
// fruitsArr.splice(1, 1, "banana");
// // console.log(removed)
// console.log(fruitsArr)

// splice(ნნდექსი,რამდენი მოჭრას, რითიჩაანაცვლოს)


//13)flat

// let numsArr = [12,[2,[333,55,66,[666],[12]]]]

// console.log(numsArr.flat(Infinity))