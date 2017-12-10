// Any
let notSure: any = 4;
notSure = 'maybe a string instead';
notSure = false // ok, definitley a boolean

// Boolean
let isDone: boolean = false;

// Number
let decimal: number = 6;

// Simple string
let color: string = 'blue';
color = 'red';

// Strings with expressions
let fullName: string = `Bob Bobbington`;
let age: number = 37;
let sentence1: string = `Hello, my name is ${ fullName }. I'll be ${ age + 1} years old next month.`;

let sentence2: string = 'Hello, my name is ' + fullName + '. I\'ll be ' + (age + 1)  + ' years old next month.';