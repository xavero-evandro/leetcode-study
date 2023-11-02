/*
Given a string s, reverse the string according to the following rules:

All the characters that are not English letters remain in the same position.
All the English letters (lowercase or uppercase) should be reversed.
Return s after reversing it.

 

Example 1:

Input: s = "ab-cd"
Output: "dc-ba"
Example 2:

Input: s = "a-bC-dEf-ghIj"
Output: "j-Ih-gfE-dCba"
Example 3:

Input: s = "Test1ng-Leet=code-Q!"
Output: "Qedo1ct-eeLg=ntse-T!"
 

Constraints:

1 <= s.length <= 100
s consists of characters with ASCII values in the range [33, 122].
s does not contain '\"' or '\\'.

*/

/**
 * @param {string} s
 * @return {string}
 */

const isLetter = (char) => {
    const regex = /[a-zA-Z]/
    return regex.test(char);
}

var reverseOnlyLetters = function (s) {
    s = s.split('')
    let start = 0
    let end = s.length - 1
    const regex = /[a-zA-Z]/g
    while (start < end) {
        if (!s[start].match(regex)) {
            start++
            continue
        }
        if (!s[end].match(regex)) {
            end--
            continue
        }
        let tmp = s[start]
        s[start] = s[end]
        s[end] = tmp
        start++
        end--
    }

    return s.join('')

};

console.log(reverseOnlyLetters("ab-cd")) // "dc-ba"
console.log(reverseOnlyLetters("a-bC-dEf-ghIj")) // "j-Ih-gfE-dCba"

// https://www.youtube.com/watch?v=XooJeeK5G0U