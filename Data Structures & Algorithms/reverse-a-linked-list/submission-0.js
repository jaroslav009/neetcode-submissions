/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head) {
        let headNew = null;
        while (head) {
            const temp = head.next
            head.next = headNew
            headNew = head // { val: 1 next: { val: 0; next: null } }
            head = temp
        }
        head = null
        return headNew
    }
}
