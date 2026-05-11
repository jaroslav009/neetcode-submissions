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
    findMinRightNode(root) {
        let curr = root
        while (curr && curr.left) {
            curr = curr.left
        }
        return curr
    }
    /**
     * @param {TreeNode} root
     * @param {number} key
     * @return {TreeNode}
     */
    deleteNode(root, key) {
        if (!root) {
            return root
        }
        if (root.val < key) {
            root.right = this.deleteNode(root.right, key)
        } else if (root.val > key) {
            root.left = this.deleteNode(root.left, key)
        } else {
            if (!root.left && root.right) {
                return root.right
            } else if (!root.right && root.left) {
                return root.left
            } else if (!root.right && !root.left) {
                return null
            }

            const minNode = this.findMinRightNode(root.right)

            root.val = minNode.val
            root.right = this.deleteNode(root.right, minNode.val)
        }
        return root
    }
}