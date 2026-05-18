class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {boolean}
     */
    // [1,2,3,4,5,6,7,8,9,10,11,12]
    search(nums, target) {
        let res = false
        nums.sort((a, b) => {
            if (a === target || b === target) {
                res = true
            }
            return a - b
        })
        if (res) return res
        let left = 0
        let middle = Math.floor(nums.length / 2)
        let right = nums.length
        let i = 0;
        console.log("nums", nums)
        while (right > left) {
            console.log("middle", {middle, right, left, val: nums[middle]})
            if (nums[middle] > target) {
                right = middle - 1
            } else if (nums[middle] < target) {
                left = middle + 1
            } else {
                return true
            }
            i++
            middle = left + Math.floor((right - left + 1) / 2)
        }
        return false
    }
}
