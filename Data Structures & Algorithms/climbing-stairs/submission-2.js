class Solution {
    cache = {}
    /**
     * @param {number} n
     * @return {number}
     */
    // climbStairs(n) {
    //     if (n <= 1) {
    //         return 1;
    //     }
    //     const cacheParam = `${n-1}${n-2}`
    //     if (this.cache[cacheParam]) {
    //         return this.cache[cacheParam]
    //     }
    //     const res = this.climbStairs(n - 1) + this.climbStairs(n - 2)
    //     this.cache[cacheParam] = res
    //     return res
    // }
    climbStairs(n) {
        let res = 1;
        let prev = 0;

        for (let i = 1; i <= n; i++) {
            const temp = res
            res = prev + res
            prev = temp
        }
        return res
    }
}
