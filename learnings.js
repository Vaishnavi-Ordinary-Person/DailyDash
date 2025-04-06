//  Variables in JavaScript


// Using let 
let name = "Vaishnavi";

// Using const-cannot be changed in the scope
const age =18;

console.log("Name:", name);
console.log("Age:", age);


// Data Types 

let stringType = "Learning is interesting"          // String

let numberType =2315900;                    // Number

let booleanType = true;                  // Boolean

let undefinedType;                       // Undefined

let nullType = null;                     // Null

let objectType = { key: "value" };       // Object

let arrayType = [1, 2, 3, 4];            // Array

//here we dont have datatypes like float

//gives the datatype of the particular variable
console.log("Types:");
console.log(typeof stringType);   // "string"

console.log(typeof numberType);   // "number"

console.log(typeof booleanType);  // "boolean"

console.log(typeof undefinedType);// "undefined"

console.log(typeof nullType);     // "object" 

console.log(typeof arrayType);    // "object" (arrays are special objects)


//  Operators 

// Arithmetic operators
let a = 23, b = 333;
console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);
console.log("Modulus:", a % b);

// Comparison operators
console.log("Is a equal to b?", a == b);       // false
console.log("Is a strictly equal to b?", a === b); // false
console.log("Is a not equal to b?", a != b);   // true
console.log("Is a greater than b?", a > b);    // true

// Logical operators
let x = true, y = false;
console.log("AND:", x && y);   // false
console.log("OR:", x || y);    // true
console.log("NOT x:", !x);     // false

let fruits = ["apple", "banana"];
fruits.push("mango")     //Add
fruits.pop();           // Remove last
fruits.shift();         // Remove first
fruits.unshift("kiwi"); // Add at start
fruits.forEach(f => console.log(f));

const student = {
    name1: "Alice",
    age1: 21,
    course: "Physics"
  };
  
  // Destructuring:
  const { name1, age1 } = student;
  
  console.log(name1); // Alice
  console.log(age1);  // 21

  const obj1 = { a: 1, b: 2 };
  const obj2 = { b: 99, c: 3 };

  //objects
  const merged = { ...obj1, ...obj2 };
  console.log(merged); // { a: 1, b: 99, c: 3 }
  const student2 = { name: "Alice", age: 22, course: "CS" };

const { name3, ...others } = student;
console.log(name3);   // Alice
console.log(others); // { age: 22, course: "CS" }

  
  