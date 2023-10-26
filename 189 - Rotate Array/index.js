/*
Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.

 

Example 1:

Input: nums = [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4]
Explanation:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]
Example 2:

Input: nums = [-1,-100,3,99], k = 2
Output: [3,99,-1,-100]
Explanation: 
rotate 1 steps to the right: [99,-1,-100,3]
rotate 2 steps to the right: [3,99,-1,-100]
 

Constraints:

1 <= nums.length <= 105
-231 <= nums[i] <= 231 - 1
0 <= k <= 105
 

Follow up:

Try to come up with as many solutions as you can. There are at least three different ways to solve this problem.
Could you do it in-place with O(1) extra space?
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {

    // Solution 1: Brute Force
    // Time Complexity: O(n*k)
    // Space Complexity: O(1)
    // for (let i = 0; i < k; i++) {
    //     let previous = nums[nums.length - 1];
    //     for (let j = 0; j < nums.length; j++) {
    //         let temp = nums[j];
    //         nums[j] = previous;
    //         previous = temp;
    //     }
    // }

    // Solution 2: Using Extra Array
    // Time Complexity: O(n)
    // Space Complexity: O(n)
    // let a = new Array(nums.length);
    // for (let i = 0; i < nums.length; i++) {
    //     a[(i + k) % nums.length] = nums[i];
    // }
    // for (let i = 0; i < nums.length; i++) {
    //     nums[i] = a[i];
    // }

    // Solution 3: Using Cyclic Replacements
    // Time Complexity: O(n)
    // Space Complexity: O(1)
    k = k % nums.length; // 3 % 7 = 3
    let count = 0;
    for (let start = 0; count < nums.length; start++) {
        let current = start;
        let prev = nums[start];
        do {
            let next = (current + k) % nums.length;
            let temp = nums[next];
            nums[next] = prev;
            prev = temp;
            current = next;
            count++;
        }
        while (start != current);
    }

    return nums;

};

console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3)); // [5,6,7,1,2,3,4]
console.log(rotate([-1, -100, 3, 99], 2)); // [3,99,-1,-100]


// https://www.youtube.com/watch?v=NNkSsmZYU7s