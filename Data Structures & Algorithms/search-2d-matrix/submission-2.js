class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        if (!matrix.length) return false
        let left = 0;
        let right = matrix[0].length

        for (let i = 0; i <= matrix.length - 1; i++) {
            const currentArr = matrix[i]
            const lastItem = currentArr.length - 1
            if (currentArr[0] <= target && currentArr[lastItem] >= target) {
                while (left <= right) {
                    const mid = Math.floor((left+right) / 2)

                    if (mid > lastItem) {
                        return false
                    }
                    if (currentArr[mid] < target) {
                        left = mid + 1
                    } else if (currentArr[mid] > target) {
                        right = mid - 1
                    } else {
                        return true
                    }
                }
            }
        }
        return false
    }
}
