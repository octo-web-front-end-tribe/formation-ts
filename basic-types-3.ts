// Tuples
let x: [string, number];
x = ["hello", 10]; // OK
x = [10, "hello"]; // Error

// Null and Undefined
let u: undefined = undefined;
let n: null = null;

// Type Assertions
let someValue: any = 'this is a string';

let strLength: number;
strLength = (<string>someValue).length;
strLength = (someValue as string).length;