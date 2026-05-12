class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const firstAnagram = s.split("").sort()
        const secondAnagram = t.split("").sort()
        console.log("firstAnagram", firstAnagram)
        console.log("secondAnagram", secondAnagram)
        return firstAnagram.toString() === secondAnagram.toString()
    }
}
