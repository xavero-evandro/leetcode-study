const array = [5, 1, 22, 25, 6, -1, 8, 10]
const sequence = [1, 6, -1, 10]
// Output: true
function isValidSubsequenceWhile(array, sequence) {
    let arrayIndex = 0
    let sequenceIndext = 0

    while (arrayIndex < array.length && sequenceIndext < sequence.length) {
        if (array[arrayIndex] === sequence[sequenceIndext]) {
            sequenceIndext++
        }
        arrayIndex++
    }
    return sequenceIndext === sequence.length
}

function isValidSubsequenceFor(array, sequence) {
    let sequenceIndext = 0

    for (const value of array) {
        if (sequenceIndext === sequence.length) return true
        if (sequence[sequenceIndext] === value) sequenceIndext++
    }
    return sequenceIndext === sequence.length
}

// console.log(isValidSubsequenceWhile(array, sequence))
console.log(isValidSubsequenceFor(array, sequence))