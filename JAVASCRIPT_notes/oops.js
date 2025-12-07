// oops concept demonstration in JavaScript
// opps (object oriented programming) 
// javascript is a prototype-based, multi-paradigm, single-threaded, dynamic language that supports object-oriented programming.

// constructor function
// it is used to create multiple objects with the same properties and methods.
// by convention, constructor function names start with a capital letter.
// the 'this' keyword refers to the current instance of the object being created.

function Person(name, age) {
    this.name = name;
    this.age = age;
}

function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}