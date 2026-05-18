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
        console.log("head", head)

        while (head) {
            if (head.val != val) {
                console.log("head.val", head.val)
                currentNode.next = new ListNode(head.val)
                currentNode = currentNode.next
                // if (head.next) {
                //     currentNode.next = new ListNode()
                //     currentNode = currentNode.next
                // }
            }
            head = head.next
        }
        console.log("res", res)
        return res.next
    }
}
