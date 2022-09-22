"use strict";
class Department {
    // private name: string;
    // constructor(name: string) {
    //   this.name = name;
    // }
    constructor(name) {
        this.name = name;
        //shorthand
    }
    describe() {
        console.log(`Department ${this.name}`);
    }
}
const accounting = new Department('Accounting');
console.log(accounting);
accounting.describe();
class ITDepartment extends Department {
    constructor(subdep) {
        super('IT');
        this.subdep = subdep;
    }
}
const it = new ITDepartment(['dev', 'test', 'db']);
console.log(it);
