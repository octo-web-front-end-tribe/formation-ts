// Function
function add1(x: number, y: number): number {
    return x + y;
}
add1(3, 4); // returns 7
add1(3); // error, few parameters

// Function with optional parameters
function add2(x: number, y?: number): number {
    return x + y;
}
add2(3); // returns 3

// Function with default parameter
function add3(x: number, y: number = 1): number {
    return x + y;
}
add3(3); // returns 4



