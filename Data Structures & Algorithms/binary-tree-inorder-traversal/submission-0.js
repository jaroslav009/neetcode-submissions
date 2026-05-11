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
    #arr = []
    /**
     * @param {TreeNode} root
     * @return {number[]}
     */
    inorderTraversal(root) {     
        if (!root) return []
        this.inorderTraversal(root.left)
        this.#arr.push(root.val)
        console.log("this.#arr", this.#arr)
        this.inorderTraversal(root.right)
        return this.#arr || []
    }
}
