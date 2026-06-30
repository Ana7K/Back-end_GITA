//////////////////////// 2 task ////////////////////////////
// 2) წამოიღე ინფორმაცია ამ ორი api-დან
// let api = https://jsonplaceholder.typicode.com/users
// let api2 = https://jsonplaceholder.typicode.com/posts
// 1)გამოიყენე axios და ერთდროულად გაუშვი 2 API.
// 2)გაუშვი ორივე ერთად და რომელიც პირველი მოვა ის დააკონსოლე.
// 3)გაუშვი ორივე ერთად და დააბრუნე ინფრომაცია რომელი დარესოლვდა დარეჯექთდა და ა.შ.

const axios = require("axios");

const api = "https://jsonplaceholder.typicode.com/users";
const api2 = "https://jsonplaceholder.typicode.com/posts";

// 1)
async function task1() {
  try {
    const [users, posts] = await Promise.all([axios.get(api), axios.get(api2)]);

    console.log("=== TASK 1 ===");
    console.log("USERS:", users.data);
    console.log("POSTS:", posts.data);
  } catch (err) {
    console.log("Error:", err.message);
  }
}

// 2) first finished
async function task2() {
  try {
    const result = await Promise.race([axios.get(api), axios.get(api2)]);

    console.log("=== TASK 2 - FIRST FINISHED ===");
    console.log(result.data);
  } catch (err) {
    console.log("Error:", err.message);
  }
}

// 3) resolved / rejected
async function task3() {
  const results = await Promise.allSettled([axios.get(api), axios.get(api2)]);

  console.log("=== TASK 3 ===");

  results.forEach((res, index) => {
    if (res.status === "fulfilled") {
      console.log(`API ${index + 1} RESOLVED`);
    } else {
      console.log(`API ${index + 1} REJECTED`);
    }
  });
}

// run all
async function main() {
  await task1();
  await task2();
  await task3();
}

main();
