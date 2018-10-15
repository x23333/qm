// 布尔值
let isDone: boolean = false;
isDone = true;
// 数字
let decLiteral: number = 6;
decLiteral =7 ;
let henLiteral: number = 0xf00d;
let binaryLiteral:number = 0b1010;
let octalLiteral: number = 0o744;
// 字符串
let nickname: string = "boob";
let age: number = 37;
let sentance: string = `Hello, myname is${nickname}
I'll be ${age++} years old next month`;
// 数组
let list:  number[] = [1,2,3];//只能数字的数组
let list2: Array<number> = [1,2,3];//另一种声明方式
// 任意类型
let notSure: any = 4;
notSure = 'ghghh';