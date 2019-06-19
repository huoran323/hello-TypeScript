// 抽象类
// 不能实例化(不能new对象)
abstract class Persons {
  // 定义为抽象属性，一定要实现
  abstract name: string;

  // 定义为抽象属性
  //   constructor(name) {
  //     this.name = name;
  //   }

  display(): void {
    console.log(this.name);
  }

  //定义抽象方法，返回Persons实例
  // 抽象方法，没有方法体。抽象方法一定要实现，否则报错
  abstract find(string): Persons;
}

// 通过继承来实例化
class employees extends Persons {
  name: string;
  code: number;

  constructor(name: string, code: number) {
    // super(name);
    super();
    this.name = name;
    this.code = code;
  }

  find(name: string): Persons {
    return new employees(name, 1);
  }
}

let pp: Persons = new employees("lili", 1111);
console.log(pp.name);
let p3: Persons = pp.find("haha");
console.log(p3);

/////////////////////////////
// 技巧 简写
// class Person {
//  private _name: string;
//  private _age: number;

//  constructor(name: string, age: number) {
//      this._name = name;
//      this._age = age;
//  }
// }

// 上下代码是等效的
class Person {
  constructor(private _name: string, private _age: number) {}
}

let p: Person = new Person("hfpp2012", 29);
console.log(p);
