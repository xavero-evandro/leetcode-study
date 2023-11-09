/*
Given a string s, find the length of the longest 
substring
 without repeating characters.

 

Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 

Constraints:

0 <= s.length <= 5 * 104
s consists of English letters, digits, symbols and spaces.
*/
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let longestStrCount = 0;
    let strSet = new Set();
    let left = 0;
    let right = 0;

    while (right < s.length) {
        const letter = s[right];

        if (!strSet.has(letter)) {
            strSet.add(s[right]);

            longestStrCount = Math.max(longestStrCount, strSet.size);

            right++;
        } else {
            strSet.delete(s[left]);

            left++;
        }
    }

    return longestStrCount

};

console.log(lengthOfLongestSubstring("abcabcbb")); // 3
console.log(lengthOfLongestSubstring("bbbbb")); // 1


// https://www.youtube.com/watch?v=i1edO6FkGm0