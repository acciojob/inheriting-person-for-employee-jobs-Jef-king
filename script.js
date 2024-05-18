// complete this js code
// function Person(name, age) {
// 	constructor(){
// 		this._name=name;
// 		this._age=age;
// 	}
// 	greet(){
// 		console.log(`Hello, my name is ${this._name}, I am #{this._age} years old.`)
// 	}
// }

// function Employee extends Person(name, age, jobTitle) {
// 	constructor{
// 		this._name=name;
// 		this._age=age;
// 		this._jobTitle=jobTitle;
// 	};
// 	jobGreet(){
// 		console.log(`Hello, my name is ${this._name}, I am #{this._age} years old, and my job title is ${jobTitle}.`)
// 	}
// }

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello, my name is ${this.name}, I am ${this.age} years old.`);
    }
}

class Employee extends Person {
    constructor(name, age, jobTitle) {
        super(name, age);
        this.jobTitle = jobTitle;
    }

    jobGreet() {
        console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`);
    }
}

// Do not change code below this line
window.Person = Person;
window.Employee = Employee;
