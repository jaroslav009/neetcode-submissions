class KthLargest {
    data = []
    largestNum = 0
    /**
     * @param {number} k
     * @param {number[]} nums
     */
    constructor(k, nums) {
        console.log("data", {k}, nums)
        this.data = [...nums]
        this.largestNum = k
    }
    // [1, 2, 3, 3, 3] 3
    // [1, 2, 3, 3, 3, 5] 3
    //  [1, 2, 3, 3, 3, 5, 6] 3
    //  [1, 2, 3, 3, 3, 5, 6, 7] 5
    //  [1, 2, 3, 3, 3, 5, 6, 7, 8] 6
    // 
    /**
     * @param {number} val
     * @return {number}
     */
    add(val) {
        this.data.push(val)
        if (this.data.length) {
            console.log("this.data", this.data.toSorted((a,b) => a - b))
            return this.data.toSorted((a,b) => a - b)[this.data.length - this.largestNum]
        }
        // return null
    }
}
