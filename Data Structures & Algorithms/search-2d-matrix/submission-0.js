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
            const currentArrLeng = currentArr.length
            if (currentArr[0] <= target && currentArr[currentArrLeng - 1] >= target) {
                while (left <= right) {
                    const mid = Math.floor((left+right) / 2)
                    console.log(mid)
                    if (mid > currentArrLeng - 1) {
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
