class Solution {
    /**
     * @param {string} blocks
     * @param {number} k
     * @return {number}
     */
    minimumRecolors(blocks, k) {
        let l = 0;
        let r = 0;
        
        let minOperation = 100
        const hash = {"B": 0, "W": 0}
        while (r < blocks.length) {
            hash[blocks[r]] = hash[blocks[r]] + 1
            if (r - l + 1 === k) {
                minOperation = Math.min(minOperation, hash["W"])
                hash[blocks[l]] = hash[blocks[l]] - 1
                l++
            }
            r++
        }
        return minOperation
    }
}
