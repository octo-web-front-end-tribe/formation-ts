// Array
let list1 : number[] = [1, 2, 3];
let list2 : Array<number> = [1, 2, 3];

// Enum
enum Color {Red, Green, Blue}
let c: Color = Color.Green;

// Function
let myAdd1 = function(x: number, y: number): number { return x + y; };

let myAdd2: (baseValue: number, increment: number) => number = 
function(x: number, y: number): number { return x + y; };

// Void
function warnUser(): void {
    alert('This is my warning message');
} 


