class Solution {
    /**
     * @param {number[]} arr
     * @param {number} k
     * @param {number} threshold
     * @return {number}
     */
    numOfSubarrays(arr, k, threshold) {
        let left = 0;
        let sumSubArr = 0 
        let res = 0
        for (let right = 0; right < arr.length; right++) {
            if (right - left + 1 === k) {
                sumSubArr += arr[right]
                if (sumSubArr / k >= threshold) {
                    res++
                }
                sumSubArr -= arr[left]
                left++
            } else {
                sumSubArr += arr[right]
            }

        }
        return res
    }
}
