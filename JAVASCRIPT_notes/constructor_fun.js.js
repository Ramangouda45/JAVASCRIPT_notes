// function Car(model,brand){
//     this.model= model
//     this.brand=brand
    
// }
// function Person(name,age){
//     this.name= name
//     this.age=age
// }
// let Car=new Car(2022,BMW);
// console.log(Car)

// function Tea(type){
//     this.type=type
//     this.describe=function(){}
// }
function Animal(species){
    this.species=species

}
Animal.prototype.sound=function(){
    return `${this.species}`
}
let cat = new Animal("Cat")
console.log(cat.sound())
