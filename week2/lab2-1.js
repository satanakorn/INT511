function largestAmongTheeNum(num1: number , num2: number , num3: number) : number { 
    return Math.max(num1, num2, num3);
}
let num1 = 15;
let num2 = 79;
let num3 = 38;

console.log(`The largest number is ${largestAmongTheeNum(num1, num2, num3)}`);

