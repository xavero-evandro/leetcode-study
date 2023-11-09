/*
Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

 

Example 1:

Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]
Example 2:

Input: nums = [1], k = 1
Output: [1]
 

Constraints:

1 <= nums.length <= 105
-104 <= nums[i] <= 104
k is in the range [1, the number of unique elements in the array].
It is guaranteed that the answer is unique.
 

Follow up: Your algorithm's time complexity must be better than O(n log n), where n is the array's size.
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
    const bucket = []
    const freqMap = {}

    // create frequency map
    for (let num of nums) {
        freqMap[num] = freqMap[num] + 1 || 0
    }

    // create bucket with frequency as index
    for (let key in freqMap) {
        const freq = freqMap[key]
        if (!bucket[freq]) bucket[freq] = []
        bucket[freq].push(key)
    }

    // iterate bucket from end and push to result
    const result = []
    for (let i = bucket.length - 1; i >= 0; i--) {
        if (bucket[i]) result.push(...bucket[i])
        if (result.length >= k) break
    }

    return result

};

console.log(topKFrequent([1, 1, 1, 1, 2, 2, 3, 3, 4], 2)); // [1,2,3]
console.log(topKFrequent([1], 1)); // [1]
console.log(topKFrequent([1, 2], 2)); // [1,2]

// https://www.youtube.com/watch?v=EBNPu0GgM64