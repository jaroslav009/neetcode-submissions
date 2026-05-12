class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let bestMatch = 0

        let left = 0;
        let right = 1;
        for (let i = 0; i <= prices.length - 1; i++) {
            if (prices[right] > prices[left]) {
                const sum = prices[right] - prices[left]
                bestMatch = Math.max(bestMatch, sum)
            } else {
                left = right
            }
            right++
        }
        return bestMatch
    }
}
