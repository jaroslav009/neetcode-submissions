class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums: number[], val: number) {
        const tmp = nums.filter(valFilter => valFilter !== val);
        for (let i = 0; i <= tmp.length; i++) {
            nums[i] = tmp[i];
        }
        return tmp.length;
    }
}
