// let my_name: string = "haha";

// 类型别名
type Name = string;
let my_name: Name = "haha";

type Name2 = [string, number];
let my_name2: Name2 = ["haha", 22];

// 不能重复定义
type User = {
  name: string;
  age: number;
};
const user: User = {
  name: "haha",
  age: 22
};
const user1: { name: string; age: number } = {
  name: "hehe",
  age: 20
};

// 类型断言
// x 代表可以是任何类型，比如字符串 number 之类的
let x: any = "hi there";
// x 可以是任何类型，编译器可能不能明确知道 x 是哪种类型
// <string> 表示把 x 断言成字符串类型，就是告诉编译器要把 x 当成字符串，这样
// 就可以调用 substring 函数，因为字符串才有这个函数
let s = (<string>x).substring(0, 3);
console.log(typeof s);

// 编译器可能不知道明确的类型，因为可以是两者之一
function getLength(something: string | number): number {
  if ((<string>something).length) {
    return (<string>something).length;
  } else {
    return something.toString().length;
  }
}

interface Person {
  name: string;
  age: number;
}
// 另一种类型断言的方式 as
// 更好的明确类型和类型里面的结构
let person1 = {} as Person;
person1.name = "rails365";
person1.age = 27;

// 一种写法
// react <div></div>
// let person1 = <Person>{
//   name: "rails365",
//   age: 27
// };

// let person: Person = {
//   name: "rails365",
//   age: 27
// };
