class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let left = 0
        let right = nums.length

        while(left <= right) {
            const mid = Math.floor((left + right) / 2)

            if (mid > nums.length - 1) break

            if (nums[mid] < target) {
                left = mid + 1
            } else if (nums[mid] > target) {
                right = mid - 1
            } else {
                console.log("left", left)
                console.log("right", right)
                return mid
            }
        }
        return -1
    }
}
