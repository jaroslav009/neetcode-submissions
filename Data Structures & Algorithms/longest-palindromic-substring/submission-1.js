class Solution {
    reverseStr(s) {
        let reverse = ""
        console.log("s.length - 1", s.length - 1)
        for (let i = s.length - 1; i >= 0; i--) {
            reverse += s[i]
        }
        return reverse
    }
    /**
     * @param {string} s
     * @return {string}
     */
    longestPalindrome(s) {
        let resIdx = 0
        let resLen = 0

        for (let i = 0; i < s.length; i++) {
            let l = i, r = i
            while (l >= 0 && r < s.length && s[l] === s[r]) {
                const currLen = r - l + 1
                if (currLen > resLen) {
                    resIdx = l
                    resLen = currLen
                }
                l--
                r++
            }
            l = i
            r = i + 1
            while (l >= 0 && r < s.length && s[l] === s[r]) {
                const currLen = r - l + 1
                if (currLen > resLen) {
                    resIdx = l
                    resLen = currLen
                }
                l--
                r++
            }
        }
        return s.slice(resIdx, resIdx + resLen)
    }
    // abaedfg
    // 0(d)-1(b)
    // 0-2(a)
    // 0-3(b)
    // 0-4(d)

}
