// // 1. Callback Functions
// // A callback is a function passed as an argument to another function, and executed later.
// function fetchData(callback) {
//   setTimeout(() => {
//     callback("Data received!");
//   }, 2000);
// }

// fetchData((result) => {
//   console.log(result); // 👉 "Data received!" after 1 sec
// });

// // 2. Callback Hell
// // When callbacks are nested inside callbacks, code becomes messy and hard to maintain.
// // Hard to read and maintain → solved using Promises.
// setTimeout(() => {
//   console.log("Step 1");
//   setTimeout(() => {
//     console.log("Step 2");
//     setTimeout(() => {
//       console.log("Step 3");
//     }, 1000);
//   }, 1000);
// }, 1000);

// // 3. Promises
// // A Promise represents a value that may be available now, later, or never.
// let promise = new Promise((resolve, reject) => {
//   let success = true;
//   if (success) {
//     resolve("Promise resolved!");
//   } else {
//     reject("Promise rejected!");
//   }
// });

// promise
//   .then(result => console.log(result))   // 👉 Promise resolved!
//   .catch(error => console.error(error))  // if rejected
//   .finally(() => console.log("Done"));   // always runs

// console.log(promise);

let myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("✅ Data received after 2 seconds");
    // reject("❌ Something went wrong"); // try this too
  }, 2000);
});

myPromise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  });

// Promise.resolve(10)
//   .then(num => num * 2)   // 👉 20
//   .then(num => num + 5)   // 👉 25
//   .then(result => console.log(result));

// 4. Promise Utility Methods
// Promise.all([])
// Runs multiple promises in parallel.
// Resolves when all succeed, rejects if any fail.
// Promise.all([
//   Promise.resolve("A"),
//   Promise.resolve("B"),
//   Promise.resolve("C")
// ]).then(results => console.log(results));
// // 👉 ["A", "B", "C"]

// // Promise.allSettled([])
// // Waits for all promises, even if some fail.
// // Returns results with status.
// Promise.allSettled([
//   Promise.resolve("Success"),
//   Promise.reject("Error")
// ]).then(results => console.log(results));
// /*
// 👉 [
//   { status: "fulfilled", value: "Success" },
//   { status: "rejected", reason: "Error" }
// ]
// */

// // Promise.race([])
// // Returns the result of the first settled promise (resolved or rejected).
// Promise.race([
//   new Promise(res => setTimeout(() => res("Fast"), 5000)),
//   new Promise(res => setTimeout(() => res("Slow"), 2000))
// ]).then(result => console.log(result));
// 👉 "Slow"

/* 5. Async / Await
A modern way to write asynchronous code that looks synchronous.
async makes a function return a promise.
await pauses execution until the promise resolves/rejects. */
async function fetchData() {
  return "Data ready!";
}

fetchData().then(console.log); // 👉 Data ready!

function getNumber() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(42), 1000);
  });
}

async function showNumber() {
  let result = await getNumber();
  console.log(result); // 👉 42
}

showNumber();

async function fetchData02() {
  try {
    let data = await Promise.reject("Something went wrong!");
    console.log(data);
  } catch (error) {
    console.error("Caught error:", error);
  } finally {
    console.log("Cleanup always runs");
  }
}
fetchData02();
