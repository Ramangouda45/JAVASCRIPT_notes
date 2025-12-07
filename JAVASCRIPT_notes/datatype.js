//data  types in js
/*
string = "hello", 'hello', `hello`
number == 1,2,3,4
boolean == true/false
bigint == 1234567890123456789012345678901234567890n
null == absence of value
undefined == value not assigned
symbol == unique identifier
object == {name: "john", age:30}
*/

/* 
let const and var
let and const are block scoped
var is function scoped

let example
let age = 25;

age = 30; // valid

const example
const name = "John";
name = "Doe"; // invalid, will throw error

var example
var city = "New York";
city = "Los Angeles"; // valid
*/


// operations in js
// arithmetic operators: +, -, *, /, %, ++, --, --
// assignment operators: =, +=, -=, *=, /=, %=
// comparison operators: ==, ===, !=, !==, >, <, >=, <=
// logical operators: &&, ||, !
// string operators: + (concatenation), += (concatenation assignment)
// type operators: typeof, instanceof
// bitwise operators: &, |, ^, ~, <<, >>, >>>
// conditional (ternary) operator: condition ? expr1 : expr2

/*
arithmetic example
let a = 10;
let b = 5;
let sum = a + b; // 15

assignment example
let x = 10;
x += 5; // x = x + 5, now x is 15

comparison example
let isEqual = (a == b); // false

logical example
let isAdult = true;
let hasID = false;
let canEnter = isAdult && hasID; // false

string example
let greeting = "Hello, " + "world!"; // "Hello, world!"

type example
let typeOfA = typeof a; // "number"
bitwise example
let bitwiseAnd = a & b; // 0

conditional example
let access = (age >= 18) ? "Allowed" : "Denied"; // "Allowed"   

*/

// operators precedence in js
/*
1. Parentheses ()
2. Exponents **
3. Multiplication *, Division /, Modulus %
4. Addition +, Subtraction -
5. Relational operators <, <=, >, >=
6. Equality operators ==, ===, !=, !==
7. Logical AND &&
8. Logical OR ||
9. Assignment operators =, +=, -=, *=, /=, %=
*/

// primitive vs non-primitive data types
/*
Primitive data types:
- Stored directly in the location that the variable accesses.
- Examples: string, number, boolean, null, undefined, symbol, bigint.
- Immutable (cannot be changed).

Non-primitive data types:
- Stored as references to the location in memory where the data is held.
- Examples: objects, arrays, functions.
- Mutable (can be changed).
*/

// example of primitive data type
/*
some primitive data types are
string
number
boolean
null
undefined
symbol
bigint

*/

// some non-primitive data types are
/*
object
array
function
*/

// example of primitive data type
let str = "Hello, World!"; // string
let num = 42; // number
let bool = true; // boolean
let n = null; // null
let undef; // undefined
let sym = Symbol("unique"); // symbol
let bigIntNum = 1234567890123456789012345678901234567890n; // bigint
console.log(typeof str); // "string"
console.log(typeof num);  // "number"
console.log(typeof bool); // "boolean"
console.log(typeof n); // "object" (this is a known quirk in JavaScript)
console.log(typeof undef); // "undefined"
console.log(typeof sym); // "symbol"
console.log(typeof bigIntNum); // "bigint"


// example of non-primitive data type
let obj = { name: "John", age: 30 }; // object
let arr = [1, 2, 3, 4, 5]; // array
function greet() { // function
    return "Hello!";
}
console.log(typeof obj); // "object"
console.log(typeof arr); // "object"
console.log(typeof greet); // "function"

// non-primituve data types example
// 1) Object
let person = {
    name: "Alice",
    age: 28,
    "last name": "Smith"
}

person.age = 29; // modifying the age property
console.log(person); // { name: "Alice", age: 29 }
person.city = "New York"; // adding a new property
console.log(person); // { name: "Alice", age: 29, city:
//  "New York" }
person["last name"] = "Johnson"; // modifying property with space
console.log(person); // { name: "Alice", age: 29, city: "New York", "last name": "Johnson" }

// some properties of object
/*
1. Objects are collections of key-value pairs.
2. Keys are strings (or Symbols) and values can be of any data type.
3. Objects are mutable, meaning their properties can be changed.
4. Properties can be accessed using dot notation or bracket notation.
5. Objects can contain other objects, arrays, and functions as values.
*/

console.log(typeof person); // "object"
console.log(Date()); // current date and time

// 2) Array
let numbers = [10, 20, 30, 40, 50];
let heroes = ["Superman", "Batman", "Wonder Woman"];
numbers[2] = 35; // modifying the third element
console.log(numbers); // [10, 20, 35, 40, 50]
heroes.push("Flash"); // adding a new element
console.log(heroes); // ["Superman", "Batman", "Wonder Woman", "Flash"] 
heroes.pop(); // removing the last element
console.log(heroes); // ["Superman", "Batman", "Wonder Woman"]
console.log(typeof numbers); // "object"
console.log(typeof heroes); // "object"

// some properties of array
/*
1. Arrays are ordered collections of values.
2. Values can be of any data type, including other arrays and objects.
3. Arrays are mutable, meaning their elements can be changed.
4. Elements are accessed using zero-based indexing.
5. Arrays have built-in methods for common operations like adding, removing, and iterating over elements.
*/

// type conversion in js
/*
1. String to Number: Number("123") or parseInt("123") or parseFloat("123.45")
2. Number to String: String(123) or (123).toString()
3. Boolean to Number: Number(true) // 1, Number(false) // 0
4. Number to Boolean: Boolean(1) // true, Boolean(0) // false
5. String to Boolean: Boolean("non-empty string") // true, Boolean("") // false
6. Implicit Conversion: "5" + 10 // "510", "5" - 2 // 3
*/
// example of type conversion
let strNum = "100";
let convertedNum = Number(strNum); // String to Number
console.log(convertedNum); // 100
console.log(typeof convertedNum); // "number"
let numToStr = 200;
let convertedStr = String(numToStr); // Number to String
console.log(convertedStr); // "200"
console.log(typeof convertedStr); // "string"
let boolToNum = true;
let convertedBoolNum = Number(boolToNum); // Boolean to Number
console.log(convertedBoolNum); // 1

let numToBool = 0;
let convertedNumBool = Boolean(numToBool); // Number to Boolean
console.log(convertedNumBool); // false
console.log(numToBool+1); // 1 wiried js behavior

