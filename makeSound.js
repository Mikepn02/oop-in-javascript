class Animal {
    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    makeSound(){
        return "Animal makes sound";
    }
}

class Dog extends Animal {
    makeSound(){
        return "Woof!";
    }
}
class Cat extends Animal{
    makeSound(){
        return "Meow";
    }
}
const animal = new Animal("unknown",3);
console.log(animal.makeSound());
const dog = new Dog("buddy",5);
console.log(dog.makeSound());
const cat = new Cat("Whiskers",2);
console.log(cat.makeSound())