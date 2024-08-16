var arr: number[] = [1,2,3,4,5,6]

function convertTwoDimension(arr: number[]) {
    let result: number[][] = []
    for (let i = 0; i < arr.length; i += 3) {
        result.push([arr[i], arr[i + 1], arr[i + 2]])
    }
    return result
}
console.log('result is ', convertTwoDimension(arr))