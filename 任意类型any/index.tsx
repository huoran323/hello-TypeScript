let a: any;

a = 10;
a = "hello";

const log = (value: any) => {
  console.log(typeof value);
  if (typeof value === "number") {
    return `your number is ${value}`;
  }

  if (typeof value === "string") {
    return `your name is ${value}`;
  }

  throw new Error(`Expected string or number, got ${value}.`);
};
console.log(log(10));

// 定义任意类型的数组
let b: any[];
b = [1, 2, "2012", [1, 2]];
