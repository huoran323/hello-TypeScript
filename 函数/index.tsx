// 函数的两种写法
// function add(a: number, b: number) {
//   return a + b;
// }
// const add = (a: number, b: number): number => a + b;

// 括号后面接的是函数的返回值类型
// const add = (a: number, b: number): number => a + b;
// let sum = add(10, 20);
// console.log(sum);

// const add = (a: number, b: number): string => {
//   return a.toString() + b.toString();
// };
// let sum = add(10, 20);
// console.log(sum);

// 无返回值
// const add = (a: number, b: number): void => {
//   console.log(a + b);
// };
// add(10, 20);

// 函数默认值 默认参数可以不指定类型，会自动判断和计算
// 如果不传参的时候，使用函数默认值；如果传参，则使用传入的参数值
// const add = (a: number, b: number = 10): void => {
//   console.log(a + b);
// };
// add(10);

// 如果函数的第一个参数作为默认值，则调用的时候，必须传入参数，否则会报错
// const add = (a: number = 10, b: number): void => {
//   console.log(a + b);
// };
// add(10); // 报错

// 如果函数传参 加问号，则变成可选参数，在函数体内部需要进行判断，否则进行逻辑运算的时候会报错
// const add = (a: number = 10, b?: number): void => {
//   if (b) {
//     console.log(a + b);
//   } else {
//     console.log(a);
//   }
// };
// add(10); // 这样不会报错，会进行判断
// add();

// 函数 - Rest Parameters,当传入的参数不确定时，使用...
const add = (a: number, ...num: number[]): number => {
  return num.reduce(function(total, num) {
    return total + num;
  }, a);
};

let sum = add(20, 20, 30, 40);
console.log(sum);
