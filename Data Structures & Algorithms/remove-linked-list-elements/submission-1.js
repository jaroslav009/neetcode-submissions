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
     * @param {number} val
     * @return {ListNode}
     */
    removeElements(head, val) {
        const res = new ListNode()
        let currentNode = res

        while (head) {
            if (head.val != val) {
                currentNode.next = new ListNode(head.val)
                currentNode = currentNode.next
            }
            head = head.next
        }
        return res.next
    }
}
