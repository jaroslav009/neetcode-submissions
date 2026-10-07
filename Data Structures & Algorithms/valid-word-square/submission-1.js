class Solution {
    /**
     * @param {string[]} words
     * @return {boolean}
     */
    validWordSquare(words) {
        console.log(words)
        let column = new Array(words.length).fill("")
        for (let j = 0; j <= words.length - 1; j++) {
            const row = words[j];
            let i = 0;
            for (let char of row) {
                column[i] = column[i] + char;
                i++
            }
        }
        console.log("column", column)
        for (let i = 0; i <= words.length - 1; i++) {
            if (words[i] != column[i]) {
                return false
            }
        }
        return true;
    }
}
