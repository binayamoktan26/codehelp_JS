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
const getMyName = (firstName, lastName) => {
  const fullName = firstName + "  " + lastName;
  return fullName;
};
const fullName = getMyName("Nawang ", "Tashi ");
console.log(fullName);
