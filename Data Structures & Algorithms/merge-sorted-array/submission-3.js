class Solution {
    /**
     * @param {number[]} nums1
     * @param {number} m
     * @param {number[]} nums2
     * @param {number} n
     * @return {void} Do not return anything, modify nums1 in-place instead.
     */
    // merge(nums1, m, nums2, n) {
    //     nums1.splice(m)
    //     nums1.push(...nums2)
    //     nums1.sort((a, b) => a - b)
    // }
    merge(nums1, m, nums2, n) {
        const totalLen = m+n
        let pointerNums1 = m
        let pointerNums2 = n
        let pointerToInsert = totalLen
        while (pointerNums1 > 0 && pointerNums2 > 0) {
            if (nums1[pointerNums1 - 1] > nums2[pointerNums2 - 1]) {
                nums1[pointerToInsert - 1] = nums1[pointerNums1 - 1]
                pointerNums1--
            } else {
                nums1[pointerToInsert - 1] = nums2[pointerNums2 - 1]
                pointerNums2--
            }
            pointerToInsert--
        }
        while (pointerNums2 > 0) {
            nums1[pointerToInsert - 1] = nums2[pointerNums2 - 1]
            pointerNums2--
            pointerToInsert--
        }
        console.log("boofer", nums1)
    }
}
