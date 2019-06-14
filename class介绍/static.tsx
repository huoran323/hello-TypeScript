// Static 静态属性和方法

// 通过类似 Person.加方法名或属性来调用（比如 Person.age ）

// 默认是伸明为 public

// 如果是 protected 或 private 的话，当前类都不能调用，通过 public 的静态方法来调用

// 如果父类是 protected 或 private 的话，子类也能继承所有的静态方法和属性
// 子类还是不能调用 protected 或 private 的方法和属性，只能通过继承的 public 的方法来调用

// 子类定义的方法(public)只有是 父类定义为 public 或 protected 的才能访问，private 的不能访问

// 模板
class Person {
  // 定义了两个数据内容
  protected firstName: string;
  protected lastName: string;

  // 静态属性
  protected static age: number = 10;

  // 静态的方法
  public static getStaticAge() {
    return `my age is ${Person.age}`;
  }

  // static all() {
  //  // Person 对应数据库的一个表模型
  //  // 可以列出 persons 表的所有记录
  //  // new 出来的可能是一条记录，要找到所有记录，可能要通过静态方法
  //  return Person.select().all();
  // }

  public constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getAge() {
    return `my age is ${Person.age}`;
  }

  public greet() {
    console.log("hi");
  }

  protected sayHi() {
    console.log("private say hi");
  }

  public callSayHi() {
    this.sayHi();
    console.log("********");
  }

  // public
  // get 方法
  protected getFirstName() {
    return this.firstName;
  }

  getLastName() {
    return this.lastName;
  }

  // public
  // set 方法
  setFirstName(firstName) {
    this.firstName = firstName;
  }

  setLastName(lastName) {
    this.lastName = lastName;
  }

  public othergreet() {
    this.greet();
    console.log("*****");
  }
}

// public 的 getStaticAge
// console.log(Person.getStaticAge());
// console.log(Person.getStaticAge());

// let aPerson = new Person("rails365", "hfpp2012");
// console.log(aPerson.getAge())
// 相当于 set 方法
// aPerson.firstName = "rails365"
// 相当于 get 方法
// console.log(aPerson.firstName);
// aPerson.setFirstName("hfpp2012");
// aPerson.getFirstName();

// aPerson.sayHi();
// aPerson.callSayHi();

// 继承成了父类的数据和行为，就是属性和方法
// 它的父类就是 Person
class Programmer extends Person {
  public greet() {
    console.log("hello world");
  }

  public static getSuperAge() {
    return `super age is ${Programmer.age}`;
  }

  constructor(firstName: string, lastName: string) {
    // 调用父类的构造函数的方法，要传入参数
    super(firstName, lastName);
    console.log("Programmer constructor");
  }

  // super 代表父类
  public greetLikeNormalPeople() {
    super.greet();
  }

  // 子类定义的方法
  // public getFullName(): string {
  //  return `${this.firstName} ${this.lastName}`;
  // }

  // 自己定义的方法
  // getFirstName protected
  getSuperFirstName(): string {
    return this.getFirstName();
  }

  getSuperLastName(): string {
    return this.lastName;
  }

  // 可以访问继承过来的 private 属性
  // getFirstName 和 getLastName 是继承过来
  // public getFullName(): string {
  //  return `${this.getFirstName()} ${this.getLastName()}`;
  // }

  public getFullName(): string {
    return `${this.getSuperFirstName()} ${this.getSuperLastName()}`;
  }
}

// getSuperAge 是子类定义的方法
console.log(Programmer.getSuperAge());

// let aProgrammer = new Programmer("rails365", "hfpp2012");
// console.log(aProgrammer.firstName);
// 继承过来的方法
// aProgrammer.getFirstName();
// console.log(aProgrammer.getFullName());
// console.log(aProgrammer.getFirstName());

// console.log(aProgrammer.getSuperFirstName());
