"use strict"

class Employee {
    constructor (name, age, salary) {
        this._name = name;
        this._age = age,
        this._salary = salary
    }
    //gettes/setters
    get userName() {
      return this._name
    }

    set userName(value) {
        return this._name = value;
    }
    
    get userAge() {
        return this._age
    }

    set userAge(value) {
        return this._age = value;
    }

    get userSalary() {
        return this._salary
    }
    
    set userSalary(value) {
        return this._salary = value;
    }
 }
 //extends
 class Programmer extends Employee {
   constructor(name, age, salary, lang) {
     super(name, age, salary),
     this._lang = lang  
   }
   get salary () {
       this._salary * 3
   }
 }

const person1 = new Person('Bogdan', 25, 7000);
const person2 = new Person('andjcjns', 35, 10000);
const person3 = new Person('fsdsas', 45 , 445000);

//logs
console.log(person1);
console.log(person2);
console.log(person3);