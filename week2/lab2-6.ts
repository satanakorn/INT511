function largestAmongTheeNum(num1, num2, num3) {
    return Math.max(num1, num2, num3);
}

//console.log(largestAmongTheeNum(15, 79, 38));

function removeItemFromArray(arr :number[]) {
    return arr.splice(1 , 1)
    //return Array เพิ่มเติม return ตัวที่ส่งเข้ามาผ่านตัว parameter 
}

export let arr1: number[]= [10,30,20,50,40]
//console.log(removeItemFromArray(arr1) , "ตำแหน่งที่ถูกลบไป")
//console.log(arr1, "ตัวที่เหลือ")



function convertNIToBR(text: String) : String {
    return text.split('\n').join('<br>')
}

export var text: String = "Program\n JavaScript\n TypeScript"
//console.log(convertNIToBR(text))


export var arr: number[] = [1,2,3,4,5,6]

function convertTwoDimension(arr: number[]) {
    let result: number[][] = []
    for (let i = 0; i < arr.length; i += 3) {
        result.push([arr[i], arr[i + 1], arr[i + 2]])
    }
    return result
}
//console.log('result is ', convertTwoDimension(arr))

export {largestAmongTheeNum , removeItemFromArray , convertNIToBR , convertTwoDimension};