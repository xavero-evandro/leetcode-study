// https://www.youtube.com/watch?v=VtX4oVMXaMM

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    if (nums.length === 0) {
        return 0;
    }
    let k = 1;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[k - 1]) {
            nums[k] = nums[i]
            k++
        }
    }
    return k
};

console.log(removeDuplicates([1, 2, 2]) === 2)
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]) === 5)
