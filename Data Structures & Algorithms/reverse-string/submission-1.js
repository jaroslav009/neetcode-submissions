class Solution {
    /**
     * @param {character[]} s
     * @return {void} Do not return anything, modify s in-place instead.
     */
    reverseString(s) {
        const len = s.length
        for (let i = 0; i < Math.floor(len / 2); i++) {
            const temp = s[i]
            s[i] = s[len - i - 1]
            s[len - i - 1] = temp
        }
    }
}
