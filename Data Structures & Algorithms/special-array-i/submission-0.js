class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    isArraySpecial(nums) {
        for (let i = 0; i < nums.length; i++) {
            const isLastElement = i + 1 === nums.length
            const arr = [nums[i] % 2, isLastElement ? undefined : nums[i + 1] % 2]
            console.log("arr", arr)
            if (!isLastElement) {
                if (!(arr.includes(0) && arr.includes(1))) {
                    return false
                }
            }
        }
        return true
    }
}
