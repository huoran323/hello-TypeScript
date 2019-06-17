// 接口类型
// 传过来的参数必须包含接口定义的属性和方法
interface Named {
  // 属性
  name: string;
  // 方法 一般都会写上返回值; 没有方法体，具体的对象中实现方法体
  print(name: string): void;
}

// 函数
// 只要传过来的参数 o 含有name属性就可以进行调用
// o 可以是一个接口类型，这个接口类型要有name属性
// 定义o为接口类型 ，可以传入一个对象
const sayName = (o: Named) => {
  o.print(o.name);
  console.log(o.name);
};

// 对象
const person = {
  age: 27,
  name: "huoran",
  print: name => {
    console.log(name);
  }
};
sayName(person);

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
