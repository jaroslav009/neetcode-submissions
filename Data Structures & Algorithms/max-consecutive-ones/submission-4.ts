class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums: number[]) {
        let maxConsecutive = 0
        let currentMax = 0
        for (let i = 0; i <= nums.length; i++) {
            const currentItem = nums[i]
            currentMax = currentItem === 1 ? currentMax + 1 : 0;
            if (currentMax > 0) {
                maxConsecutive = Math.max(maxConsecutive, currentMax)
            }
        }
        return maxConsecutive
    }
}
