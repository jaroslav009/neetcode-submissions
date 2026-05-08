class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]) {
        const uniquesNum = new Set(nums);
        return nums.length !== uniquesNum.size
    }
}
