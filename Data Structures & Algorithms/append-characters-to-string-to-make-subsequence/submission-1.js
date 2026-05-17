class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {number}
     */
    appendCharacters(s, t) {
        let pointerT = 0;
        for (let i = 0; i < s.length; i++) {
            if (s[i] === t[pointerT]) {
                pointerT++
            }
        }
        return t.length - pointerT
    }
}
