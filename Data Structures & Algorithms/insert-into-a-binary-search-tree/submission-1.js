/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    /**
     * @param {TreeNode} root
     * @param {number} val
     * @return {TreeNode}
     */
    insertIntoBST(root, val) {
        const curr = root
        if (!curr) {
            return new TreeNode(val)
        }
        if (curr.val < val) {
            curr.right = this.insertIntoBST(curr.right, val)
        } else if (curr.val > val) {
            curr.left = this.insertIntoBST(curr.left, val)
        }
        return curr
    }
}
