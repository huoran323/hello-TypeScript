// 可选属性 只读属性
interface Person2 {
  // 只读 不可修改
  readonly first_name: string;
  last_name?: string; //变成可选属性，实现这个接口的类或对象可以不包含可选属性

  print?(): void; //可选方法
}

let person = {
  first_name: "haha"
  //   last_name: "hehe"
};

const sayName = (o: Person2) => {
  console.log(o.first_name);
};

sayName(person);

// 类型断言 接口Person2中没有age这个属性，加上类型断言后可使用
sayName({ first_name: "hfpp2012", last_name: "rails365", age: 27 } as Person2);

interface PrintCallback {
  // 可以简单理解为匿名函数
  (success: boolean): void;
}

let printCallback: PrintCallback;
printCallback = (suc: boolean) => {};
