class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        if (strs.length <= 1) return strs[0] || ""
        strs.sort((a, b) => a.length - b.length)
        let prev = strs[0]
        let res = ""
        for (let i = 1; i < strs.length; i++) {
            const currItem = strs[i]
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
        }
        return res
    }
}
