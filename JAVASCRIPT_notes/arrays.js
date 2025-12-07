// 1) delcare an array named fruits that comtains the following elements: "apple", "banana", "orange", "grape"

// access the first element of the array and store it in a variable and print it to the console
let fruits = ["apple", "banana", "orange", "grape"];
let firstFruit = fruits[0];
console.log(firstFruit); // "apple"

// 2) delare an array named cities that contains the following elements: "New York", "osaka", "Chicago", "tokyo"
// access the last element of the array and store it in a variable favorate and print it to the console
let cities = ["New York", "osaka", "Chicago", "tokyo"];
let favoriteCity = cities[cities.length - 1];
console.log(favoriteCity); // "tokyo"

// 3) delcare an array named anime that contains the following elements: "naruto", "one piece", "bleach", "attack on titan"
// change the third element of the array to "fullmetal alchemist" and print the updated array to the console
let anime = ["naruto", "one piece", "bleach", "attack on titan"];
anime[2] = "fullmetal alchemist";
console.log(anime); // ["naruto", "one piece", "fullmetal alchemist", "attack on titan"]

// 4)declare an array named citysVisited that contains the following elements: "Tokyo", "Osaka", "Berlin", "Rome"
// add a new element "Paris" to the end of the array and print the updated array to the console
let citysVisited = ["Tokyo", "Osaka", "Berlin", "Rome"];
citysVisited.push("Paris");
console.log(citysVisited); // ["Tokyo", "Osaka", "Berlin", "Rome", "Paris"]
// pop the last element from the array and print the updated array to the console
citysVisited.pop();
console.log(citysVisited); // ["Tokyo", "Osaka", "Berlin", "Rome"]

// 5) you have an array named colors that contains the following elements: "red", "blue", "green", "yellow"
// crate a softcopy of the array named colorsSoftCopy
let colors = ["red", "blue", "green", "yellow"];
let colorsSoftCopy = colors;

colors.pop(); // remove the last element from colorsSoftCopy

// print both arrays to the console to see if they are affected
console.log(colorsSoftCopy); // ["red", "blue","green"]
console.log(colors); // ["red", "blue", "green"]

// 6) you have an array named animals that contains the following elements: "dog", "cat", "elephant", "tiger"
// create a hard copy of the array named animalsHardCopy
let animals = ["dog", "cat", "elephant", "tiger"];
let animalsHardCopy = [...animals];
animalsHardCopy.pop(); // remove the last element from animalsHardCopy

// print both arrays to the console to see if they are affected
console.log(animalsHardCopy); // ["dog", "cat", "elephant"]
console.log(animals); // ["dog", "cat", "elephant", "tiger"]

// 7) you have two arrays europeanCountries and asianCountries
// merge both arrays into a new array named worldCountries and print it to the console
let europeanCountries = ["Germany", "France", "Italy"];
let asianCountries = ["China", "India", "Japan"];
// let worldCountries = [...europeanCountries, ...asianCountries];
// alternative way using concat method
let worldCountries = europeanCountries.concat(asianCountries);
console.log(worldCountries); // ["Germany", "France", "Italy", "China", "India", "Japan"]

// 8) you have an array named numbers that contains the following elements: 5, 10, 15, 20, 25
// calulate the length of the array store it in a variable and print it to the console
let numbers = [5, 10, 15, 20, 25];
let lengthOfNumbers = numbers.length;
console.log(lengthOfNumbers); // 5


// 9) you have an array named cityBucketList that contains the following elements: "Osaka", "New York", "Tokyo", "Sydney", "kyoto"
// check if New York is present in the array and store the result in a variable isPresent and print it to the console
let cityBucketList = ["Osaka", "New York", "Tokyo", "Sydney", "kyoto"];
let isPresent = cityBucketList.includes("New York");
console.log(isPresent); // true
