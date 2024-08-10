function convertTwoDimension(arr: number[]) { 
    const n = Math.sqrt(arr.length);
    const result: number[][] = Array.from({length: n}, () => Array(n).fill(0));
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            result[i][j] = arr[i * n + j];
        }
    }
    return result; 

}

let arr: number[] = [1,2,3,4,5,6]
console.log('result is ', convertTwoDimension(arr))