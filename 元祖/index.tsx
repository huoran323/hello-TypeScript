// tuple 跟数组差不多，但是里面的元素是可以多个类型，编译出来的 JavaScript 也是数组

// 元素的个数是固定的，顺序不能变

let my_tuple: [string, number] = ["hello", 100];
console.log(my_tuple[0]); // hello

// 先声明元祖
let my_tuple2: [string, number];
// 声明后的元祖不能赋值为空
// my_tuple2 = []; // 报错

// 元祖的类型顺序不能更改
// my_tuple2 = [100, "hello"]; // 报错

// 元祖的数量必须一致，多或少都不行
// my_tuple2 = ["hello"]; // 报错
