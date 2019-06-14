// 类的定义
// class Person {
//   firstName: string;
//   lastName: string;
// }

// let aPerson = new Person();
// // 设置firstName的内容
// aPerson.firstName = "hello";
// console.log(aPerson.firstName);

/******************************************* */
// class Movie {
//   name: string;
//   play_count: number;
//   created_at: string;
//   time: string;

//   // 构造方法
//   constructor(name: string, count: number) {
//     this.name = name;
//     this.play_count = count;
//   }

//   // method 定义方法 可能会对数据进行操作
//   display_play_count(padding: string = "***") {
//     return `${this.play_count} 次数 ${padding}`;
//   }

//   increase_play_count() {
//     this.play_count += 1;
//   }
// }
// // 生成一个object
// let m = new Movie("hello world", 15);
// console.log(m.name);
// console.log(m.display_play_count());
// m.increase_play_count();

/*********************继承与多态*************************** */
// class Person {
//   firstName: string;
//   lastName: string;

//   greet() {
//     console.log("hello");
//   }

//   otherGreet() {
//     this.greet();
//     console.log("world");
//   }
// }

// //继承了父类的属性和方法
// class Programmer extends Person {
//   // 重写父类方法，调用方法时，先找自己本身对象的方法，如果没有，则找父类的
//   greet() {
//     console.log("hi");
//   }

//   // suoer 代表父类
//   greet2() {
//     // 调用父类的greet方法
//     super.greet();
//   }
// }

// let p = new Person();
// p.greet();

// // :后面可以定义类型
// let aProgrammer: Programmer = new Programmer();
// aProgrammer.greet();

// // 多态
// let aProgrammer2: Programmer = new Programmer();
// aProgrammer2.otherGreet();

/*********************public, private, *************************** */
// 三个修饰符对成员属性和方法进行修饰

// public 公有的，任何属性和方法都可以在生成的对象中调用，
//              继承的对象也能调用，
//               默认就是 public，只是省略了

// private 私有的，只有在内部对象内才能访问，生成的对象调用不了，
//                要调用私有方法和属性，可以在 class 里定义 public 的方法来调用
//           继承的对象也是不能够直接用生成的对象来访问
//           子类继承的时候也可以继承私有属性和方法，也是要通过继承过来的 public 方法来调用

// protected 受保护的，只有在内部 class  还有子类才能访问，生成的对象访问不了，
//                 要调用私有方法和属性，可以在 class 里定义 public 的方法来调用
//           继承的对象也是不能够直接用生成的对象来访问
//           子类继承的时候也可以继承保护的属性和方法，也是要通过继承过来的 public 方法和自己定义的public方法来在外部调用（这点跟其他的语言有些不太一样）

// 外部调用：生成对象的时候
// 内部调用：class 里面的方法

// private protected异别： 在子类的时候
//         1 继承的方法一样的表现形式，可以内部访问继承过来的 public private protected 属性和方法
//              2 子类定义的方法，只能访问 继承过来的 public 和 protected 的方法和属性，不能访问 继承过来的 private 属性和方法，如果要访问父类的  private 属性和方法，可以通过继承过来的public private protected方法在内部来访问

// 权限范围 public > protected > private
class Person {
  public firstName: string;
  private lastName: string;
  protected name: string;

  public greet() {
    console.log("hello");
  }

  public otherGreet() {
    this.greet();
    console.log("world");
  }

  protected sayHi() {
    console.log("Hi");
  }

  getLastName() {
    console.log(this.lastName);
  }

  setLastName(lastName: string) {
    this.lastName = lastName;
  }
}

let p = new Person();
p.firstName = "haha";
console.log(p.firstName);
// laseName为私有属性，访问不到； 只能在内部访问到
// p.lastName = "hehe";
p.setLastName("world");
p.getLastName();

// constructor
// 构造方法

// 如果申明为protected
// 或者 private ，当前类不能 new

//   当父类申明为 protected，子类重写 constructor 方法后可以 new （子类可以 new ）

// 如果父类申明为 private, 子类不能 new 和 extends

// super() 在constructor方法中是调用父类的 构造方法，必要时，要传入参数。

// 作用

// 1， 当不想被实例化，而只想让子类继承后实例化，可以申请为 protected

// 2. 都不想让子类和父类实例化或继承，可以申请为 private

// 3. 一般情况下，申请为 public(或不写）
