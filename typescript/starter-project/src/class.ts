class Department {
  // private name: string;

  // constructor(name: string) {
  //   this.name = name;
  // }
  constructor(private name: string) {
    //shorthand
  }
  describe(this: Department) {  //this is a special TS thing, not a param
    console.log(`Department ${this.name}`)
  }
}


const accounting = new Department('Accounting');
console.log(accounting)
accounting.describe()

class ITDepartment extends Department{
  constructor(public subdep: string[]){
    super('IT');

  }
}

const it = new ITDepartment(['dev', 'test', 'db'])
console.log(it)