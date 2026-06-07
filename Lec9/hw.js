// 1)დაწერე ფუნქცია რომელიც გაფილტრავს ლუწებზე და იპოვი მათ საშუალოს
arr = [1, 2, 3, 4, 5, 6];
let evenNums = arr.filter((el) => el % 2 === 0);
console.log("even numbers of the array are:", evenNums);
let quantity = evenNums.length;
let avg = evenNums.reduce((tot, curr) => (tot + curr) / quantity);
console.log("avarage of those even numbers:", avg);
console.log("------------------------------------");

// 2)დაწერე ფუნქცია, რომელიც დათვლის სიტყვების რაოდენობას წინადადებაში.
let sentence = "I love JavaScript";

function wordCounter(sentence) {
  return sentence.split(" ").length;
}

console.log(wordCounter(sentence), "words");
console.log("------------------------------------");

// 3) დაწერე ფუნქცია რომელიც დააბრუნებს true თუ რიცხვი მარტივია თუ არადა false.
function isPrime(num) {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(isPrime(2)); // true
console.log(isPrime(10)); // false

console.log("------------------------------------");

// 4) იპოვე ყველაზე გრძელი სიტყვა
let words = ["dog", "elephant", "cat", "hippopotamus"];
function longest(words) {
  return words.reduce((tot, curr) => (curr.length > tot.length ? curr : tot));
}
console.log(longest(words));
console.log("------------------------------------");

// 5) დააბრუნე ისეთი რიცხვი რომელიც მეორდება უფრო მეტჯერ
let numsArr = [3, 5, 3, 2, 5, 5, 3, 5];
let counting = numsArr.reduce((tot, curr) => {
  if (tot[curr]) {
    tot[curr] += 1;
  } else {
    tot[curr] = 1;
  }
  return tot;
}, {});

let maxCount = 0;
let maxNum = "";

for (let num in counting) {
  if (counting[num] > maxCount) {
    maxCount = counting[num];
    maxNum = num;
  }
}

console.log(`ყველაზე ხშირად ${maxCount}-ჯერ მეორდება ${maxNum}`);
console.log("------------------------------------");

// 6) დაწერე ფუნქცია რომელიც დაითვლის რამდენი ლუწი და რამდენი კენტი რიცხვია
let nums = [1, 2, 3, 4, 5, 6, 7, 8];
function counter(nums) {
  let even = nums.filter((el) => el % 2 === 0).length;
  let odd = nums.filter((el) => el % 2 === 1).length;

  console.log("even numbers:", even);
  console.log("odd numbers:", odd);
}
counter(nums);
console.log("------------------------------------");

// 7) დაწერე ფუნქცია რომელიც დააბრუნებს ყველაზე პატარა რიცხვს
let numbers = [10, 2, 33, 5, 7];
function findMin(numbers) {
  let min = numbers[0];
  for (let i in numbers) {
    if (numbers[i] < min) {
      min = numbers[i];
    }
  }
  return min;
}

console.log("smallest number:", findMin(numbers));
console.log("------------------------------------");
