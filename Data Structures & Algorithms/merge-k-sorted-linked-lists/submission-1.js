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
    merge(list1, list2) {
        let dummy = new ListNode(0);
        let curr = dummy;
        while (list1 && list2) {
            if (list1.val < list2.val) {
                curr.next = list1;
                list1 = list1.next;
            } else {
                curr.next = list2;
                list2 = list2.next;
            }
            curr = curr.next;
        }
        curr.next = list1 || list2;
        return dummy.next;
    }
    /**
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    mergeKLists(lists) {
        if (!lists || lists.length === 0) return null;
        let res = lists[0];
        for (let i = 1; i < lists.length; i++) {
            res = this.merge(res, lists[i]);
        }
        return res || null;
    }
}
