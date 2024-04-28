//Strings
let str: string = "Hello";
str = `Hello, ${123}`;
console.log(str);



//Numbers
let a: number = 11;
let floatingPoint: number = 5.5;
let hex: number = 7e4;
let binary: number = 1001101;
console.log(a);



//Booleans
let hasAuth: boolean = true;
const isGreater: boolean = 5 > 7;
const hasTwo = [1, 2, 3, 4].some((e) => e === 2);
const isBool: boolean = true;
console.log(isBool);



//Symbols
let sym1 = Symbol("key");
let sym2 = Symbol("key");
console.log(sym1 === sym2);



//Undefined
let user: Object | undefined;
let person: Object | null = null;
console.log({ user });
console.log({ person });

setTimeout(() => {
  user = { name: "user123" };
  console.log({ user });
  person = { name: "Mitko" };
  console.log({ person });
}, 3000);



//Arrays
const arr1: number[] = [1, 2, 3, 4];
const arr2: Array<number> = [2, 3, 4, 5];
const arr3: string[] = ["Hello", " its ", " me!"];
const arr4: boolean[] = [true, true, false, true];
const arr5: any[] = [12, "Google", true, { name: "person123" }];
console.log(arr5);



// Tuples key value
let tuple1: [number, string] = [123, "Hi!"];
let tuple2: [boolean, object] = [true, { name: "Mitko" }];
let tupleObjKey: [string, object] = ["user", { name: "User123" }];
console.log(tuple2);



