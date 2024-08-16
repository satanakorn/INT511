function convertNIToBR(text) {
    return text.split('\n').join('<br>');
}
var text = "Program\n JavaScript\n TypeScript";
console.log(convertNIToBR(text));
