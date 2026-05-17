class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {boolean}
     */
    containsNearbyDuplicate(nums, k) {
        let l = 0,
            r = 1
        const checkDuplicate = new Set()
        checkDuplicate.add(nums[l])
        for (let i = 1; i < nums.length; i++) {
            let diff = i - l
            if (diff > k) {
                l++
                checkDuplicate.delete(checkDuplicate.values().next().value)
            }
            checkDuplicate.add(nums[i])
            diff = i - l
            if (diff + 1 !== checkDuplicate.size) {
                return true
            }
        }
        return false
    }
}
