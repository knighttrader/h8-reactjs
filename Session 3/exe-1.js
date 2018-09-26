// Class

class Employee {
  doWork() {
    return "complete!";
  }
}

let scott = new Employee();
console.log(scott.doWork(), "\n"); // "complete!"


// Constructor

class Employee1 {
  constructor (name) {
    this._name = name;
  }
  doWork() {
    return "complete!";
  }
  getName() {
    return this._name;
  }
}

let scott1 = new Employee1("Scott Moss");
console.log(scott1.getName(), "\n"); // "Scott Moss"


// Inheritance

class Person {
  constructor(name) {
    this._name = name;
  }
  getName() {
    return this._name;
  }
}

class Employee2 extends Person {
  // employee "is-a" person
}

let scott2 = new Employee2("Kate Moss");
console.log(scott2.getName(), "\n"); // Kate Moss


class Employee3 extends Person {
  doWork() {
    return this._name + " is working";
  }
}

let scott3 = new Employee3("Jack Moss");
console.log(scott3.getName()); // "Jack Moss"
console.log(scott3.doWork(), "\n"); // "Jack Moss is working"


// Method Super

class Employee4 extends Person {
  constructor(name, title) {
    super(name);
    this.title = title;
  }
  doWork() {
    return this._name + " is working";
  }
}

let scott4 = new Employee4("Jack Moss");
console.log(scott4.getName()); // "Jack Moss"
console.log(scott4.doWork(), "\n"); // "Jack Moss is working"