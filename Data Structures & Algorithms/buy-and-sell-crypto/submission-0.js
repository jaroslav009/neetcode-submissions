class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let bestMatch = 0

        for (let i = 0; i <= prices.length - 1; i++) {
            for (let j = i; j <= prices.length - 1; j++) {
                const sum = prices[j] - prices[i]
                bestMatch = Math.max(bestMatch, sum)
            }
        }
        console.log("bestMatch", bestMatch)
        return bestMatch
    }
}
