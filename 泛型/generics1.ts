// 泛型约束
interface Shape {
  draw(): void;
}

// 函数传入的参数是实现接口的类
function drawShapes<S extends Shape>(shapes: S[]): void {
  shapes.forEach(shape => shape.draw());
}

class Circle implements Shape {
  draw(): void {
    console.log("drawing Circle");
  }
}

class Rectangle implements Shape {
  draw(): void {
    console.log("drawing Rectangle");
  }
}

let circle = new Circle();
let rectangle = new Rectangle();
drawShapes([circle, rectangle]);

// K keyof T, extends
function getProp<T, K extends keyof T>(key: K, obj: T): any {
  return obj[key];
}

let obj = { a: 2, b: 3, c: 4 };
let prop = getProp("c", obj);

////////////////////////////////////////
// 对构造函数的约束
function createInstance<T>(t: new () => T): T {
  return new t();
}

class Test {
  x: number = 4;
  // constructor(x: number) {

  // }
}

// let test: Test = new Test();
let test: Test = createInstance<Test>(Test);
console.log(test);

function createInstance2<T>(
  // 这个参数需要传入一个类
  t: new (...constructorArgs: any[]) => T,
  // 第二个参数可以传入不定的参数
  ...args: any[]
): T {
  return new t(args);
}

class Test2 {
  private x: number;

  constructor(x: number) {
    this.x = x;
  }
}

function createInstance3<R, T extends { new (...constructorArgs: any[]): R }>(
  constructor: T,
  ...args: any[]
): R {
  return new constructor(args);
}

class Test3 {
  private x: number;

  constructor(x: number) {
    this.x = x;
  }
}

let test3: Test3 = createInstance3(Test3, 6);
console.log(test3);

// new Test2(3);

let test2: Test2 = createInstance2(Test2, 3, 5);
console.log(test2);

////泛型 - 类型别名
// 把后面的类型赋值给别名
type ListType<T> = { elements: T[] };

// 使用
let numList: ListType<number> = { elements: [1, 2, 3] };
console.log(numList);

interface Item {
  name: string;
  price: number;
}

// &取交集，以下为例必须包含三个参数id name price
type Entity<E> = { id: number } & E;
let itemEntity: Entity<Item> = { id: 1, name: "rails365", price: 12 };
console.log(itemEntity);

interface Person {
  name: string;
}

interface Contact {
  phone: string;
}

function showPersonContact(personContact: Person & Contact): void {
  console.log(personContact);
}

let personContact: Person & Contact = { name: "Dane", phone: "111-111-111" };
showPersonContact(personContact);

interface PersonDetail {
  detail: Person & Contact;
}

let personDetail: PersonDetail = {
  detail: { name: "Dane", phone: "111-111-111" }
};
console.log(personDetail);

/////
