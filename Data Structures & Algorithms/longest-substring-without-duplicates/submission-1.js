class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let substring = ""
        const listAllStr = []
        for (let i = 0; i <= s.length - 1; i++) {
            const newChar = s[i]
            let isEqual = false
            for (let j = 0; j <= substring.length - 1; j++) {
                if (newChar === substring[j]) {
                    isEqual = true
                    listAllStr.push(substring)
                    i = i - substring.length
                    substring = ""
                    break
                }
            }
            if (!isEqual) {
                substring += newChar
            }
        }
        listAllStr.push(substring)
        let res = 0
        for (let i = 0; i <= listAllStr.length - 1; i++) {
            if (listAllStr[i].length) {
                res = Math.max(res, listAllStr[i].length)
            }
        }
        return res
    }
}
