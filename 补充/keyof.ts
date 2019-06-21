class A {
  x: number = 5;
}

// keyof限制对象的取值范围
// keyof y的取值只能是A的一个属性名，这里只能是x
let y: keyof A;
y = "x";

class Test {
  x: number = 6;
}

function getProp(a: keyof Test, test: Test): any {
  return test[a];
}

let t: Test = new Test();
let prop = getProp("x", t);
console.log(prop); // 6

class B {
  y: keyof A;

  getAProp(a: A): any {
    return a[this.y];
  }
}

let b: B = new B();
b.y = "x";
let prop1 = b.getAProp(new A());
console.log(prop1);
