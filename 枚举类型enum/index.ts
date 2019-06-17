// 枚举类型
// 它的值是数字序号，从0开始
// 代码可读性强
//
enum daysOfTheWeek {
  SUN,
  MON,
  TUE,
  WED,
  THU,
  FRI,
  SAT
}

// 定义类型
let day: daysOfTheWeek;
day = daysOfTheWeek.MON;
console.log(day);

if (day === daysOfTheWeek.MON) {
  console.log("周一");
}
