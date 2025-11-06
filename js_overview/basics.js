//===============1.Introduction to JavaScript==========//

// const { use } = require("react");

// const accountID = 144553;
// let accountEmail = "pusspa85855@gmail.com";
// console.log(accountEmail)

// const myName ="Pushpa Kumai"
// console.log(myName)

// let MyClass = "12th"
// MyClass= "graduation"
// console.log(MyClass)
// console.log()

//================ 2.Variables and data types=============//

// function greet(name, age) {
//   // console.log(`Hello my name is ${name} and i am ${age} year's old`);
// }

// greet("Aarav", 22);
// greet("pushpa", 12);

// const pi = 3.1216;
// console.log("value of pi:", pi)

// let myName = "Pushpa";
// let isStudent = true;
// let marks = 70;
// console.log( myName, isStudent)

// let x;
// x = "text";
// // console.log(x)
// // to make dublicate press Alt+Shift+down arrow === console.log(x)
// x = 100;
// // console.log(x)

// ============ 3.Conditional Statements (If-Else/Switch)===============//

// let age = 10;
// if (age >= 18) {
//   //   console.log("You can vote");
// } else {
//   //   console.log("you can't vote");
// }

// let num = 126;
// if (num % 3 === 0) {
//   //   console.log("DIVIDED")
// } else {
//   //   console.log("NOT DIVIDED")
// }

// let myMarks = 20;
// if (myMarks >= 90) console.log("grade A");
// else if (myMarks >= 75) console.log("grade B");
// else  if (myMarks >=30) console.log("gade C");
// else console.log("fail")

// let day = 2
// switch (day) {
//   case 1: console.log("Monday"); break;
//   case 2: console.log("Tuesday"); break;
//   case 3: console.log("Widnesday"); break;
//   default: console.log("Invalid day");
// }

// ================= 4.Loops(for, wnile, do...while)==============//

// for (let i = 1; i <= 5; i++) {   //1<=5 true 2<=5 true 3<=5 true 4<=5 true //
//   // console.log(i);
// }

// for (let j = 1; j <= 10; j++) {

//   // console.log(2 * j)
//   // console.log(`2 x ${j} = ${2*j}`);
// }

// let i = 1;
// while (i <= 3) {
// //   console.log("Count:", i);
//   i++;
// }

// let i = 1;
// while (i <= 10) {
//   // console.log("Count:", i*2);
//   // console.log(`2 x ${i} = ${2 * i}`);
//   i++;
// }

// let num = 5;
// let fact = 1;
// for (let k = 1; k <= num; k++) {
//   // fact *= k;
//   fact = fact*k
//   // console.log("Factorial:", fact);
// }

// for (let i = 1; i <= 3; i++) {
//   for (let j = 1; j <= 3; j++) {
//     // console.log(`i=${i}, j=${j}`);
//   }
// }

//============= 5.Functions==============//

// function sayHello() {
//   console.log("Hello!");
// }
// sayHello ();

// function add(a, b) {
// return a + b;
// }
// console.log(add(4, 6));
//======= arrow function{(a, b)=> a+b}======
// let addition = (a, b)=> a+b
// console.log(addition(2, 5))

// // const multiply = (a,b) => a * b;
// // // console.log(multiply(3, 5));

// function checkprime(num) {
//   if (num < 2) return false;
//   for (let i = 2; i <= Math.sqrt(num); i++ ){
//     if (num % i === 0) return false;
//   }
//   return true;
// }
// // console.log(checkprime(11)); // // true
// // console.log(checkprime(12)); // // false
// // console.log(checkprime(21)); // // false
// // console.log(checkprime(29)); // // true

// function isPrime(num) {
//   if (num < 2) {
//     return false; //number less than 2 are not prime
//   }

//   for (let i = 2; i < num; i++) {
//     if (num % i === 0) {
//       return false; //divisible by i means not prime
//     }
//   }

//   return true; //no divisors found, so it's prime
// }

// console.log(isPrime(20)); //

//========================= 6.Arrays==========================//

// let fruits = ["Apple", "Banana", "Mango"]
// console.log(fruits[2]);

// let numbers = [1, 2, 3,];
// numbers.push(10);
// console.log(numbers.length);

// let marks = [80, 90, 100];
// let total = 0;
// for (let m of marks) total += m;
// console.log("Average:", total / marks.length) //[(80+90+100) / 3 = 90]

// let nums = [1, 2, 3, 4, 5];
// let squares = nums.map((n) => n * n);
// // console.log(squares);

//=================== 7.Objects===========================//

// let person = { name: "Ravi", age: 22 };
// // console.log(person.name, "age", person.age);

// let car = {
//   brand: "Toyora",
//   model: "Fortuner",
//   start: function () {
//     // console.log("Car started");
//   },
// };
// car.start();

// let student = {
//   name: "Anaya",
//   subjects: ["Math", "Science"],
//   marks: { Math: 90, Science: 85 }
// };
// // console.log(student.name);
// // console.log(student.marks.Math);

// let users = [
//   { id: 1, name: "Aman" },
//   { id: 2, name: "Neha" },
//   { id: 3, name: "Rohit" },
// ];
// // users.forEach((u) => console.log(u.name,u.id) );
// users.forEach((u) => console.log(`Hello ${u.name} your id nomber is ${u.id}`) );


//===================== 8.DOM Manupulation (Document Object Model)=================//

//===================== 9.Events====================//


//===================== 10.Advanced Topics (Briefly)=================//


// async function getData() {
//   let response = await fetch("https://jso")
//   let data = await response.json();
//   console.log(data);
// }
// getData();


//============= 11.Opeators (Full, Derailed List with signs)===============//