class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let substring = ""
        let res = 0

        for (let i = 0; i <= s.length - 1; i++) {
            const newChar = s[i]
            let isEqual = false
            for (let j = 0; j <= substring.length - 1; j++) {
                if (newChar === substring[j]) {
                    isEqual = true
                    res = Math.max(res, substring.length)
                    i = i - substring.length
                    substring = ""
                    break
                }
            }
            if (!isEqual) {
                substring += newChar
            }
        }
        return Math.max(substring.length, res)
    }
}
