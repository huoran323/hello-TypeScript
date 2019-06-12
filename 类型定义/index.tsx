// 定义类型为number的变量a
let a: number;
var b: boolean;

// 定义完类型后，编译时会进行类型检查
a = 10;
b = true;

// var let const
// var是函数级的作用域
for (var i = 0; i < 10; i++) {
  console.log(i);
}
console.log(i); // 10

// let可以限制变量的作用范围
if (true) {
  let i = 0;
}
console.log(i); //编译报错，超出了作用范围，换成是var的话，则可以正常运行

// var my_name: string = "rails365";
// console.log("my name is" + my_name);

// var my_name: string = "hfpp2012";
// console.log(`my name is ${my_name}`);

// 防止变量的重复定义（相同类型）
let my_name: string = "rails365";
console.log("my name is" + my_name);

my_name = "1111";
console.log(`my name is ${my_name}`);

// const定义常量，不能进行修改
