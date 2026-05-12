class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const hash = {}
        for (let i = 0; i < nums.length; i++) {
            hash[nums[i]] = i;
        }
        for (let i = 0; i <= nums.length - 1; i++) {
            const diff = target - nums[i]
            if (!!hash[diff] && hash[diff] !== i) {
                return [hash[diff], i]
            } 
            // hash[nums[i]] = i
        }
        return []
    }
}
