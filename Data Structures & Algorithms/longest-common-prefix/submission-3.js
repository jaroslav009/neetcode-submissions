class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        if (strs.length <= 1) return strs[0] || ""
        strs.sort((a, b) => a.length - b.length)
        const minLen = strs[0].length
        let prev = strs[0]
        let res = ""
        for (let i = 1; i < strs.length; i++) {
            const currItem = strs[i]
            if (currItem.length >= minLen - 1) {
                let tmp = ""
                for (let j = 0; j < currItem.length; j++) {
                    if (currItem[j] === prev[j]) {
                        tmp += currItem[j]
                    } else {
                        break
                    }
                }
                if (!res || tmp.length < res.length) {
                    res = tmp
                }
            } else {
                break
            }
        }
        return res
    }
}
