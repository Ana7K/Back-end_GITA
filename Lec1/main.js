//1)განვიხილოთ ცვლადები და ტიპები

// გვაქვს let,const,var


// დასკვნა კონსტანტა უცვლელია
// const firstName = "giorgi"
// firstName = "nika"

// console.log(firstName)

// ლეთზე ცვლილება შეიძლება
// let firstName = "luka"
// firstName = "mariami"

// console.log(firstName)

///////////////////////////////

// ჯავასკრიპტის ტიპები -> სტრინგი,ნამბერი,ბულეანი, ობიექტი/ერეი, ფუქნცია,სიმბოლო, ბიგ ინტეჯერი, ნულლ, ადნეფაინდი

// let firstName = 'nika'
// firstName[0] = 'l'

// console.log(firstName)


// let x

// console.log(x)

//1)length
// let universal = "hello worldasdasdsadasdasdasdasdaasdas"
// let length1 = universal.length
// console.log(length1)

//2)charAt()

// let greeting = "hello lukaasdasdsadasdasdasddddd"
// // console.log(greeting.charAt(1))
// console.log(greeting.charAt(greeting.length-1))


//3)slice()

// let firstSteps = "hello world"

// // let slicedStr = firstSteps.slice(0,5)
// let slicedStr = firstSteps.slice(2,-2)
// console.log(slicedStr)


//4)toLowerCase / toUpperCase

// let names = "nika luka maka mariami nini"

// console.log(names.toUpperCase())

// let names = "NIKA NIKA LUKA GIORGI"

// console.log(names.toLowerCase())

//5)concat + გაერთიანება

// let str1 = "hello"
// let str2 = "world"

// console.log(str1 + str2)

// let str1 = 'hello'
// let str2 = 'world'

// console.log(str1 + " " + str2)


// let str1 = "hello"
// let str2 = "world"

// console.log(`${str1} ${str2}`)

// let str1 = "hello"
// let str2 = "world"

// let gaertianeba = str1.concat(str2)

// console.log(gaertianeba)

//6) trim სფეისები მკვლელი

// let firstName = "   giorgi    "

// console.log(firstName.trim().length)

// let universal = " "

// if(universal.trim()){
//     console.log(1)
// }else{
//     console.log(2)
// }



//7) split დაყოფა

// let greeting = "hello world giorgi"
// // console.log(greeting)
// let splitedStr = greeting.split(" ")
// let [str1,str2,str3] = splitedStr

// console.log(str1)
// console.log(str2)
// console.log(str3)

//8)replace

// let greeting = "hello world"

// let replacedStr = greeting.replace("world","giorgi")
// console.log(replacedStr)

//9)includes

// let greeting = "hello world2"

// console.log(greeting.includes(2))


//10)ternary operator

// let age = 100

// console.log(age > 18 ? "სრწულ წლოვანია" : "არარის სრულ წლოვანი")


// let count = 0


// while(count < 11){
//     count++
//     console.log(count)
// }



// 11) for loop



// for(let i = 0;i<=10;i++){
//     console.log(i)
// }


// for(let i = 10;i>0;i--){
//     console.log(i)
// }

// როგორ ამოვიღოთ ბოლო ასობგერა: str[str.length - 1]

// სტრინგის შებრუნება for-ით — ინდექსი მიდის ბოლოდან ნულამდე, თითო სიმბოლო ემატება ახალ სტრინგში
let str = "giorgi";
let answer = "";
for (let i = str.length - 1; i >= 0; i--) {
  answer = answer + str[i];
}
console.log(answer); // igroig

// ========== სავარჯიშო დავალებები ==========