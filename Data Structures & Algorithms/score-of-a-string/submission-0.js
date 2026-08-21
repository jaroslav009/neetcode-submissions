class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    scoreOfString(s) {
        let sum = 0;
        for (let i = 0; i <= s.length - 1; i++) {
            if (i + 1 >= s.length) {
                return sum
            }
            sum += Math.abs(s[i + 1].charCodeAt(0) - s[i].charCodeAt(0))
        }
    }
}
