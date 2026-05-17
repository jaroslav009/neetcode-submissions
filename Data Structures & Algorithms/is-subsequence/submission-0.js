class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isSubsequence(s, t) {
        console.log({s, t})
        let pointerS = 0
        for (let i = 0; i < t.length; i++) {
            if (s[pointerS] === t[i]) {
                pointerS++
            }
            if (pointerS >= s.length) {
                return true
            }
        }
        return false
    }
}
