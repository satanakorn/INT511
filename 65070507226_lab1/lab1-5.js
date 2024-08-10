function convertTwoDimension(arr) {
    var n = Math.sqrt(arr.length);
    var result = Array.from({ length: n }, function () { return Array(n).fill(0); });
    for (var i = 0; i < n; i++) {
        for (var j = 0; j < n; j++) {
            result[i][j] = arr[i * n + j];
        }
    }
    return result;
}
var arr = [1, 2, 3, 4, 5, 6];
console.log(convertTwoDimension(arr));
