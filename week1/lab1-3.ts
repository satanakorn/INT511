function removeItemFromArray(arr :number[]) {
    return arr.splice(1 , 1)
    //return Array เพิ่มเติม return ตัวที่ส่งเข้ามาผ่านตัว parameter 
}

let arr: number[]= [10,30,20,50,40]
console.log(removeItemFromArray(arr) , "ตำแหน่งที่ถูกลบไป")
console.log(arr, "ตัวที่เหลือ")