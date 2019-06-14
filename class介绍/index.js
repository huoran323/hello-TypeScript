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
// // 默认属性和方法名都是public
var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.greet = function () {
        console.log("hello");
    };
    Person.prototype.otherGreet = function () {
        this.greet();
        console.log("world");
    };
    Person.prototype.getLastName = function () {
        console.log(this.lastName);
    };
    Person.prototype.setLastName = function (lastName) {
        this.lastName = lastName;
    };
    return Person;
}());
var p = new Person();
p.firstName = "haha";
console.log(p.firstName);
// laseName为私有属性，访问不到； 只能在内部访问到
// p.lastName = "hehe";
p.setLastName("world");
p.getLastName();
