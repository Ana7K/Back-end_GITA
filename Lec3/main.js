// 1) შექმენი ცარიელი მასივი და შეავსე მასში რიცხვები 1-დან 10-მდე.  მინიშნება : გამოიყენე for ციკლი და push()
// 2) დაბეჭდე მასივის ელემენტები უკუღმა (ბოლოდან დასაწყისამდე).  მინიშნება: გამოიყენე arr.length - 1 და უკუსვლით ციკლი
// 3) იპოვე მასივში მაქსიმალური რიცხვი.  მინიშნება: შედარე ელემენტები ერთმანეთთან if-ით.(შეიძლება კიდევ ერთი ცვლადის შექმნა დაგჭირდეს რასაც შეადარებ არსებულ რიცხვს)
// 4) გამოიყენე slice() მეთოდი, რომ ამოიღო კონკრეტული ელემენტი ან ელემენტების ნაწილი. მინიშნება: slice(start, end) 
// 5) შექმენი ახალი მასივი, რომელშიც იქნება რიცხვები სხვადასხვა მასივებიდან. 
// 6) წაშალე მასივიდან დუბლირებული ელემენტები. მინიშენბა Set-ით (…)
// 7) გაყავი მასივი ორ ცალკე მასივად (ლუწი და კენტი). მინიშნება: გამოიყენე % 2 === 0
// 8) დაითვალე დადებითი რიცხვების რაოდენობა და უარყოფითი რიცხვების ჯამი
// 9) დააბრუნე მასივის თითოეული ელემენტის ინვერსი (ანუ [1,-2] მაგივრად [-1,2]). მინიშნება: გამოიყენე push(-arr[i])


// 1) შექმენი ცარიელი მასივი და შეავსე მასში რიცხვები 1-დან 10-მდე.  მინიშნება : გამოიყენე for ციკლი და push()

// let emptyArr = []

// for(let i = 1;i < 10;i++){
//     // console.log(i)
//     emptyArr.push(i)
// }
// console.log(emptyArr)



// 2) დაბეჭდე მასივის ელემენტები უკუღმა (ბოლოდან დასაწყისამდე).  მინიშნება: გამოიყენე arr.length - 1 და უკუსვლით ციკლი

// let numsArr = [1,2,3,4,5]
// let inverseArr = []
// for(let i = numsArr.length - 1;i>=0;i--){
//     // console.log(i,"index")
//     // console.log(numsArr[i],"elemnt")
//     inverseArr.push(numsArr[i])
// }

// console.log(inverseArr)


// 3) იპოვე მასივში მაქსიმალური რიცხვი.  მინიშნება: შედარე ელემენტები ერთმანეთთან
//  if-ით.(შეიძლება კიდევ ერთი ცვლადის შექმნა დაგჭირდეს რასაც შეადარებ არსებულ რიცხვს)

// let numsArr = [2,200,-9,900,909,10,1000,12341312,3]
// let max = numsArr[0]
// for(let i = 0;i<numsArr.length;i++){
//     // console.log(i)
//     // console.log(numsArr[i])
//     if(numsArr[i] > max){
//         max = numsArr[i]
//     }
// }

// console.log(max)


// 4) გამოიყენე slice() მეთოდი, რომ ამოიღო კონკრეტული ელემენტი ან ელემენტების ნაწილი. მინიშნება: slice(start, end) 

// let numsArr = [1,2,3,4,5]

// console.log(numsArr.slice(0,-1))


// 5) შექმენი ახალი მასივი, რომელშიც იქნება რიცხვები სხვადასხვა მასივებიდან. 

// let arr1=[1,2]

// let arr2 = [3,4]

// let all = arr1.concat(arr2)

// console.log(all)

// spread

// let arr1=[1,2]

// let arr2 = [3,4]

// let all = [...arr1,...arr2]
// console.log(all)

// დესტრუქტურიზაცია
// let str = "hello world"
// let splittedArr = str.split(" ")
// console.log(splittedArr)
// let [word1,word2] = splittedArr
// console.log(word1)
// console.log(word2)


// 6) წაშალე მასივიდან დუბლირებული ელემენტები. მინიშენბა Set-ით (…)

// let numsArr = [1,2,3,3,3,3,4,4,4,5,5,5,50,50,10,100]

// let uniqueArr = [...new Set(numsArr)]
// console.log(uniqueArr)

// let arr = [1,2,3,[1,2,2,[20,200]]]

// console.log(arr.flat(Infinity))


// 7) გაყავი მასივი ორ ცალკე მასივად (ლუწი და კენტი). მინიშნება: გამოიყენე % 2 === 0

// let numsArr = [1,2,3,4,5,6,60,90,55,32,12]
// let even = []
// let odd = []

// for(let i = 0;i<numsArr.length;i++){
//     // console.log(i)
//     // console.log(numsArr[i])
//     if(numsArr[i] % 2 === 0){
//         even.push(numsArr[i])
//     }else{
//         odd.push(numsArr[i])
//     }
// }

// console.log(even,"ლუწები")
// console.log(odd,"კენტები")


// 8) დაითვალე დადებითი რიცხვების რაოდენობა და უარყოფითი რიცხვების ჯამი

// let numsArr = [-1,-100,1,2,3,50,-90,43]
// let positives = 0
// let sumOfNegatives = 0

// for(let i = 0;i<numsArr.length;i++){
//     // console.log(i)
//     // console.log(numsArr[i])
//     if(numsArr[i] > 0){
//         positives++
//     }else{
//         // sumOfNegatives = sumOfNegatives +  numsArr[i]
//         sumOfNegatives += numsArr[i]
//     }
// }

