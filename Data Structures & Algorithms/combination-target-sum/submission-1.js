class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        const res = []
        const subset = []
        this.dfs(nums, subset, res, 0, target, 0)
        console.log("res", res)
        return res
    }
    dfs(nums, subset, res, index, target, total) {
        if (total === target) {
            res.push([...subset])
            return
        }
        if (index >= nums.length || total > target) {            
            return
        }
        subset.push(nums[index])
        this.dfs(nums, subset, res, index, target, total + nums[index])
        subset.pop()
        this.dfs(nums, subset, res, index + 1, target, total)

    }
}
