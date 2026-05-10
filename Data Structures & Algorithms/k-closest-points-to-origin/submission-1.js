class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points, k) {
        let dataClosest = []
        points.forEach((arr, index) => {
            const res = Math.sqrt(arr[0] ** 2 + arr[1] ** 2)
            dataClosest.push({
                val: res,
                coordinates: arr,
                index
            })
            // if (dataClosest.length === 0) {
            //     dataClosest = [{
            //         val: res,
            //         coordinates: arr,
            //         index
            //     }]
            // } else {
            //     if (res < dataClosest[0].val) {
            //         dataClosest = [{
            //             val: res,
            //             coordinates: arr,
            //             index
            //         }]
            //     } else if (res === dataClosest[0].val) {
            //         dataClosest.push({
            //             val: res,
            //             coordinates: arr,
            //             index
            //         })
            //     }

            // }
        })
        dataClosest.sort((a, b) => a.val - b.val)
        console.log('dataClosest', dataClosest)
        const res = []
        for (let i = 0; i <= dataClosest.length - 1; i++) {
            console.log('i', i, k)
            if (i + 1 <= k) {
                res.push(dataClosest[i].coordinates)
            }
        }
        console.log(":res", res)
        return res;
    }
}
