const person = {
    name: "james",
    age:30,
    greet: function(){
        console.log(`Hello my name is ${this.name} and I'm ${this.age} years old`)
    }
}

function Person(name,age){
    this.name = name;
    this.age = age;
    this.greet = function(){
        console.log(`Hello my name is ${this.name} and I'm ${this.age} years old`)
    }

}

// constructors  
const person1 = new Person("James",30);
const person2= new Person('Kevin',25)

person1.greet();
person2.greet();