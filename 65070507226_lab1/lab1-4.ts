function convertNIToBR(text: String) : String {
    return text.split('\n').join('<br>')
}

var text: String = "Program\n JavaScript\n TypeScript"

console.log(convertNIToBR(text))