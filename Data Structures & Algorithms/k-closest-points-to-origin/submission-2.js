class Solution {
    quickSort(arr, s, e) {
        if (e - s + 1 <= 1) {
            return arr
        }
        const pivot = arr[e]
        let left = s

        for (let i = s; i < e; i++) {
            if (arr[i].val < pivot.val) {
                const tmp = arr[left]
                arr[left] = arr[i]
                arr[i] = tmp
                left++
            }
        }
        arr[e] = arr[left]
        arr[left] = pivot

        this.quickSort(arr, s, left - 1)
        this.quickSort(arr, left + 1, e)

        return arr
    }
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points, k) {
        let dataClosest = []
        for (let i = 0; i < points.length; i++) {
            const item = points[i]
            const res = Math.sqrt(item[0] ** 2 + item[1] ** 2)
            dataClosest.push({
                val: res,
                coordinates: item,
            })
        }
        this.quickSort(dataClosest, 0, dataClosest.length - 1)
        const res = []
        for (let i = 0; i < k; i++) {
            res.push(dataClosest[i].coordinates)
        }
        return res;
    }
}