class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const arr = s.replace(/[?!,.'":]/g, "").split(" ")
        const strLowerCase = arr.join("").toLowerCase()
        return arr.join("").toLowerCase() === strLowerCase.split("").reverse().join("")
    }
}
