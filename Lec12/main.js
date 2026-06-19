//1 შექმენი მომხმარებლების მასივი შემდეგი თვისებებით: name, age, email — შემდეგ ეს მონაცემები ჩაწერე data.json ფაილში

//2 წაიკითხე მონაცემები ორ სხვადასხვა ფაილიდან და ჩაწერე ერთ ფაილში

//3 ჩაწერე ფაილში ტექსტი, შემდეგ წაიკითხე ეს მონაცემები და დათვალე რამდენი სიტყვაა

//4 წაიკითხე მომხმარებლების JSON მონაცემები, გაფილტრე ისინი (ის ვინც 18 წელზე უფროსია) და თავიდან ჩაწერე



//1) შექმენი მომხმარებლების მასივი შემდეგი თვისებებით: name, age, email — შემდეგ ეს მონაცემები ჩაწერე data.json ფაილში

const fs = require("fs/promises")

// let userArr = [
//     {
//         name:"nika",
//         age:22,
//         email:"nika@gmail.com"
//     },
//     {
//         name:"giorgi",
//         age:23,
//         email:"giorgi90@gmail.com"
//     },
//     {
//         name:"mariami",
//         age:33,
//         email:"mariami80@gmail.com"
//     },
// ]

// async function main() {
//     await fs.writeFile("data.json",JSON.stringify(userArr))
//     let readJson = await fs.readFile("data.json","utf-8")
//     let parseJson = JSON.parse(readJson)
//     console.log(parseJson)
// }

// main()

//2 წაიკითხე მონაცემები ორ სხვადასხვა ფაილიდან და ჩაწერე ერთ ფაილში

// async function main() {
//     await fs.writeFile("first.txt","giorgi hello")
//     await fs.writeFile("second.txt","nika hello")
//     let readFirstTxt = await fs.readFile("first.txt","utf-8")
//     let readSecondTxt = await fs.readFile("second.txt","utf-8")
//     let thirdTxt = readFirstTxt + " " + readSecondTxt
//     await fs.writeFile("third.txt",thirdTxt)
// }
// main()


//3 ჩაწერე ფაილში ტექსტი, შემდეგ წაიკითხე ეს მონაცემები და დათვალე რამდენი სიტყვაა

// async function Main(){
//     await fs.writeFile("fourth.txt","hello world new name giorgi all one two three")
//     let data = await fs.readFile("fourth.txt","utf-8")
//     let strToArr = data.split(" ")
//     console.log(strToArr.length)
// }

// Main()

//4 წაიკითხე მომხმარებლების JSON მონაცემები, გაფილტრე ისინი (ის ვინც 18 წელზე უფროსია) და თავიდან ჩაწერე


// let user = [
//     {
//         name:"nika",
//         age:17
//     },
//     {
//         name:"giorgi",
//         age:19
//     },
//     {
//         name:"luka",
//         age:34
//     },
//     {
//         name:"mariami",
//         age:4
//     },
// ]
// async function main() {
//     await fs.writeFile("data.json",JSON.stringify(user))
//     let readJson = await fs.readFile("data.json","utf-8")
//     let parseJson = JSON.parse(readJson)
//     let filteredOver18 = parseJson.filter(el => el.age > 18)
//     await fs.writeFile("data.json",JSON.stringify(filteredOver18))
// }

// main()


// async function MakeDir(){
//     await fs.mkdir("folder1",{recursive:true})
//     await fs.writeFile("folder1/index.js","conolse.log('hello world')")
// }

// MakeDir()

//rm -rf შლის ყველაფერს

// async function main(){
//     // await fs.unlink("first.txt") file
//     // await fs.rmdir("folder1")folder
//     //rm -rf შლის ყველაფერს
// }
// main()

// async function main() {
//     await fs.writeFile("message.txt","giorgi")
//     await fs.rename("message.txt","first.txt")
// }
// main()

// async function main() {
//     let info = await fs.readdir(__dirname)
//     let sliceInfo = info.slice(2)
//     for(let item of sliceInfo){
//         let infostat = await fs.lstat(item)
//         console.log(infostat.isFile())
//         if(infostat.isFile()){
//             await fs.unlink(item)
//         }
//     }
// }
// main()

const http = require("http")

let html = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div style="background-color:blue;">
        <div style="background-color: red; display: flex; justify-content: center; align-items: center;">
            <h1>hello</h1>
        </div>
    </div>
</body>
</html>
`

let users = [
    {
        name:"nika",
        age:22
    },
    {
        name:"nika",
        age:23
    },
    {
        name:"nika",
        age:24
    },
    {
        name:"nika",
        age:25
    },
    {
        name:"nika",
        age:26
    },
    {
        name:"nika",
        age:27
    },
]


let prroducts = [
    {
        title:"puri",
        price:2
    },
    {
        title:"puri",
        price:2
    },
    {
        title:"puri",
        price:2
    },
    {
        title:"puri",
        price:2
    },
    {
        title:"puri",
        price:2
    },
    {
        title:"puri",
        price:2
    },
    {
        title:"puri",
        price:2
    },
    {
        title:"puri",
        price:2
    },
    {
        title:"puri",
        price:2
    },
    {
        title:"puri",
        price:2
    },
    {
        title:"puri",
        price:2
    },
]

const server = http.createServer((req,res) => {

    if(req.url === "/"){
        res.writeHead(200,{"content-type":"text/html"})
        res.write(html)
        res.end()
    }
    
    if(req.url === "/users"){
        res.writeHead(200,{"content-type":"application/json"})
        res.write(JSON.stringify(users))
        res.end()
    }

    if(req.url === "/products"){
        res.writeHead(200,{"content-type":"application/json"})
        res.write(JSON.stringify(prroducts))
        res.end()
    }
})

server.listen(8080,() => {
    console.log("server running on http://localhost:8080")
})