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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        let newList = null
        while (list1 || list2) {
            console.log("list1", list1)
            console.log("list2", list2)
            if (list1?.val <= list2?.val || list2 === null) {
                const temp = list1?.next
                list1.next = newList
                newList = list1
                list1 = temp
            } else {
                console.log('fewgwe', list2?.next)
                const temp = list2?.next
                list2.next = newList
                newList = list2
                list2 = temp
            }
        }
        let result = null
        while (newList) {
            const temp = newList.next
            newList.next = result
            result = newList
            newList = temp
        }

        return result
    }
}
