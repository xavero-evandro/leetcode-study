/*
Leet Code 367. Valid Perfect Square
Given a positive integer num, return true if num is a perfect square or false otherwise.
A perfect square is an integer that is the square of an integer. In other words, it is the product of some integer with itself.
You must not use any built-in library function, such as sqrt.
Example 1:
Input: num = 16
Output: true
Explanation: We return true because 4 * 4 = 16 and 4 is an integer.
Example 2:
Input: num = 14
Output: false
Explanation: We return false because 3.742 * 3.742 = 14 and 3.742 is not an integer.
Constraints:
1 <= num <= 231 - 1
*/

const isPerfectSqaureMaths = (num) => {
  let oddNumber = 1
  let sum = 1

  while (sum <= num) {
    if (sum === num) {
      return true
    }
    oddNumber += 2
    sum += oddNumber
  }

  return false
}

const isPerfectSquareBinary = (num) => {
  if (num < 0) return false
  if (num === 0 || num === 1) return true
  let start = 1
  let end = num
  while (start <= end) {
    const mid = Math.floor((start + end) / 2)
    const square = mid * mid
    if (square === num) {
      return true
    } else if (square < num) {
      start = mid + 1
    } else {
      end = mid - 1
    }
  }
  return false

}


console.log(`############################`)
console.log(`----------BINARY------------`)
console.log(`############################`)
console.log(isPerfectSquareBinary(0)) // false
console.log(isPerfectSquareBinary(-10)) // false
console.log(isPerfectSquareBinary(14)) // false
console.log(isPerfectSquareBinary(2)) // false
console.log(isPerfectSquareBinary(3)) // false
console.log(isPerfectSquareBinary(5)) // false
console.log(isPerfectSquareBinary(231)) // false
console.log(isPerfectSquareBinary(16)) // true
console.log(isPerfectSquareBinary(1)) // true
console.log(isPerfectSquareBinary(4)) // true

console.log(`############################`)
console.log(`----------MATHEMATICS-------`)
console.log(`############################`)
console.log(isPerfectSqaureMaths(0)) // false
console.log(isPerfectSqaureMaths(-10)) // false
console.log(isPerfectSqaureMaths(14)) // false
console.log(isPerfectSqaureMaths(2)) // false
console.log(isPerfectSqaureMaths(3)) // false
console.log(isPerfectSqaureMaths(5)) // false
console.log(isPerfectSqaureMaths(231)) // false
console.log(isPerfectSqaureMaths(16)) // true
console.log(isPerfectSqaureMaths(1)) // true
console.log(isPerfectSqaureMaths(4)) // true
