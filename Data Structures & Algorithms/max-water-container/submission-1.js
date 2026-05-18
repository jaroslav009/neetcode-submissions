class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let area = 0
        for (let l = 0; l < heights.length; l++) {
            for (let r = l; r < heights.length; r++) {
                const tmpArea = (r - l) * Math.min(heights[l], heights[r])
                if (tmpArea > area) {
                    area = tmpArea
                }
            }
        }
        return area
    }
}
