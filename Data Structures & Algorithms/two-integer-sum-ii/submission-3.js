class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let left = 0;
        let right = 1;

        for (let i = 0; i <= numbers.length - 1; i++) {
            for (let j = i; j <= numbers.length - 1; j++) {
                const sum = numbers[j] + numbers[i]
                if (sum === target) {
                    return [i + 1, j + 1]
                }
            }
            // console.log("info", sum, [left, right], i)
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
