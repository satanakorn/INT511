"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = require("fs");
(0, fs_1.readFile)('C:/Users/satan/OneDrive/Desktop/year 3/week2/test.txt', 'utf8', function (err, data) {
    if (err) {
        console.log(err);
    }
    console.log(data);
});
var readFilePromise = function (filePath) {
    return new Promise(function (resolve, reject) {
        (0, fs_1.readFile)(filePath, 'utf8', function (err, data) {
            if (err) {
                reject(err);
            }
            resolve(data);
        });
    });
};
function callBackPath(FilePath) {
    return new Promise(function (resolve, reject) {
        (0, fs_1.readFile)(FilePath, 'utf8', function (err, data) {
            if (err) {
                reject(err);
            }
            resolve(data);
        });
    });
}
readFilePromise('C:/Users/satan/OneDrive/Desktop/year 3/week2/test.txt').then(function (data) { return console.log(data); }).catch(function (err) { return console.log(err); });
// callBackPath('C:/Users/satan/OneDrive/Desktop/year3/week2/test.txt').then(data => console.log(data)).catch(err => console.log(err))}
callBackPath('C:/Users/satan/OneDrive/Desktop/year 3/week2/test.txt').then(function (data) { return console.log(data); }).catch(function (err) { return console.log(err); });
