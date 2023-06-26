/* eslint-disable */
let personname: string = 'Luiz';
let age: number = 30;
let adult: boolean =  true;
let symbol = Symbol('qualquer-symbol')
let big: bigint = 10n;

//Arrays
let arrayofNumbers: Array<number> = [1, 2, 3];
let arrayofNumbers2: number[] = [1, 2, 3];
let arrayofStrings: Array<string> = ['a', 'b', 'c']
let arrayofStrings2: string[] = ['a', 'b', 'c']

//Objects
let person: {name: string, age: number, adult?: boolean} = {
    age: 19,
    name: "Joseph"
} // "?" optional

//Functions

function sum(x: number, y: number): number {
    return x + y;
}

const result = sum(2, 2)

const sum2: (x: number, y: number) => number = (x, y) => x+y;