class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let res = 0
        const subStr = new Set()
        for (let i = 0; i <= s.length - 1; i++) {
            for (let j = i; j <= s.length - 1; j++) {
                if (subStr.has(s[j])) {
                    console.log("subStr", subStr.size)
                    res = Math.max(subStr.size, res)
                    subStr.clear()
                    break;
                }
                subStr.add(s[j])
            }
        }
        return Math.max(res, subStr.size)
    }
}
