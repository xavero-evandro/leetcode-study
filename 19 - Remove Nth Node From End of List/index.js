/*
Given the head of a linked list, remove the nth node from the end of the list and return its head.

 

Example 1:


Input: head = [1,2,3,4,5], n = 2
Output: [1,2,3,5]
Example 2:

Input: head = [1], n = 1
Output: []
Example 3:

Input: head = [1,2], n = 1
Output: [1]
 

Constraints:

The number of nodes in the list is sz.
1 <= sz <= 30
0 <= Node.val <= 100
1 <= n <= sz
 

Follow up: Could you do this in one pass?

*/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    const dummy = ListNode(-1)
    dummy.next = head

    let firstPointer = dummy
    let secondPointer = dummy

    for (let i = 1; i < n + 1; i++) {
        secondPointer = secondPointer.next
    }

    while (secondPointer.next) {
        firstPointer = firstPointer.next
        secondPointer = secondPointer.next
    }

    firstPointer.next = firstPointer.next.next

    return dummy.next

};

console.log(removeNthFromEnd([1, 2, 3, 4, 5], 2)) //[1,2,3,5]
console.log(removeNthFromEnd([1], 1)) //[]

// IT WORKS ON LEET CODE ENVIRONMENT
// https://www.youtube.com/watch?v=6gI8OMoac4Q