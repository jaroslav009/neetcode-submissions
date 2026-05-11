class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let low = 1;
        let high = 0;
        for (let i = 0; i < piles.length; i++) {
            high = Math.max(high, piles[i]);
        }

        let result = high;
        while (low <= high) {
            let k = Math.floor((low + high) / 2);
            let hoursSpent = 0;
            for (let pile of piles) {
                hoursSpent += Math.ceil(pile / k);
            }

            if (hoursSpent <= h) {
                result = k;
                high = k - 1;
            } else {
                low = k + 1;
            }
        }
        return result;
    }
}