//================ Variables and data types=============//
function greet(name, age) {
  // console.log(`Hello my name is ${name} and i am ${age} year's old`);
}

greet("Aarav", 22);
greet("pushpa", 12);

const pi = 3.1216;
// console.log("value of pi:", pi)

let myName = "Pushpa";
let isStudent = true;
let marks = 70;
// console.log( myName, isStudent)

let x;
x = "text";
// console.log(x)
// to make dublicate press Alt+Shift+down arrow === console.log(x)
x = 100;
// console.log(x)

// ============ Conditional Statements (If-Else/Switch)===============//

let age = 10;
if (age >= 18) {
  //   console.log("You can vote");
} else {
  //   console.log("you can't vote");
}

let num = 126;
if (num % 3 === 0) {
  //   console.log("DIVIDED")
} else {
  //   console.log("NOT DIVIDED")
}

let myMarks = 20;
if (myMarks >= 90) console.log("grade A");
else if (myMarks >= 75) console.log("grade B");
else  if (myMarks >=30) console.log("gade C");
else console.log("fail")
