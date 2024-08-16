"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.arr = exports.text = exports.arr1 = void 0;
exports.largestAmongTheeNum = largestAmongTheeNum;
exports.removeItemFromArray = removeItemFromArray;
exports.convertNIToBR = convertNIToBR;
exports.convertTwoDimension = convertTwoDimension;
function largestAmongTheeNum(num1, num2, num3) {
    return Math.max(num1, num2, num3);
}
//console.log(largestAmongTheeNum(15, 79, 38));
function removeItemFromArray(arr) {
    return arr.splice(1, 1);
    //return Array เพิ่มเติม return ตัวที่ส่งเข้ามาผ่านตัว parameter 
}
exports.arr1 = [10, 30, 20, 50, 40];
//console.log(removeItemFromArray(arr1) , "ตำแหน่งที่ถูกลบไป")
//console.log(arr1, "ตัวที่เหลือ")
function convertNIToBR(text) {
    return text.split('\n').join('<br>');
}
exports.text = "Program\n JavaScript\n TypeScript";
//console.log(convertNIToBR(text))
exports.arr = [1, 2, 3, 4, 5, 6];
function convertTwoDimension(arr) {
    var result = [];
    for (var i = 0; i < arr.length; i += 3) {
        result.push([arr[i], arr[i + 1], arr[i + 2]]);
    }
    return result;
}
