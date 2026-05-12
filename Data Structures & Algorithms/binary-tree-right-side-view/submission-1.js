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
     * @return {number[]}
     */
    rightSideView(root) {
        const resArr = []
        const queue = []

        if (root) {
            queue.push(root)
        }

        while (queue.length > 0) {
            const size = queue.length
            let level;

            if (queue.length && queue.at(-1)) {
                level = queue.at(-1).val
            }

            for (let i = 0; i <= size - 1; i++) {
                const node = queue.shift()
                if (node) {
                    if (node.left) {
                        queue.push(node.left)
                    }
                    if (node.right) {
                        queue.push(node.right)
                    }
                }
            }
            if (level) {
                resArr.push(level)
            }
        }
        return resArr
    }
}
