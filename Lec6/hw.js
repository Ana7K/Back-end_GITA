// 1)იპოვე გამოსავალი როგორ შეიძლება გაეშვას ჯერ  console.log("one") console.log("two") შემდეგ ფუნქცია
// აუცილებელია გამოიყენო ფრომისი
function block() {
  return new Promise((resolve) => {
    for (let i = 1; i < 10000000000; i++) {}
    resolve();
  });
}

// console.log("one");
// block();
// console.log("two");

// 2)ორი პრომისი შექმენი (ერთმა დაარესოლვოს, ერთმა დაარეჯექთოს) და ორივე შემთხვევა დაამუშავე then/catch-ით  ცალცალკეც და “ჯგუფურადაც”  - ჯგუფურად Allsetteld გამოიყენე.
let myPromise1 = new Promise((res, rej) => {
  res("first promise responded");
});
let myPromise2 = new Promise((res, rej) => {
  rej("second promise rejected");
});

myPromise1.then((res) => console.log("Promise1:", res));
myPromise2
  .then((res) => console.log("Promise2:", res))
  .catch((err) => console.log("Promise2 error:", err));

// 3)შექენი 4 პრომისი (ზოგი resolve, ზოგი reject). დააბრუნე მარტო პირველი დარესოლვებული

// 4)შექმენი 4 ფრომისი  და რედიუსით დაითვალე რამდენია წარმატებული და რამდენი წარუმატებელი

// 5) შექმენი 5 ფრომისი და გაფილტრე ეს ფრომისები დააბრუნე ამრტო წარუმატებლები

// 6)// გაუშვი ეს ორი API ერთდროულად
api1 = "https://jsonplaceholder.typicode.com/users";
api2 = "https://jsonplaceholder.typicode.com/posts";
