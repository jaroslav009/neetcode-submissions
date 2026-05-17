class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {boolean}
     */
    containsNearbyDuplicate(nums, k) {
        let l = 0
        const checkDuplicate = new Set()
        // checkDuplicate.add(nums[l])
        for (let r = 0; r < nums.length; r++) {
            let diff = r - l
            if (diff > k) {
                l++
                checkDuplicate.delete(checkDuplicate.values().next().value)
            }
            checkDuplicate.add(nums[r])
            diff = r - l
            if (diff + 1 !== checkDuplicate.size) {
                return true
            }
        }
        return false
    }
}
