//asyncronusly 

// Asynchronously means doing tasks in the background without waiting for one task to finish before starting another.

// clouserue

// A closure is a function that retains access to its lexical scope even when the function is executed outside that scope.
function outerFunction() {
    let counter1 = 4;
    return function () {
        counter1++;
        return counter1;
    }   
}
let increment = outerFunction();
console.log(increment());
console.log(increment());
console.log(increment()); 

// promises

// A Promise is an object representing the eventual completion or failure of an asynchronous operation.

function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let success = true;
            if (success) {
                resolve("Data fetched successfully!");
            } else {
                reject("Error fetching data.");
            }
        }, 2000);
    });
fetchData()
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.error(error);
    });
}  


//prototype inheritance

function Preson(name) {
    this.name = name;
}

Preson.prototype.greet = function() {
    console.log("Hello, " + this.name);
};  
let person1 = new Preson("Ram");
person1.greet(); 


//context binding
const Sanju= {
    name:"Ramm",
    greet: function() {
        console.log(`Hello, ${this.name}`);
    },
};
const greetFunction = Sanju.greet;
greetFunction();
const boundGreetFunction = greetFunction.bind(Sanju);
boundGreetFunction();