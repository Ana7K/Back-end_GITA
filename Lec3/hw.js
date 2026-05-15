// 1) გაამრავლე თითოეული ელემენტი 3-ზე.
// Input: [1,2,3] - Output: [3,6,9]
let arr1 = [1, 2, 3];
let newArr = [];
for (let i = 0; i < arr1.length; i++) {
  newArr.push(arr1[i] * 3);
}
console.log(newArr, "after multiplied by 3");
console.log("---------------------------------------");

// 2)გაფილტრე ისეთი რიცხვები რომლებიც იყოფა უნაშთოდ 3-ზე
let arr2 = [12, -5, 3, 54, 6, 17, 49, -35, 0, -12];
let filteredArr2 = arr2.filter((num) => num % 3 == 0);
console.log(filteredArr2, "filtered array");
console.log("---------------------------------------");

// 3)დააბრუნე ყველა დადებითი რიცხვის ჯამი
let arr3 = [1, 2, 3, 4, 5, -6, -5, -4, 0];
let positiveSum = 0;
for (let i = 0; i < arr3.length; i++) {
  if (arr3[i] > 0) {
    positiveSum += arr3[i];
  }
}
console.log(positiveSum, "summed positives");
console.log("---------------------------------------");

// 4)მოცემული სტრინგების მასივიდან წაშალე თითოეული სტრინგის ბოლო სიმბოლო
let namesArr = ["giorgi", "nika", "mariami"];
for (let i = 0; i < namesArr.length; i++) {
  namesArr[i] = namesArr[i].slice(0, -1);
}
console.log(namesArr, "names' array");
console.log("---------------------------------------");

// 5)გაამრავლე ყველა ელემენტი მასივში 2-ზე და შემდეგ ამოიღე რიცხვები, რომლებიც იყოფა 3-ზე
let arr5 = [-6, 17, 3, -10, -12, 100];
let newArr5 = [];
let newestArr = [];
for (let i = 0; i < arr5.length; i++) {
  newArr5.push(arr5[i] * 2);
  if (newArr5[i] % 3 == 0) {
    newestArr.push(newArr5[i]);
  }
}
console.log(newArr5, "new array");
console.log(newestArr, "can be divided by 3");
console.log("---------------------------------------");

// 6) დაალაგე რიცხვები ზრდადობით
let numsArr = [1, -1, -2, -10, 111, 3, 2, 5];
let sortedArr = numsArr.sort((a, b) => a - b);
console.log(sortedArr, "sorted array");
console.log("---------------------------------------");

// 7)გაამრავლე ყველა ელემენტი 2-ზე და დატოვე მხოლოდ ისინი, რომლებიც 5-ზე მეტია.
let arr7 = [-6, 17, 3, 1, -10, 12, 100];
let newArr7 = [];
for (let i = 0; i < arr7.length; i++) {
  let multiplied = arr7[i] * 2;
  if (multiplied > 5) {
    newArr7.push(multiplied);
  }
}
console.log(newArr7, "new array");
console.log("---------------------------------------");
// 8)let arr = [1,1,1,1,2,2,3,3,3] დააბრუნე let unque = [1,2,3]
let arr = [1, 1, 1, 1, 2, 2, 3, 3, 3];
let unique = [];
for (let i = 0; i < arr.length; i++) {
  if (!unique.includes(arr[i])) {
    unique.push(arr[i]);
  }
}
console.log(unique, "unique array");
console.log("---------------------------------------");

// 9)დააბრუნეთ ორი ყველაზე მცირე რიცხვის ჯამს
let arrOfNums = [-1, 20, 90, 4, 5, 111];
let sortedArrOfNums = arrOfNums.sort((a, b) => a - b);
console.log(sortedArrOfNums, "sorted array");
console.log(
  "sum of two smallest numbers",
  sortedArrOfNums[0] + sortedArrOfNums[1],
);
console.log("----------second way----------");

let min1 = arrOfNums[0];
let min2 = arrOfNums[1];
for (let i = 0; i < arrOfNums.length; i++) {
  if (arrOfNums[i] < min1) {
    min1 = arrOfNums[i];
  }
  if (arrOfNums[i] < min2 && arrOfNums[i] > min1) {
    min2 = arrOfNums[i];
  }
}
console.log(arrOfNums);
console.log(`sum of two smallest numbers: ${min1} + ${min2} = ${min1 + min2}`);
