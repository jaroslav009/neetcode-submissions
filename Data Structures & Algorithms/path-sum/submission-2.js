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
     * @param {number} targetSum
     * @return {boolean}
     */
    hasPathSum(root, targetSum, sum = 0) {
        if (!root) {
            return false
        }
        const summing = sum + root.val
        if (targetSum == summing && !root.left && !root.right) {
            return true
        }
        if (root.left && this.hasPathSum(root.left, targetSum, summing)) {
            return true
        }
        if (root.right && this.hasPathSum(root.right, targetSum, summing)) {
            return true
        }
        return false
    }
}
