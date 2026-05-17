class Solution {
    /**
     * @param {character[]} s
     * @return {void} Do not return anything, modify s in-place instead.
     */
    reverseString(s) {
        let res = ""
        console.log("123123")
        const len = s.length
        for (let i = 0; i < Math.floor(len / 2); i++) {
            console.log('s[i]', s[i], s[len - i - 1])
            const temp = s[i]
            s[i] = s[len - i - 1]
            s[len - i - 1] = temp
        }
    }
}