// console.log(positives,"რაოდენობა დადებითების")
// console.log(sumOfNegatives,"ურარყოფითების ჯამი")


// 9) დააბრუნე მასივის თითოეული ელემენტის ინვერსი (ანუ [1,-2] მაგივრად [-1,2]). მინიშნება: გამოიყენე push(-arr[i])

// let arr = [1,-2]
// let answer = []

// for(let i =0;i<arr.length;i++){
//     // console.log(i)
//     // console.log(arr[i])
//     answer.push(-arr[i])
// }
// console.log(answer)


//1) filter

// let arr = [-1,1,2,3,4,5]

// // let filteredArr = arr.filter((num) => num > 2 )
// let filteredArr = arr.filter((num) => num < 2 )

// console.log(filteredArr)


// function main(){
// console.log("გაღვიძება")
// console.log("გაღვიძება")
// console.log("გაღვიძება")
// console.log("გაღვიძება")
// console.log("გაღვიძება")
// }
// main()
// main()
// main()
// main()
// main()

// function main(arr){
// return arr
// }

// console.log(main([1,2,3,40]))

// function greeting(name){
//     console.log(`hello ${name}`)
// }

// greeting("nika")
// greeting("giorgi")

// function main(arr){
//     console.log(arr) 
// }
//     main([1,2,3,4])

// function main(arr){
//     let filteredArr = arr.filter((el) => el > 2)
//     return filteredArr
// }

// console.log(main([1,2,3,4,44,4490]))


//-ორშაბათი
//1)გაღვიძება
//2)ვარჯიში
//3სამსახურში წსვლა
//4)მუშაობა
//5)სამსახურიდან დაბრუნება


//-სამშაბათი
//1)გაღვიძება
//2)ვარჯიში
//3სამსახურში წსვლა
//4)მუშაობა
//5)სამსახურიდან დაბრუნება

//-ოთხშბათი
//1)გაღვიძება
//2)ვარჯიში
//3სამსახურში წსვლა
//4)მუშაობა
//5)სამსახურიდან დაბრუნება


//-ხუთშაბათი
//1)გაღვიძება
//2)ვარჯიში
//3სამსახურში წსვლა
//4)მუშაობა
//5)სამსახურიდან დაბრუნება



//-პარასკევი
//1)გაღვიძება
//2)ვარჯიში
//3სამსახურში წსვლა
//4)მუშაობა
//5)სამსახურიდან დაბრუნება

// console.log("გაღვიძება")
// console.log("გაღვიძება")
// console.log("გაღვიძება")
// console.log("გაღვიძება")
// console.log("გაღვიძება")

// console.log("გაღვიძება")
// console.log("გაღვიძება")
// console.log("გაღვიძება")
// console.log("გაღვიძება")
// console.log("გაღვიძება")

// console.log("გაღვიძება")
// console.log("გაღვიძება")
// console.log("გაღვიძება")
// console.log("გაღვიძება")
// console.log("გაღვიძება")

// console.log("გაღვიძება")
// console.log("გაღვიძება")
// console.log("გაღვიძება")
// console.log("გაღვიძება")
// console.log("გაღვიძება")

// console.log("გაღვიძება")
// console.log("გაღვიძება")
// console.log("გაღვიძება")
// console.log("გაღვიძება")
// console.log("გაღვიძება")

// console.log("გაღვიძება")
// console.log("გაღვიძება")
// console.log("გაღვიძება")
// console.log("გაღვიძება")
// console.log("გაღვიძება")

// console.log("გაღვიძება")
// console.log("გაღვიძება")
// console.log("გაღვიძება")
// console.log("გაღვიძება")
// console.log("გაღვიძება")

// console.log("გაღვიძება")
// console.log("გაღვიძება")
// console.log("გაღვიძება")
// console.log("გაღვიძება")
// console.log("გაღვიძება")


// let numsArr = [1,2,3,4]

// let filteredArr = numsArr.filter((el) => el * 2)

// console.log(filteredArr)


//2) map

// let numsArr = [1,2,3,40,55,12,32,66]

// // let mappedArr = numsArr.map((el) => el * 2)
// // let mappedArr = numsArr.map((el) => el * el)
// // let chaining = numsArr.filter(el => el > 40).map((el) => el*2)
// let mappedArr = numsArr.map((el) => el=1)
// // console.log(chaining)

// console.log(mappedArr)

// //3) find/findIndex
// let arr = [1,2,3,40]
// // let findedArr = arr.find((el) => el === 20)
// // console.log(findedArr)

// let index = arr.findIndex((el) => el === 1)
// console.log(index)

//4) !

// let boolean = true
// let boolean = false
// console.log(!boolean)


//5)some / every

// let numsArr = [1,1,2,3,4,5,6,6,19,90]

// let sommedArr = numsArr.some((el) => el > 2)
// console.log(sommedArr)

// let every = numsArr.every((el) => el > 2)
// console.log(every)

//7)|| / &&

// let age = 15


// if(age > 10 && age < 15){
//     console.log(1)
// }else{
//     console.log(2)
// }

// if(age > 10 || age < 15){
//     console.log(1)
// }else{
//     console.log(2)
// }

//8) reduce

// let numsArr = [1,2,3,4,5,6,7]

// let sum = numsArr.reduce((tot,curr) => tot + curr ,100)

// console.log(sum)


//9)sort


// let numsArr = [-1,10,1,2,3,88,43,2003]

// // let sortedArr = numsArr.sort((a,b) => a-b)
// let sortedArr = numsArr.sort((a,b) => b-a)

// console.log(sortedArr)
