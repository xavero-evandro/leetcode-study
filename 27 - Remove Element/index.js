/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
    let count = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[count] = nums[i]
            count++
        }
    }
    return count
}

// const result = removeElement([3, 2, 2, 3], 3)
const result2 = removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2)

// console.log(result === 2)
console.log(result2 === 5)

//https://www.youtube.com/watch?v=O0lPTInI6io