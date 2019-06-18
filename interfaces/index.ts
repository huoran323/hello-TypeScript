// // 接口类型
// // 传过来的参数必须包含接口定义的属性和方法
// interface Named {
//   // 属性
//   name: string;
//   // 方法 一般都会写上返回值; 没有方法体，具体的对象中实现方法体
//   print(name: string): void;
// }

// // 函数
// // 只要传过来的参数 o 含有name属性就可以进行调用
// // o 可以是一个接口类型，这个接口类型要有name属性
// // 定义o为接口类型 ，可以传入一个对象
// const sayName = (o: Named) => {
//   o.print(o.name);
//   console.log(o.name);
// };

// // 对象
// const person = {
//   age: 27,
//   name: "huoran",
//   print: name => {
//     console.log(name);
//   }
// };
// sayName(person);

// const bottle = {
//   name: "漂流瓶",
//   litres: 1
// };
// sayName(bottle);

// class Person1 {
//   name: string;
// }
// let p1 = new Person1();
// p1.name = "haha";
// sayName(p1);

// 定义接口
interface Person {
  name: string;

  greet(): void;
}

// 定义类实现Person这个接口
class Employee implements Person {
  name: string;

  greet(): void {
    console.log("hehe");
  }
}

let em = new Employee();
em.greet();

let em2: Person = new Employee();
em2.greet();

//////////////////////////////////
// 示例
// 支付接口
interface Pay {
  post(): void;
}
// 可能会发送 http 请求
// 真正支付的请求
const do_pay = (pay: Pay) => {
  // 有一些逻辑
  console.log("do_pay");
  // pay相当于是实现这个接口的类对象，调用类对象中的接口方法(post)
  pay.post();
};

// 微信支付
class WePay implements Pay {
  // 调微信支付的接口
  post() {
    console.log("WePay");
  }
}

// 支付宝支付
class AliPay implements Pay {
  // 调支付宝支付的接口
  post() {
    console.log("AliPay");
  }
}

// 其他的支付接口
let we_pay: Pay = new WePay();
let ali_pay: Pay = new AliPay();

// 微信支付
do_pay(we_pay); // 先进行do_pay中的一些逻辑运算，再执行微信支付中的post

// 支付宝支付
do_pay(ali_pay);

//////////////////////////////////////////

/// 继承与实现多个接口
interface Person {
  name: string;
}

interface Employee {
  age: number;
}

// 继承另一个接口 Person
// 会继承 Person 的属性的方法
interface Programmer extends Person {
  age: number;
}

let p: Programmer = {
  age: 27,
  name: "rails365"
};

// 类不能继承多个类，也就是说不能有多个父类
// 但可以实现多个接口
// 每个接口的属性和方法都要实现
class P implements Person, Employee {
  name: string;
  age: number;
}

let p1: P = {
  name: "rails365",
  age: 25
};

let p2: Person = p1;

let p3: Employee = p1;

////////////////////////////////////////
// 接口继承类
// 定义类的属性和方法
class Component {
  private width: number;
  private height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  display(): void {
    console.log(this.height);
  }
}

// 接口继承类，可以继承多个类
// 继承类的方法和属性，但可以不用实现方法
// 也可以定义自己的方法和属性（定义了自己的属性和方法后，实现接口的类，需要实现这些属性和方法）
interface Widget extends Component {
  hide(): void;
}

class Button extends Component implements Widget {
  hide(): void {
    console.log("hiding");
  }
}

let w: Widget = new Button(1, 2);
console.log(w);
w.display();
w.hide();

//////////////////////////////////////
// 接口索引属性
// 索引属性一定是string或number
interface States {
  [index: string]: boolean;
}

let s: States = { enabled: true, maximized: false };
console.log(s);
console.log(s["enabled"]);

interface States1 {
  // An index signature parameter type must be 'string' or 'number'.
  // number索引可以是一个数组
  // 这种方式定义的数组没有 push length join 等属性或方法
  [index: number]: number;
}

let s1: States1 = [12, 34, 45, 1];
console.log(s1);
console.log(s1[0]);

let s2: number[] = [1, 2, 3];

// let x = {a: 1, b: 2};
// x['a'] // 1
// x['b'] // 2
