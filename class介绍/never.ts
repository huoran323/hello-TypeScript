// The never type is used when you are sure that something is never going to occur. For example, you write a function which will not return to its end point or always throws an exception.

// 没有返回，不期待

// 1. 无限循环，代码不可到达
// 2. 抛出异常

// void: 有返回值，期待返回

// 可以简单理解为返回的类型为空，代码可能继续运行

function sayHi(): void {
  console.log("Hi");
}

let a: void = sayHi();
console.log(a);

// 无限循环，没有返回值
// 用never类型表示没有返回值，没有输出值的类型
function loopForever(): never {
  // 无限循环
  while (true) {}
}

function terminateWithError($msg: string): never {
  throw new Error($msg);
}

function checkExhaustiveness(x: never): never {
  throw new Error("类型出错: " + x);
}

function showTrueFalse(x: string | boolean): void {
  if (typeof x === "string") {
    console.log("string: " + x);
  }

  // else if (typeof x === 'boolean') {
  //  console.log("boolean " + x);
  // }

  // 当传入一个 boolean 类型，编译器就会处理下面的代码
  // 就会把 boolean 类型的值赋值给 never 类型，就会报错
  // 可以简单理解为 boolean 是可以到达的类型
  else {
    // 传入别的类型，不是 string 或 boolean，编译器会处理
    // x 可能是一个不可到达的类型，可以分配给 never
    // 当传入错误的类型的时候，可以分配 给 never 类型
    checkExhaustiveness(x);

    // x 可能是 boolean 类型
    // let temp: never = x;
  }
}

// never 是很多类型的子类型
// 不能把 number string 等类型或值分配给 never
// let something: void = null;
// let nothing: never = 12;

showTrueFalse(true);
showTrueFalse("false");
