const BRACKETS = ['{}', '[]', '()']
class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string) {
        while (s.includes('[]') || s.includes('{}') || s.includes('()')) {
            BRACKETS.forEach(val => s = s.replace(val, ''))
        }
        console.log('s', s)
        return !s
    }
}
