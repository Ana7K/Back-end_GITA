// console.log(process)
// console.log(process.pid)
// console.log(process.version
// console.log(process.platform) darwin = mac  windows = win32  linux = like macos
// console.log(process.cwd())
// console.log(process.env)
// console.log(process.argv)
// let [a,operator,b] = process.argv.slice(2)
// console.log(a)
// console.log(operator)
// console.log(b)


//argv-არგუმენტი ტერმინალის დახმარებით

// if(operator === "+") console.log(Number(a) + Number(b))
//     else if(operator === "-") console.log(Number(a) - Number(b))
//         else console.log("invalid")


// let [name] = process.argv.slice(2)
// function greet(firstName){
//     console.log(`hello ${firstName}`)
// }
// greet(name)


/// fs modules

// const fs = require("fs/promises")

// async function main(){
//     //   await  fs.appendFile("first.txt","ika")
//   await  fs.writeFile("first.txt","ika")
//   await  fs.writeFile("second.txt","nika")
//   let readText = await fs.readFile("first.txt","utf-8")
//   let readSecondText = await fs.readFile("second.txt","utf-8")
//   console.log(readText)
//   console.log(readSecondText)
// }

// main()

// წაიკითხეთ პურველი ფაილი მეორეც გაარეტიანეთ და ჩაწერეთ thid.txt-ში

const fs = require("fs/promises")

// async function Main(){
//     await  fs.writeFile("first.txt","mariami")
//     await fs.writeFile("second.txt","nini")
//     let readText1 = await fs.readFile("first.txt","utf-8")
//     let secondText2 = await fs.readFile("second.txt","utf-8")
//     let combained = readText1.concat(secondText2)
//     await fs.writeFile("third.txt",combained)
//     let readTxt3 = await fs.readFile("third.txt","utf-8")
//     console.log(readTxt3)
// }

// Main()

// let user1 = [
//     {
//         id:1,
//         name:"giorgi",
//         age:22
//     },
//     {
//         id:2,
//         name:"nika",
//         age:32
//     },
//     {
//         id:3,
//         name:"luka",
//         age:16
//     },
//     {
//         id:5,
//         name:"mariami",
//         age:29
//     },
// ]

// async function WriteJson(){
//     await fs.writeFile("data.json",JSON.stringify(user1)) 
//     let read =await fs.readFile("data.json","utf-8")
//     let strToParse = JSON.parse(read)
//     console.log(strToParse)
// }

// WriteJson()


// ერთი ფაილიდან წაიკითხე ტექსტი, გადაატრიალე (reverse) და ჩაწერე სხვა ფაილში


// წაიკითხე ყველა რიცხვი ფაილიდან, გამოთვალე მათი ჯამი და ჩაწერე სხვა ფაილში

// async function main(){
//     let numsArr = [1,2,3,4,5]
//     await fs.writeFile("data.json",JSON.stringify(numsArr))
//     let readNumsFile = await fs.readFile("data.json","utf-8")
//     let numsToArr = JSON.parse(readNumsFile)
//     let sum = numsToArr.reduce((tot,curr) => tot + curr,0)
//     console.log(sum)
// }
// main()


// ერთი ფაილიდან წაიკითხე ტექსტი, გადაატრიალე (reverse) და ჩაწერე სხვა ფაილში

// async function ReadWriteReverseSTR(){
//     await fs.writeFile("first.txt","javascript")
//     let readText = await fs.readFile("first.txt","utf-8")
//     let splitedText = readText.split("")
//     let reversedStr = splitedText.reverse().join("")
//     await fs.writeFile("second.txt",reversedStr)

// }

// ReadWriteReverseSTR()