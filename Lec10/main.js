// Async

// 1)let api =  "https://jsonplaceholder.typicode.com/albums"
// დაფეჩე ეს ეიპიაი და ამოიღე ყველა title

// 2)გააკეთე თაიმერი რომელიც დაითვლის უკუთვლით და რომ მივა 0 ზე გაჩერდება 


// ForLoop

// 1)დაწერე ფუნქცია for loop-ის გამოყენებით, რომელიც დაითვლის რამდენჯერ გვხვდება კონკრეტული ასო მოცემულ სტრინგში.

// 2) დაწერე ფუნქცია, რომელიც შეამოწმებს არის თუ არა სტრინგი პალინდრომი
// (ეს სიტყვა თუ იკითხება ერთნაირად ესე იგი პალინდრომია.მაგალითად ana, abba,gig)


// 3)შექმენი ფუნქცია, რომელიც მიიღებს ორ რიცხვების მასივს, გააერთიანებს მათ, 
//  წაშლის დუბლიკატებს და დაითვლის ჯამს. გამოიყენე მასივის მეთოდები და ლოგიკური ოპერატორები საჭიროებისამებრ.

// 4)შექმენი ფუნქცია ფაქტორიალის დასათვლელად.

// 5)Two Sum  - მოძებნე მასივში ის წყვილები, რომელთა ჯამიც უდრის მოცემულ რიცხვს
// ანუ [1,2,3,4,5,6,-7,-8] ამ მასივს და -15 თუ გადავცემთ მან უნდა დააბრუნოს [6,7]


// 1)let api =  "https://jsonplaceholder.typicode.com/albums"
// დაფეჩე ეს ეიპიაი და ამოიღე ყველა title

// async function fetchAlbums(API){
//     let res = await fetch(API)
//     let data = await res.json()
//     let mappedTitles = data.map(el => el.title)
//     console.log(mappedTitles)
// }

// fetchAlbums("https://jsonplaceholder.typicode.com/albums")

// 2)გააკეთე თაიმერი რომელიც დაითვლის უკუთვლით და რომ მივა 0 ზე გაჩერდება 

// let count = 5

// let inteval = setInterval(() => {
//     count--
//     console.log(count)
//     if(count <=0){
//         clearInterval(inteval)
//     }
// }, 1000);


// 2) დაწერე ფუნქცია, რომელიც შეამოწმებს არის თუ არა სტრინგი პალინდრომი
// (ეს სიტყვა თუ იკითხება ერთნაირად ესე იგი პალინდრომია.მაგალითად ana, abba,gig)

// function isPalindrome(str){
//     let reversed = ""
//     for(let i = str.length - 1; i>=0;i--){
//         reversed  += str[i]
//     }
//     return str === reversed
// }

// console.log(isPalindrome("ana"))
// console.log(isPalindrome("giorgi"))
// console.log(isPalindrome("abba"))
// console.log(isPalindrome("nika"))

// function isPalindrome(str){
//     let reversed = str.split("").reverse().join("")
//     return str === reversed
// }

// console.log(isPalindrome("ana"))
// console.log(isPalindrome("giorgi"))
// console.log(isPalindrome("abba"))
// console.log(isPalindrome("nika"))

// 3)შექმენი ფუნქცია, რომელიც მიიღებს ორ რიცხვების მასივს, გააერთიანებს მათ, 
//  წაშლის დუბლიკატებს და დაითვლის ჯამს. გამოიყენე მასივის მეთოდები და ლოგიკური ოპერატორები საჭიროებისამებრ.

// function main(arr1,arr2){
//     let combained = arr1.concat(arr2)
//     console.log(combained)
//     let unique = []
//     let sum = 0
//     for(let i = 0;i<combained.length;i++){
//         console.log(combained[i])
//         if(!unique.includes(combained[i])){
//             unique.push(combained[i])
//             sum += combained[i]
//         }
//     }
//     console.log(sum)
//     return unique
// }
// console.log(main([1,1,1,1,2,2,34,55,23,11,1,1,11,55],[1,2,3,4,5,6,7,7,7]))


// 4)შექმენი ფუნქცია ფაქტორიალის დასათვლელად.

// function factorial(n){
//     let answer = 1
//     for(let i = 1;i<=n;i++){
//         answer *= i
//     }
//     return answer
// }

// console.log(factorial(9))

// // 1*2*3*4*5*6*7*8*9 = 362880 factorial
// // 1+2+3+4+5+6+7+8+9 = 40 sum

// 5)Two Sum  - მოძებნე მასივში ის წყვილები, რომელთა ჯამიც უდრის მოცემულ რიცხვს
// ანუ [1,2,3,4,5,6,-7,-8] ამ მასივს და -15 თუ გადავცემთ მან უნდა დააბრუნოს [6,7]


// function twoOfSum(arr,sum){
//     let answer = []
//     for(let i = 0;i<arr.length;i++){
//         for(let j = i + 1;j<arr.length;j++){
//             if(arr[i] + arr[j] === sum){
//                 answer.push([i,j])
//             }
//         }
//     }
//     return answer
// }

// console.log(twoOfSum([1,2,3,4,5,6,-7,-8],8))