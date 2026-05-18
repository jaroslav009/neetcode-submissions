class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        let hash = {}
        let major = {count: null, val: null}
        for (let i = 0; i < nums.length; i++) {
            hash[nums[i]] = (hash[nums[i]] ?? 0) + 1
            if (hash[nums[i]] > major.count) {
                major.count = hash[nums[i]]
                major.val = nums[i]
            }
        }
        console.log("hash", hash)
        console.log("major", major)
        return major.val
    }
}
