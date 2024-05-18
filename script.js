// complete this js code
function Person(name, age) {
	constructor(){
		this._name=name;
		this._age=age;
	};
	greet(){
		console.log(`Hello, my name is ${this._name}, I am #{this._age} years old.`)
	}
}

function Employee extends Person(name, age, jobTitle) {
	constructor{
		this._name=name;
		this._age=age;
		this._jobTitle=jobTitle;
	};
	jobGreet(){
		console.log(`Hello, my name is ${this._name}, I am #{this._age} years old, and my job title is ${jobTitle}.`)
	}
}

// Do not change code below this line
window.Person = Person;
window.Employee = Employee;
