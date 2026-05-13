class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    pathsMap = new Map()
    subsets(nums) {
        // [1,2,3,4,5]
        // [[], [1,2], [1,2,3], [1,3], [1,2,3,4], [1,3,4], [1,4], [1,2,3,4,5], [1,3,4,5], [1,4,5], [1,5]]
        const res = []
        const subset = []
        this.dfs(nums, 0, subset, res)
        return res
    }

    dfs(nums, i, subset, res) {
        if (i >= nums.length) {
            res.push([...subset])
            return
        }
        subset.push(nums[i])
        this.dfs(nums, i + 1, subset, res)
        subset.pop()
        this.dfs(nums, i + 1, subset, res)
    }
}
