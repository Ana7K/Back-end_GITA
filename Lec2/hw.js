// 1) შექმენი ცარიელი მასივი და შეავსე მასში რიცხვები 5-დან 15-მდე
let numsArr = [];
for (let i = 5; i < 15; i++) {
  numsArr.push(i);
}
console.log(numsArr, "filled array of numbers");
console.log("---------------------");

// 2) დაბეჭდე მასივის ელემენტები უკუღმა let arr = [1,2,3,4,5]
let numsArr1 = [1, 2, 3, 4, 5];
let reversedArr1 = numsArr1.reverse();
console.log(reversedArr1, "reversed array");
console.log("---------------------");

// 3) იპოვე მასივში მინიმალური რიცხვი let arr = [100,2,3,9]
let numsArr2 = [100, 2, 3, 9];
let min = numsArr2[0];
for (let i = 0; i < numsArr2.length; i++) {
  if (numsArr2[i] < min) {
    min = numsArr2[i];
  }
}
console.log(min, "min");
console.log("---------------------");

// 4) ამოიღე შუა 3 ელემენტი slice-ით.
let arr3 = [1, 2, 3, 4, 5, 6, 7];
let slicedArr = arr3.slice(2, 5);
console.log(slicedArr, "sliced array");
console.log("---------------------");

// 5) გააერთიანე ორი მასივი
let arr1 = [1, 2];
let arr2 = [3, 4];
let joinedArrays = arr1.concat(arr2);
console.log(joinedArrays, "joined arrays");
console.log("---------------------");

// 6) წაშალე დუბლირებული ელემენტები let arr = [1,2,3,4,5,6,6,7,7]
let arr4 = [1, 2, 3, 4, 5, 6, 6, 7, 7];
let clearedArr4 = [...new Set(arr4)];
console.log(clearedArr4, "cleared array");
console.log("---------------------");

// 7) გაყავი მასივი ორ ცალკე მასივად (ლუწი და კენტი). მინიშნება: გამოიყენე % 2 === 0  let arr = [1,2,3,4,5,6,7]
let arr5 = [1, 2, 3, 4, 5, 6, 7];
let even = [];
let odd = [];
for (let i = 0; i < arr5.length; i++) {
  //   console.log(arr5[i]);
  if (arr5[i] % 2 === 0) {
    even.push(arr5[i]);
  } else {
    odd.push(arr5[i]);
  }
}
console.log(even, "even");
console.log(odd, "odd");
console.log("---------------------");

// 8) დაითვალე დადებითი რიცხვების რაოდენობა და უარყოფითი რიცხვების ჯამი.
let arrayOfNumbers = [1, 2, 3, 4, 5, 6, 7, -1, -2, -3, -4];
let positiveCount = 0;
let negativeSum = 0;
for (let i = 0; i < arrayOfNumbers.length; i++) {
  if (arrayOfNumbers[i] > 0) {
    positiveCount++;
  } else {
    negativeSum += arrayOfNumbers[i];
  }
}
console.log(positiveCount, "counted positives");
console.log(negativeSum, "summed negatives");
console.log("---------------------");

// 9) დააბრუნე მასივის თითოეული ელემენტის ინვერსი (ანუ [1,-2] მაგივრად [-1,2]). მინიშნება: გამოიყენე push(-arr[i])
let arr9 = [1, -2];
let inverted = [];
for (let i = 0; i < arr9.length; i++) {
  inverted.push(-arr9[i]);
}
console.log(inverted, "inverted");
console.log("---------------------");

// 10) let arr = [1,[2,[3]],[4] შენი მიზანია მიიღო [1,2,3,4]
let arrNums = [1, [2, [3]], [4]];
console.log(arrNums.flat(Infinity));
console.log("---------------------");

// 11)let fruits = ["apple", "banana", "orange", "kiwi"] წაშალე "banana" მასივიდან splice()-ით
let fruits = ["apple", "banana", "orange", "kiwi"];
let slicedFruits = fruits.splice(1, 1);
console.log(slicedFruits);
// "orange"-ის წინ დაამატე "mango"
let addedFruits = fruits.splice(1, 0, "mango");
// ბოლოს დაბეჭდე ახალი მასივი.
console.log(fruits);
// splice-მ არ დაგაბნიოთ splice(საიდან დაიწოს,რამდენი წაშალოს,რითიჩაანაცვლოს)
