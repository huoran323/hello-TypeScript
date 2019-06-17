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
