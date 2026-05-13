class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let left = 0;
        let right = numbers.length - 1;

        for (let i = 0; i <= numbers.length - 1; i++) {
            // for (let j = i; j <= numbers.length - 1; j++) {
            //     const sum = numbers[j] + numbers[i]
            //     if (sum === target) {
            //         return [i + 1, j + 1]
            //     }
            // }
            const sum = numbers[left] + numbers[right]
            const diff = sum - target
            console.log("info", {sum, arr: [left, right], i, diff})

            if (diff === 0) {
                return [left + 1, right + 1]
            }
            if (diff < 0) {
                left++
            } else if (diff > 0) {
                right--
            }
            // if (sum === target) {
            //     return [left + 1, right + 1]
            // }
            // if (sum > target) {
            //     left = right
            // }
            // if (right < numbers.length - 1) {
            //     right++
            // }
        }
    }
}
