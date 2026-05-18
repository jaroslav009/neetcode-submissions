class Solution {
    /**
     * @param {number} x
     * @return {boolean}
     */
    isPalindrome(x) {
        if (x < 0) return false

        const strX = String(x)
        if (strX.length <= 1) return true
        let res = ""
        for (let i = strX.length - 1; i >= 0; i--) {
            res += strX[i]
        }
        return res == x
    }
}
