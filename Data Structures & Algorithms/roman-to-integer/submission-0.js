class Solution {
    transformToNumber(symbol) {
        switch (symbol) {
            case "I":
                return 1
            case "V":
                return 5
            case "X":
                return 10
            case "L":
                return 50
            case "C":
                return 100
            case "D":
                return 500
            case "M":
                return 1000
        }
    }
    /**
     * @param {string} s
     * @return {number}
     */
    romanToInt(s) {
        // XLIX
        // -X
        // L
        let sum = 0;
        for (let i = 0; i < s.length; i++) {
            console.log("sum", (sum, i), s[i + 1], s[i])
            const currentSymbol = this.transformToNumber(s[i])
            if (this.transformToNumber(s[i + 1]) > currentSymbol) {
                sum -= currentSymbol
                console.log("sum32", sum)
            } else {
                sum += currentSymbol
            }
        }
        console.log("sum", sum)
        return sum
    }
}
