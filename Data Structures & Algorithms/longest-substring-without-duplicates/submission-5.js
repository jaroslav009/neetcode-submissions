class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let res = 0
        const subStr = new Set()
        let l = 0;

        for (let r = 0; r < s.length; r++) {
            while (subStr.has(s[r])) {
                subStr.delete(s[l])
                l++
            }
            subStr.add(s[r])
            res = Math.max(res, r - l + 1)
        }
        return res
    }
}
