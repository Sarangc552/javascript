//example-1
function myfunction() {
  console.log("sarang");
}
myfunction();

//example-2
function hello(msg) {
  //parameter=>input
  console.log(msg);
}
hello("I love js"); //argument

//example-3

// function sum(x, y) {
//   console.log(x + y);
// }
// sum(3, 4);

//example-4

// function sub(x, y) {
//   s = x - y;
//   return s;
// }
// let val = sub(8, 4);
// console.log(val);

//Arrow function

// const add = (x, z) => {
//   return x + z;
// };

// count of the vowels using function keyword?

// function countvowels(str) {
//   let count = 0;
//   for (const char of str) {
//     if (
//       char === "a" ||
//       char === "e" ||
//       char === "i" ||
//       char === "o" ||
//       char === "u"
//     ) {
//       count++;
//     }
//   }
//   return count;
// }
// let store = countvowels("abhinav");
// console.log(store);

//using arrow function?

// const vowels = (str) => {
//   let c = 0;
//   for (const char of str) {
//     if (
//       char === "a" ||
//       char === "e" ||
//       char === "i" ||
//       char === "o" ||
//       char === "u"
//     ) {
//       c++;
//     }
//   }
//   return c;
// };
// let number=vowels("apna college");
// console.log(`the number of vowels is ${number}`);

//reduce method

// let num = [1, 2, 3, 4, 5];
// let r = num.reduce((res, curr) => {
//   console.log(curr);
//   return res + curr;

// });
// console.log(r);

//
let n = prompt("Enter a number");
let arr = [];
for (let i = 1; i <= n; i++) {
  arr[i - 1] = i;
}
console.log(arr);

let sum = arr.reduce((prev, curr) => {
  return prev + curr;
});
console.log(`The sum is:${sum}`);

let factorial = arr.reduce((prev, curr) => {
  return prev * curr;
});
console.log(`The factorial of  number:${factorial}`);




