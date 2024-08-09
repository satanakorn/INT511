function removeItemFromArray(arr) {
    return arr.splice(1, 1);
}
var arr = [10, 30, 20, 50, 40];
console.log(removeItemFromArray(arr), "ตำแหน่งที่ถูกลบไป");
console.log(arr, "ตัวที่เหลือ");
