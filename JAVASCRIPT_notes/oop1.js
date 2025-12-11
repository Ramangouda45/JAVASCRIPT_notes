//prototype chain 
Array.prototype.ram=function(){
    return `custom method ${this}`;

};
let arr=[1,2,3,4,5];
console.log(arr.ram()); 

//class in javascript it  cereates a blueprint for an object 
class vehicle{
    constructor(model,brand){
        this.model=model;
        this.brand=brand;
    }
}
let car1=new vehicle(2022,"BMW");
console.log(car1);

//inheritance in javascript 
//define a parent class 
//define a child class that inherits from the parent class
class bike extends vehicle{
    constructor(model,brand,type){
        super (model,brand);
        this.type=type;
    }       
}
let bike1=new bike(2021,"KTM","sports");
console.log(bike1); 


//encapsulation in javascript
class person{
    #name; //private field
    constructor(name,age){
        this.#name=name;
        this.age=age;
    }
}
let person1=new person("Ram",30);
console.log(person1); //cannot access private field directly 


// abstraction in javascript
class bankAccount{
    #balance; //private field       
    constructor(initialBalance){
        this.#balance=initialBalance;

    }
    deposit(amount){
        this.#balance+=amount;
    }       
    getBalance(){
        return this.#balance;
    }   }
let account=new bankAccount(1000);
account.deposit(500);
console.log(account.getBalance()); //1500       

//polymorphism in javascript
//define polymorphic method in parent class
class animal{
    speak(){    
        return "Animal speaks";
    }
}


//getter and setter
class student{
    constructor(name,age){
        this._name=name;
        this._age=age;
    } 
    get name(){
        return `you not allowed to access name directly: `;
    }               
    set name(newName){
        this._name=newName;
    }   
}
let student1=new student("Ram",20);
console.log(student1.name);      

student1.name="Shyam";
console.log(student1.name);         
