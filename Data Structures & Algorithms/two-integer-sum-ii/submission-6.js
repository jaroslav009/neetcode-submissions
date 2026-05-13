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
            const sum = numbers[left] + numbers[right]
            const diff = sum - target

            if (diff === 0) {
                return [left + 1, right + 1]
            }
            if (diff < 0) {
                left++
            } else if (diff > 0) {
                right--
            }
        }
    }
}
