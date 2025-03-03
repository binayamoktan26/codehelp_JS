// var age = 25;

// if (true) {
//   console.log(age);
// }

// var a = 22;
// var a = 26;
// console.log(a);

// {
//   let a = 10;
//   console.log(a);
// }

// let a = 24;
// let a = 33;
// console.log(a);

// let a = 23;
// a = "nawang";
// console.log(a);

// const a = 23;
// console.log(a);

//numer datatype
// let marks = 46;
// marks = "nawang";
// marks = true;
// console.log(marks);

//undefined datatype

// let marks = 7059043589028590285285534252854852835459275929595935543888888888888888888888888888888888888888888888888824;
// console.log(marks);

// ternary operator

// let age = 14;
// let status = age > 18 ? "i can vote" : "i can't vote";
// console.log(status);
// logical operator
// let ans = true && true && true;
// let ans = true && false && true;

// console.log(ans);

// console.log(false || "nawang");
// console.log(false || 7 || 22);

//bitwise opearator

// console.log(~0);

//conditionals

// if- else

// let age = 3;
// if (age > 18) {
//   console.log("vote");
// } else {
//   console.log("can't vote");
// }
// let age = ;
// let number = 5;
// if (number == 1) {
//   console.log("A");
// } else if (number == 2) {
//   console.log("B");
// } else if (number == 5) {
//   if (age > 18) {
//     console.log("i can vote ");
//   }
//   console.log("C");
// } else if (number == 3) {
//   console.log("B");
// } else {
//   console.log("F");
// }

//switch

// let num = 4;

// switch (num) {
//   case 1:
//     console.log("A");
//     break;
//   case 2:
//     console.log(" B");
//     break;
//   case 3:
//     console.log("C ");
//     break;
//   case 4:
//     console.log("D");
//     break;
//   default:
//     console.log("f");
// }

// LOOP

//For loop

// for (let i = 1; i <= 10; i = i + 1) {
//   console.log("i love javascript");
// }

// for (let i = 1; i <= 5; i++) {
//   console.log(i);
// }

// let i = 1;
// while (i <= 5) {
//   console.log(i);
//   i++;
// }

// for (let i = 5; i > 1; i--) {
//   console.log(i);
// }

// let i = 5;
// while (i > 0) {
//   console.log(i);
//   i--;
// }

// for (let i = 1; i <= 6; i++) {
//   if (i == 4) break;
//   else console.log(i);
// }

// let i = 1;
// while (i <= 6) {
//   if (i == 4) break;
//   console.log(i);
//   i++;
// }

// for (i = 1; i <= 5; i++) {
//   if (i == 3) continue;
//   else console.log(i);
// }

//Wile loop
// syntax

//  initilization
//  while(condition)
//  {
//     loop logic

//     updation
//  }
// let i = 1;
// while (i <= 10) {
//   console.log("I love javaScript");
//   i++;
// }

// let i = 1;
// while (i <= 6) {
//   if (i == 2) {
//     i++;
//     continue;
//   } else console.log(i);
//   i++;
// }

// Do while

// let i = 1;
// do {
//   console.log(i);
//   i++;
// } while (i <= 6);

//  reverse
// let i = 10;
// do {
//   console.log(i);
//   i--;
// } while (i > 0);

// break
// let i = 1;
// do {
//   if (i == 3) break;
//   else consol4e.log(i);

//   i++;
// } while (i <= 10);

// Strings

// sequence of charecter

// let name = `this is
// me
// nawang tashi
// lama`;
// console.log(name);

// let firstName = new String("nawang tashi lama ");

// console.log(firstName);

// let opt1 = "English";
// let opt2 = "Nepali ";

// let finalAns = `${opt1}${opt2}`;
// console.log(opt2.length);
// let ans = opt1 + opt2;
// console.log(ans);

// substring

// let str = "javascript";
// console.log(str.substring(2, 6));

// splits
// let sentences = "i love javascript do you like me ";
// let words = sentences.split("\\");
// console.log(words);
// console.log(words.join(","));

//For each loop

//for -in
// let obj = {
//   name: "nawang tashi lama",
//   Age: 20,
//   weight: 68,
//   height: 5.8,
// };

// for (let key in obj) {
//   console.log(key, obj[key]);
// }

