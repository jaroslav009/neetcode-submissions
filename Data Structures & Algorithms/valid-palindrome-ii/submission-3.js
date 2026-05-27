class Solution {
    checkPalindrome(s) {
        if (s === s.split("").reverse().join("")) return true
    }
    /**
     * @param {string} s
     * @return {boolean}
     */
    validPalindrome(s) {
        if (s.length === 2 || this.checkPalindrome(s)) return true
        let l = 0;
        let r = s.length - 1;
        let booferStr = ""
        while (l < r) {
            console.log("s[l] s[r]", s[l], s[r])
            if (s[l] !== s[r]) {
                booferStr = s.slice(0, l) + s.slice(l + 1, 1000)
                console.log("booferStr1", booferStr)
                if (this.checkPalindrome(booferStr)) return true
                booferStr = s.slice(0, r) + s.slice(r + 1, 1000)
                console.log("booferStr2", booferStr)
                
                if (this.checkPalindrome(booferStr)) return true
                return false
            }
            l++
            r--
        }
        return false
    }
}
// abbda
// 