class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {boolean}
     */
    containsNearbyDuplicate(nums, k) {
        let l = 0
        const checkDuplicate = new Set()
        for (let r = 0; r < nums.length; r++) {
            if (r - l > k) {
                l++
                checkDuplicate.delete(checkDuplicate.values().next().value)
            }
            checkDuplicate.add(nums[r])
            if (r - l + 1 !== checkDuplicate.size) {
                return true
            }
        }
        return false
    }
}