// let fullName = "nawang tashi lama";
// for (let value of fullName) {
//   console.log(value);
// }

// Function
// function sayMyName() {
//   console.log("nawang tashi lama");
// }
// sayMyName();

// function number() {
//   for (let i = 0; i < 10; i++) {
//     console.log(i);
//   }
// }
// number();

// function printNum(num) {
//   console.log(num);
// }
// printNum(4);

// function getAverage(num1, num2) {
//   let ave = (num1 + num2) / 2;
//   console.log(ave);
// }
// getAverage(10, 20);

// function getMyName(firstName, lastName) {
//   let fullName = firstName + "  " + lastName;
//   return fullName;
//   //unreachable statements
//   let a = 33;
//   let b = 44;
//   let sum = a + b;
//   console.log(sum);
// }
// let fullName = getMyName("Nawang", "Tashi");
// console.log(fullName);

//Funtion expression
// let getMyName = function (firstName, lastName) {
//   let fullName = firstName + "  " + lastName;
//   return fullName;
// };
// let fullName = getMyName("Nawang ", "Tashi ");
// console.log(fullName);

//Arrow function
// const getMyName = (firstName, lastName) => {
//   const fullName = firstName + "  " + lastName;
//   return fullName;
// };
// const fullName = getMyName("Nawang ", "Tashi ");
// console.log(fullName);
// let myName = prompt("enter my name ?");
// console.log(myName);

//object
// let obj = {
//   name: "Nawang",
//   age: 25,
//   address: "Thimphu",
//   greet: function () {
//     console.log("hello world");
//   },
// };
// for (let key in obj) {
//   console.log(key, obj[key]);
// }
// console.log(obj);
// obj.greet();
// let obj2 = obj;
// console.log(obj2);

//array

//a collection of items/elements
//creation of array
// let arr = [2, 4, 5, 56, 6];
// console.log(arr);

//  array cronctrutor
// let brr = new Array("hello", "world", 1, "this");
// console.log(brr[3]);

//array methods
//1.push
//add element at the end of the array
// let brr = new Array("nawang", "tashi ", "javaScript", 1, 3);
// here we are adding element at the end

// brr.push("python");
// here we are removing element at the end
// brr.pop();
//here we are removing from at the begining
// brr.shift();
//here we are adding element at the begining
// brr.unshift("react");
// brr.unshift("java");
// brr.unshift("flutter");
// brr.unshift("88");
// let result = brr.slice(2, 4);
// console.log(result);
// brr.splice(4, 1, "database");

// console.log(brr);

//Map()
// let arr = [1, 2, 3, 4];
// let square = arr.map((a) => {
//   return a * a;
// });
// console.log(square);
//filter
// let arr = [1, 3, 5, 44, 12, 14, 24, 41];
// let evenNumber = arr.filter((number) => {
//   if (number % 2 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// });
// console.log(evenNumber);
// another method
//   return number % 2 === 0;
// });
// console.log(evenNumber);

// let arr = [1, 3, "nawang ", "tashi ", null];
// let result = arr.filter((value) => {
//   return typeof value === String';
// });
// console.log(result);
// let ans = arr.filter((value) => {
//   if (typeof value === "string") {
//     return true;
//   } else {
//     return false;
//   }
// });
// console.log(ans);

//reduce()
// let arr = [1, 2, 3, 4, 5];
// let ans = arr.reduce((acc, curr) => {
//   return acc + curr;
// });
// console.log(ans);

//sort
// let arr = [5, 7, 2, 8, 9];
// arr.sort();
// arr.reverse();
// console.log(arr.indexOf(5));

//forEach
// let arr = [11, 22, 66, 64];
// arr.forEach((value, index) => {
//   console.log(value, index);
// });

// for-of
// let arr = [10, 61, 44, 4];
// for (let value of arr) {
//   console.log(value);
// }

// let fullName = "binaya";
// for (let val of fullName) {
//   console.log(val);
// }
let arr = [11, 63, 14, 52, 44, 55];
function getSum(arr) {
  let len = arr.length;
  let sum = 0;
  arr.forEach((value) => {
    sum = sum + value;
  });
  return sum;
}
//   for (let i = 0; i < len; i++) {
//     sum = sum + arr[i];
//   }
//   return sum;
// }
let totalSum = getSum(arr);
console.log(totalSum);
// another method
