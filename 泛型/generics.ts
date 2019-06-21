// function getArray(items: any[]): any[] {
//  return new Array().concat(items);
// }

// let myNumArray = getArray([100, 200, 300]);
// let myStrArray = getArray(["hello", "world"]);

// console.log(myNumArray);
// console.log(myStrArray);

// myNumArray.push(400);
// myStrArray.push("rails365");

// console.log(myNumArray);
// console.log(myStrArray);

// myNumArray.push("hfpp2012");
// myStrArray.push(500);

// console.log(myNumArray);
// console.log(myStrArray);

// [ 100, 200, 300, 400, 'hfpp2012' ]
// [ 'hello', 'world', 'rails365', 500 ]

// 可以用很多类型来代替 T
// T[] 代表数组，每个元素都是 T 类型
function getArray<T>(items: T[]): T[] {
  return new Array<T>().concat(items);
}

// function getArray(items: number[]): number[] {
//  return new Array().concat(items);
// }

// 调用，可以传入很多类型，代码复用
let myNumArray = getArray<number>([100, 200, 300]);
let myStrArray = getArray<string>(["hello", "world"]);

// 当不传入 T 时，会推荐出类型
// 不推荐这种写法，规范的作法是要指定类型
let myBooleanArray = getArray([true, false]);

myNumArray.push(400);
myStrArray.push("rails365");
// myBooleanArray.push('hfpp2012');

// function getArray1<T>(items: T): T {
//  console.log(items.length);
//  return T;
// }

function getArray1<T>(items: T[]): T[] {
  console.log(items.length);
  return items;
}

// myNumArray.push('hfpp2012');
// myStrArray.push(500);

// 限制为所有的元素是纯数字或字符串

//
// function getArray(items: number[]): number[] {
//  return new Array().concat(items);
// }

// function getArray(items: string[]): string[] {
//  return new Array().concat(items);
// }

// function getArray(items: boolean[]): boolean[] {
//  return new Array().concat(items);
// }

/////////////////////////////////
//在类中使用（简洁）
class List<T> {
  private data: T[];

  constructor(elements: T[]) {
    this.data = elements;
  }

  add(t: T) {
    this.data.push(t);
  }

  remove(t: T) {
    let index = this.data.indexOf(t);
    if (index > -1) {
      this.data.splice(index, 1);
    }
  }

  asArray(): T[] {
    return this.data;
  }
}

let numbers = new List<number>([1, 2, 3, 4]);
numbers.add(5);
numbers.remove(3);
let numArray = numbers.asArray();
console.log(numArray);

let fruits = new List<string>(["apple", "banana", "orange"]);
fruits.add("mango");
fruits.remove("apple");
let fruitArray = fruits.asArray();
console.log(fruitArray);

// 传入两个泛型
class Pair<F, S> {
  first: F;
  second: S;

  constructor(first: F, second: S) {
    this.first = first;
    this.second = second;
  }
}

// pairs 是个数组参数，数组中的每个元素是 Pair<F, S> 类型
function getFirstArray<F, S>(pairs: Pair<F, S>[]): F[] {
  let arr: F[] = [];
  for (let i = 0; i < pairs.length; i++) {
    let first: F = pairs[i].first;
    arr.push(first);
  }
  return arr;
}

let numArray: Pair<number, boolean>[] = [
  new Pair(1, true),
  new Pair(2, false),
  new Pair(4, true)
];

console.log(getFirstArray(numArray));

// (t: T) => boolean
function findFirst<T>(items: T[], searchFunction: (t: T) => boolean): T {
  for (let i = 0; i < items.length; i++) {
    let item: T = items[i];
    if (searchFunction(item)) {
      return item;
    }
  }
  return null;
}

let items: number[] = [1, 4, 7, 9];

let n: number = findFirst(items, (t: number) => t % 2 === 0);
console.log(n);

let items2: string[] = ["one", "two", "three"];
let s: string = findFirst<string>(items2, (s: string) => s.indexOf("wo") != -1);
console.log(s);

////////////////////////////////
// 在接口中使用
interface Pair<F, S> {
  first: F;
  second: S;
}

// 第一个参数为string，第二个参数为number
let p: Pair<string, number> = { first: "rails365", second: 45 };
console.log(p);

interface Command<T, R> {
  id: T;
  // run 是个函数, 函数返回值为 R
  run(): R;
}

// 第一个参数为string,第二个参数为number
let c: Command<string, number> = {
  id: Math.random().toString(36),
  run: function() {
    // 此处需返回number类型的，返回其他类型会报错
    return 99;
  }
};

console.log(c.id);
console.log(c.run());

// 定义接口
interface ElementChecker {
  // 函数 匿名函数，返回值boolean
  <T>(items: T[], toBeChecked: T, atIndex: number): boolean;
}

// 函数实现接口
function checkElementAt<T>(
  elements: T[],
  toBeChecked: T,
  atIndex: number
): boolean {
  return elements[atIndex] === toBeChecked;
}

// 调用函数
// 函数
let checker: ElementChecker = checkElementAt;
let items = [1, 3, 5, 7];
let b: boolean = checker<number>(items, 5, 2);
console.log(b);

let g: boolean = checker<number>(items, 5, 1);
console.log(g);

// 定义接口的key为string， 值为R类型
// interface States<R> {
//  [state: string]: R
// }

// 实现接口的key为string， 值为boolean
// let s: States<boolean> = { 'enabled': true, 'maximized': false };
// console.log(s);
// console.log(s['maximized']);

interface Pair<F, S> {
  first: F;
  second: S;
}

interface States<F, S> {
  [state: string]: Pair<F, S>;
}

let s: States<number, boolean> = {
  enabled: { first: 1, second: true },
  maximized: { first: 2, second: false }
};

console.log(s);
console.log(s["enabled"]);

//////////////////////
// 类的继承实现
interface Collection<T> {
  add(t: T): void;
  remove(t: T): void;
  asArray(): T[];
}

interface Collection1<T> extends Collection<T> {
  getElementAt(index: number): T;
}

class List<T> implements Collection<T> {
  private data: T[] = [];

  constructor(elements: T[]) {
    this.data = elements;
  }

  add(t: T): void {
    this.data.push(t);
  }

  remove(t: T): void {
    let index = this.data.indexOf(t);
    if (index > -1) {
      this.data.splice(index, 1);
    }
  }

  asArray(): T[] {
    return this.data;
  }
}

let numbers: Collection<number> = new List<number>([1, 2, 3]);
numbers.add(4);
numbers.remove(2);
console.log(numbers);

// let strings: Collection<number> = new List<string>(["1, 2, 3", "2"]);

class BookList<T> extends List<T> {}

let bookList: BookList<boolean> = new BookList<boolean>([true, false]);
console.log(bookList);

let bookList1: BookList<number> = new BookList<number>([1, 2]);
console.log(bookList1);

class MovieList extends List<boolean> {}

let movieList: MovieList = new MovieList([true, false]);
console.log(movieList);
