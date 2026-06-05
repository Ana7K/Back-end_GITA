// ArrayTasks

// 1)let arr = [1, [2, 3, [4, 5]], 5, [2, [3, 6]]] დაალაგე ზრდადობით და ამოიღე უნიკალურები გამოიყენე ForLoop
let arr = [1, [2, 3, [4, 5]], 5, [2, [3, 6]]];
let sortedArr = [];

for (let i = 0; i < arr.length; i++) {
  if (Array.isArray(arr[i])) {
    for (let j = 0; j < arr[i].length; j++) {
      if (Array.isArray(arr[i][j])) {
        for (let k = 0; k < arr[i][j].length; k++) {
          if (!sortedArr.includes(arr[i][j][k])) {
            sortedArr.push(arr[i][j][k]);
          }
        }
      } else if (!sortedArr.includes(arr[i][j])) {
        sortedArr.push(arr[i][j]);
      }
    }
  } else if (!sortedArr.includes(arr[i])) {
    sortedArr.push(arr[i]);
  }
}

sortedArr.sort((a, b) => a - b);

console.log(sortedArr);
console.log("--------------------------------");

// 2) იპოვე ყველაზე მაღალი rating-ის მქონე პროდუქტი, მაგრამ ისეთი, რომლის ფასიც < 1000.
let products = [
  { name: "Phone", price: 1200, rating: 4.5 },
  { name: "Laptop", price: 2500, rating: 4.8 },
  { name: "Book", price: 30, rating: 4.9 },
  { name: "TV", price: 800, rating: 4.0 },
];
let highestRatingProduct = products.find(
  (product) =>
    product.price < 1000 &&
    product.rating === Math.max(...products.map((product) => product.rating)),
);
console.log(highestRatingProduct);
console.log("--------------------------------");

// 3)რედიუსის დახმარებით დათვალე რომელი რამდენჯერ მეორდება და for ლუპის დახმარებით იპოვე მეტჯერგამეორებული
let sentence = "dog cat dog bird cat dog fish bird";
let words = sentence.split(" ");

let wordCount = words.reduce((acc, word) => {
  acc[word] = (acc[word] || 0) + 1;
  return acc;
}, {});

let mostRepeated = "";
let maxCount = 0;

for (let key in wordCount) {
  if (wordCount[key] > maxCount) {
    maxCount = wordCount[key];
    mostRepeated = key;
  }
}

console.log(wordCount);
console.log("Most repeated:", mostRepeated);
console.log("Count:", maxCount);
console.log("--------------------------------");

// ForLoop tasks

// 1)დაწერე ფუნქცია for loop-ის გამოყენებით, რომელიც დაითვლის რამდენჯერ გვხვდება კონკრეტული ასო მოცემულ სტრინგში.
function countLetter(str, letter) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === letter) {
      count++;
    }
  }
  return count;
}
console.log(countLetter("banana", "a"));
console.log("--------------------------------");

// 2) დაწერე ფუნქცია, რომელიც შეამოწმებს არის თუ არა სტრინგი პალინდრომი (ეს სიტყვა თუ იკითხება ერთნაირად ესე იგი პალინდრომია.მაგალითად ana, abba,gig)
function isPalindrome(str) {
  return str === str.split("").reverse().join("");
}
console.log(isPalindrome("ana")); // true
console.log(isPalindrome("nino")); // false
console.log("--------------------------------");

// 3)შექმენი ფუნქცია, რომელიც მიიღებს ორ რიცხვების მასივს, გააერთიანებს მათ, წაშლის დუბლიკატებს და დაითვლის ჯამს. გამოიყენე მასივის მეთოდები და ლოგიკური ოპერატორები საჭიროებისამებრ.
function sumUnique(arr1, arr2) {
  let merged = [...arr1, ...arr2];
  let unique = [...new Set(merged)];

  return unique.reduce((sum, num) => sum + num, 0);
}

console.log(sumUnique([1, 2, 3], [3, 4, 5]));
console.log("--------------------------------");

//  4)შექმენი ფუნქცია ფაქტორიალის დასათვლელად.
function factorial(num) {
  let result = 1;

  for (let i = 1; i <= num; i++) {
    result *= i;
  }
  return result;
}

console.log("factorial of 4 is", factorial(4));
console.log("--------------------------------");

// 5)Two Sum - მოძებნე მასივში ის წყვილები, რომელთა ჯამიც უდრის მოცემულ რიცხვს ანუ [1,2,3,4,5,6,-7,-8] ამ მასივს და -15 თუ გადავცემთ მან უნდა დააბრუნოს [6,7]
function twoSum(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        return [i, j];
      }
    }
  }
}

console.log(twoSum([1, 2, 3, 4, 5, 6, -7, -8], -15));
