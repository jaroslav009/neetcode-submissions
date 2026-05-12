class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const repeatedNums = new Map()

        for (let i = 0; i <= nums.length - 1; i++) {
            if (nums[i] !== undefined) {
                // if (repeatedNums.has(nums[i]) !== undefined || repeatedNums.has(nums[i]) !== null) {
                //     repeatedNums.set(nums[i], 1)
                // } else {
                    
                // }
                repeatedNums.set(nums[i], (repeatedNums.get(nums[i]) || 0) + 1)
            }
        }

        const sortedArr = []
        for (let key of repeatedNums.keys()) {
            const item = repeatedNums.get(key)
            sortedArr.push({key, item})
        }
        sortedArr.sort((a,b) => b.item - a.item)
        const res = []
        for (let i = 0; i<k; i++) {
            res.push(sortedArr[i].key)
        }
        console.log("sortedArr", sortedArr, res)
        return res
    }
}
