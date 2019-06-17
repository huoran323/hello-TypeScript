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
