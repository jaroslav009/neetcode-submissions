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
     * @return {number[][]}
     */
    levelOrder(root) {
        const queue = []
        const resArr = []
        if (root) {
            queue.push(root)
        }
        console.log("queue", queue.length)
        while (queue.length > 0) {
            const level = []
            const size = queue.length

            for (let i = 0; i < size; i++) {
                let node = queue.shift()
                
                if (node) {
                    level.push(node.val)
                    queue.push(node.left)
                    queue.push(node.right)
                }
            }
            if (level.length > 0) {
                resArr.push(level)
            }

        }
        
        return resArr
    }
}
