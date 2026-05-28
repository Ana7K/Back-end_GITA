// 1)იპოვე გამოსავალი როგორ შეიძლება გაეშვას ჯერ  console.log("one") console.log("two") შემდეგ ფუნქცია
// აუცილებელია გამოიყენო ფრომისი
function block() {
  return new Promise((resolve) => {
    setTimeout(() => {
      for (let i = 1; i < 10000000000; i++) {}
      console.log("block finished");
      resolve();
    }, 0);
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

Promise.allSettled([myPromise1, myPromise2]).then((results) => {
  console.log(results);
});

// 3)შექენი 4 პრომისი (ზოგი resolve, ზოგი reject). დააბრუნე მარტო პირველი დარესოლვებული
let Promise1 = new Promise((res, rej) => {
  res("first promise responded");
});
let Promise2 = new Promise((res, rej) => {
  rej("second promise rejected");
});
let Promise3 = new Promise((res, rej) => {
  res("third promise responded");
});
let Promise4 = new Promise((res, rej) => {
  rej("forth promise rejected");
});

Promise.any([Promise1, Promise2, Promise3, Promise4])
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

// 4)შექმენი 4 ფრომისი  და რედიუსით დაითვალე რამდენია წარმატებული და რამდენი წარუმატებელი
let MyPromise1 = new Promise((res, rej) => {
  res("first promise responded");
});

let MyPromise2 = new Promise((res, rej) => {
  rej("second promise rejected");
});

let MyPromise3 = new Promise((res, rej) => {
  res("third promise responded");
});

let MyPromise4 = new Promise((res, rej) => {
  rej("forth promise rejected");
});

Promise.allSettled([MyPromise1, MyPromise2, MyPromise3, MyPromise4]).then(
  (res) => {
    let countedPromises = res.reduce(
      (tot, curr) => {
        if (curr.status === "fulfilled") {
          tot.success++;
        } else {
          tot.failed++;
        }
        return tot;
      },
      {
        success: 0,
        failed: 0,
      },
    );
    console.log(countedPromises);
  },
);

// 5)შექმენი 5 ფრომისი და გაფილტრე ეს ფრომისები დააბრუნე ამრტო წარუმატებლები
let My_Promise1 = new Promise((res, rej) => {
  res("first promise responded");
});
let My_Promise2 = new Promise((res, rej) => {
  rej("second promise rejected");
});
let My_Promise3 = new Promise((res, rej) => {
  res("third promise responded");
});
let My_Promise4 = new Promise((res, rej) => {
  rej("forth promise rejected");
});
let My_Promise5 = new Promise((res, rej) => {
  res("fifth promise responded");
});

Promise.allSettled([
  My_Promise1,
  My_Promise2,
  My_Promise3,
  My_Promise4,
  My_Promise5,
]).then((res) => {
  let filteredArr = res.filter((el) => el.status === "rejected");
  console.log(filteredArr);
});

// 6)გაუშვი ეს ორი API ერთდროულად
api1 = "https://jsonplaceholder.typicode.com/users";
api2 = "https://jsonplaceholder.typicode.com/posts";

async function fetchUsers() {
  let res = await fetch(api1);
  let data = await res.json();
  return data[0];
}
async function fetchPosts() {
  let res = await fetch(api2);
  let data = await res.json();
  return data[0];
}

Promise.all([fetchUsers(), fetchPosts()]).then((res) => console.log(res));
