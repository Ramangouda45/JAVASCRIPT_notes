// looping statements in JavaScript

// problem 1: write a for loop that calu;ates sum of all the numbers from 1 to 10 and prints the result to the console
let sum = 0;
let i = 1;
while(i<=10){
    sum+=i;
    i++;
}
console.log(sum);

// problem 2: write a while loop that counts down from 5 to 1 and stores the numbers in an array named 'countdown'.
let countdown = [];
let j = 5;
while(j>=1){
    countdown.push(j);
    j--;
}
console.log(countdown);

// problem 3: write a do-while loop that prompts the user to enter a number until they enter stop. Store all entered numbers in an array named 'userNumbers'.
// let userNumbers = [];
// let userInput;
// do {
//     userInput = prompt("Enter a number (or type 'stop' to finish):");
//     if(userInput !== "stop") {
//         userNumbers.push(Number(userInput));
//     }
// } while(userInput !== "stop");
// console.log(userNumbers);


// write a do while loop that adds numbers from 1 to 3 and stores the result in a variable named 'total'
// let total = 0;
// let k = 1;
// do {
//     total += k;
//     k++;
// } while(k <= 3);
// console.log(total);

// write a for loop that multiplies each elemsent in an array named 'factors' by 2 and stores the results in a new array named 'doubledFactors'
let factors = [1, 2, 3, 4, 5];
let doubledFactors = [];

for(let i=1; i<=factors.length-1; i++){
    doubledFactors.push(factors[i] * 2);
}

// console.log(doubledFactors);

// write a fro loop that listes all the citis in an array named 'cities' and store it in a new variable prints them to the console
// let cities = ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix"];

// let cityCopy=[];

// for(let i=0; i<cities.length; i++){
//     cityCopy.push(cities[i]);
// }
// console.log(cityCopy);

// loops challenges
// 1: write a for loop that loops through the array cars ["BMW", "Volvo", "Saab", "Ford"] and stops when it reaches "Saab". store the result in a new array named 'selectedCars'
let cars = ["BMW", "Volvo", "Saab", "Ford"];
let selectedCars = [];

for(let i=0; i<cars.length; i++){
    if(cars[i] != "Saab") {
        selectedCars.push(cars[i]);
    }else{
        break;
    }
}
console.log(selectedCars);

// 2 write a for loop that loops through the array cars ["BMW", "Volvo", "Saab", "Ford"] and continues when it reaches "Saab". store the result in a new array named 'selectedCars'

let cars2 = ["BMW", "Volvo", "Saab", "Ford"];
let selectedCars2 = [];
for(let i=0; i<cars2.length; i++){
    if(cars2[i] === "Saab") {
        continue;
    }
    selectedCars2.push(cars2[i]);
}
console.log(selectedCars2);

// use for of loop to itrate through the array [1,2,3,4,5] and stop when it reaches 3. store the result in a new array named 'resultArray'
let numbers = [1, 2, 3, 4, 5];
let resultArray = [];

for (let num of numbers) {
    if (num === 3) {
        break;
    }
    resultArray.push(num);
}
console.log(resultArray);

// 5 use a for in loop to iterate through the object containing cities and their populations.
// stop the loop when the population of berlin is found and store all previous cities population in a new object named 'selectedCities'

let cityPopulations = {
    "New York": 8419600,
    "Los Angeles": 3980400,
    "Chicago": 2716000,
    "Houston": 2328000,
    "Berlin": 3769000,
    "Phoenix": 1690000
};
let selectedCities = {};

for (let city in cityPopulations) {
    if (city === "Berlin") {
        break;
    }
    selectedCities[city] = cityPopulations[city];
}
console.log(selectedCities);

// 7 write a forEach loop that iterates through the array [10,20,30,40,50] and stops when it reaches 30. store the result in a new array named 'stoppedArray'
let nums = [10, 20, 30, 40, 50];
let stoppedArray = [];
nums.forEach(function(num) {
    if (num === 30) {
        return;
    }
    stoppedArray.push(num);
});
console.log(stoppedArray);


// 8 write a forEach loop that iterates through the array [berlin, Tokyo, Paris, London] and continues when it reaches Paris. store the result in a new array named 'continuedArray'
let cityNames = ["Berlin", "Tokyo", "Paris", "London"];
let continuedArray = [];
cityNames.forEach(function(city) {
    if (city === "Paris") {
        return;
    }
    continuedArray.push(city);
});
console.log(continuedArray);

// write a for loop that iteretes through array [2,5,7,9]
// skips the 7 and multiplies the other numbers by 2. store the result in a new array named 'multipliedArray'
let arr = [2, 5, 7, 9];
let multipliedArray = []; 

for(let i=0; i<arr.length; i++){
    if(arr[i] == 7){
        continue;
    }else{
        multipliedArray.push(arr[i]*2)   
        
    }
}
console.log(multipliedArray)


// use a for of loop to iterate through the array cars ["BMW-m4", "mini-cooper", "innova-crysta", "Ford-endeavour", "audi-a6", "mercedes-benz"]
// and stop when the length of the currrent car name is greater than 10. store the result in a new array named 'shortNamedCars'
let carModels = ["BMW-m4", "mini-cooper", "innova-crysta", "Ford-endeavour", "audi-a6", "mercedes-benz"];
let shortNamedCars = [];

for (const cars of carModels) {
    if(cars.length >= 12){
        break;
    }
    shortNamedCars.push(cars)
}
console.log(shortNamedCars)