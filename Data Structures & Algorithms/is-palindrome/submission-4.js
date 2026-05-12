class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const arr = s.replace(/[?!,.'":]/g, "").split(" ")
        const firstArr = arr.join("").toLowerCase()
        const secondArr = firstArr.split("").reverse().join("").toLowerCase()
        console.log("firstArr", firstArr)
        console.log("secondArr", secondArr)
        return firstArr === secondArr
    }
}
