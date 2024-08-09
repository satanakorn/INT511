
function removeItemFromArray(arr :Array <number>) {
    return arr.splice(1 , 1)
}

let arr: Array < number > = [10,30,20,50,40]

console.log(removeItemFromArray(arr) , "ตำแหน่งที่ถูกลบไป")
console.log(arr, "ตัวที่เหลือ")