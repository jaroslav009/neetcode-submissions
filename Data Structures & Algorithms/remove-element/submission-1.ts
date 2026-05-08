class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums: number[], val: number) {
        // const tmp = nums.filter(valFilter => valFilter !== val);
        const tmp = []
        for (let j = 0; j <= nums.length; j++) {
            if (nums[j] !== val && typeof nums[j] === "number") {
                tmp.push(nums[j])
            }
        }
        for (let i = 0; i <= tmp.length; i++) {
            nums[i] = tmp[i];
        }
        return tmp.length;
    }
}
