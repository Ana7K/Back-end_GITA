#!/usr/bin/env node

// const http = require("http")
const fs = require("fs/promises")
const {sum, print, reverseSTR, calcualteSum, isEven, isOdd,write,read} = require("./utils/helper");
const {Command} = require("commander")
const program = new Command()



//npm init -y
// const server = http.createServer((req,res) => {
//     res.write("hoasdasda")
//     res.end()
// })


// server.listen(3030,() => {
//     console.log("server running on http://localhost:3030")
// })



// function sum(a,b){
//     return a+b
// }

// console.log(sum(10,5))


//imported helpers from helper.js
// sum(20,30)
// print("my name is giorgi")
// console.log(reverseSTR("giorgi"))
// console.log(reverseSTR("nika"))
// console.log(reverseSTR("lika"))
// calcualteSum([1,2,3,4])
// console.log(isEven(3))
// console.log(isOdd(2))


// async function main(){
//     await write("message.txt","giorgi")
// }
// main()

// async function main(){
//     await read("data.json",true)
// }
// main()


//axios

// const axios = require("axios")

// async function fethcByAxios(API){
//     let res = await axios.get(API)
//     console.log(res.data)
// }

// fethcByAxios("https://jsonplaceholder.typicode.com/users")

program
    .command("create")
    .description("this is create command desc")
    .argument("name")
    .argument("age")
    .action(async (name,age) => {
        let readDAtaJson = await read("data.json",true)
        let lastID = readDAtaJson[readDAtaJson.length-1]?.id || 0
        let newObj = {
            id:lastID + 1,
            name,
            age
        }

        readDAtaJson.push(newObj)
        await write("data.json",JSON.stringify(readDAtaJson,null,2))
    })

    program
        .command("delete")
        .description("delete desc")
        .argument("id")
        .action(async (id) => {
            let readDAtaJson = await read("data.json",true)
            readDAtaJson = readDAtaJson.filter(el => el.id !== +id)
            await write("data.json",JSON.stringify(readDAtaJson))
        })

        program
            .command("show")
            .description("this is show command")
            .action(async () => {
                let readDAtaJson = await read("data.json",true)
                console.log(readDAtaJson)
            })



    program.parse()
// დაამტეთ show command რომელიც მაცვენებს ინფიორმაციას data.json ის შესახებ
// დაამატეთ delete command რომელიც წასლის იუზერს id -ის მეშევობით