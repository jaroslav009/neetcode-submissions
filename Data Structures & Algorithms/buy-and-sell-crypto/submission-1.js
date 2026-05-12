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
        // for (let i = 0; i <= prices.length - 1; i++) {
        //     for (let j = i; j <= prices.length - 1; j++) {
        //         const sum = prices[j] - prices[i]
        //         bestMatch = Math.max(bestMatch, sum)
        //     }
        // }
        return bestMatch
    }
}
