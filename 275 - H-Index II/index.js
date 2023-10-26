/*
Given an array of integers citations where citations[i] is the number of citations a researcher received for their ith paper and citations is sorted in ascending order, return the researcher's h-index.

According to the definition of h-index on Wikipedia: The h-index is defined as the maximum value of h such that the given researcher has published at least h papers that have each been cited at least h times.

You must write an algorithm that runs in logarithmic time.

 

Example 1:

Input: citations = [0,1,3,5,6]
Output: 3
Explanation: [0,1,3,5,6] means the researcher has 5 papers in total and each of them had received 0, 1, 3, 5, 6 citations respectively.
Since the researcher has 3 papers with at least 3 citations each and the remaining two with no more than 3 citations each, their h-index is 3.
Example 2:

Input: citations = [1,2,100]
Output: 2
 

Constraints:

n == citations.length
1 <= n <= 105
0 <= citations[i] <= 1000
citations is sorted in ascending order.
*/

/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function (citations) {
    let start = 0;
    let end = citations.length - 1;
    let mid;
    while (start <= end) {
        mid = Math.floor((start + end) / 2);
        if (citations[mid] === citations.length - mid) {
            return citations[mid];
        } else if (citations[mid] < citations.length - mid) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    return citations.length - start;

};


console.log(hIndex([0, 1, 3, 5, 6])) // 3
console.log(hIndex([1, 2, 100])) // 2
console.log(hIndex([0, 1, 3, 5, 6, 7, 9])) // 4

// https://www.youtube.com/watch?v=5D86u5UbdDU