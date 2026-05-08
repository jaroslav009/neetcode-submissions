class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums: number[]) {
        let maxConsecutive = 0
        let consecutiveList = []
        for (let i = 0; i <= nums.length; i++) {
            const currentNum = nums[i];
            const consecutiveListLen = consecutiveList.length
            if (consecutiveListLen > 0) {
                if (consecutiveList[0] === currentNum) {
                    consecutiveList.push(currentNum);
                } else {
                    if (maxConsecutive < consecutiveListLen && consecutiveList[0] === 1) {
                        maxConsecutive = consecutiveListLen
                    }
                    consecutiveList = []
                    if (currentNum !== undefined) consecutiveList.push(currentNum)
                }
            } else {
                consecutiveList.push(currentNum)
            }
        }
        return maxConsecutive
    }
}
