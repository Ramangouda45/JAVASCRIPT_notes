//1) write a function named maketea that takes one parameter teaType and returns a string like making you a cup of <teaType> tea stored in a variable named teaOrder.function maketea(teaType) {
    
function maketea(teaType) {
    let teaOrder = `making you a cup of ${teaType} tea`;
    return teaOrder;
}
    let teaOrder = maketea("green");
    console.log(teaOrder); // Output: making you a cup of green tea

// 2) write a function named ordercoffee that takes one paramener, teaType insode this function create another function named confirmOrder that returns a message like order condirmed: <teaType> coffee. makecoffee should return the result of calling confirmOrder.

function ordercoffee(coffeeType) {

    function confirmOrder() {
        return `order confirmed: ${coffeeType} coffee`;
    }
    return confirmOrder();
}
let coffeeOrder = ordercoffee("latte");
console.log(coffeeOrder); // Output: order confirmed: latte coffee

//arrow function 
// it is a shorter syntax for writing functions in JavaScript.

const add = (a, b) => a + b;
console.log(add(2, 3)); // Output: 5

// write a function named processTeaOrder that takes another function makeTea as a parameter and calls it with argument "earl grey". processTeaOrder should return the result of makeTea.

function processTeaOrder(makeTea) {
    return makeTea("earl grey");
}
let teaResult = processTeaOrder(maketea);
console.log(teaResult); // Output: making you a cup of earl grey tea

// another example of higher-order function
let myWorldCities = ["London", "New York", "Sydney", "Tokyo"];
let traveldCities = [];

myWorldCities.forEach(function(city) {
    if(city == "Sydney") {
        return; // skip Sydney
    }
    traveldCities.push(city);
});
console.log(traveldCities); // Output: [ 'London', 'New York', 'Tokyo' ]


// 5 write a function named createTeamaker that returns another function named teamaker. teamaker should take one parameter teaType and return a string like here's your <teaType> tea. createTeamaker should return the teamaker function.store the returned function in a variable named myTeaMaker and call it with argument "jasmine".

function createTeamaker() {
    return function teamaker(teaType) {
        return `here's your ${teaType} tea`;
    };
}
let myTeaMaker = createTeamaker();
console.log(myTeaMaker("jasmine")); // Output: here's your jasmine tea