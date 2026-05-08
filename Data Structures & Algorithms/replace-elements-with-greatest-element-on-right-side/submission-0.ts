class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr: number[]) {
        const tmp = [];
        for (let i = 0; i <= arr.length - 1; i++) {
            let maxNum = 0;
                for (let j = i+1; j <= arr.length - 1; j++) {
                    maxNum = Math.max(maxNum, arr[j]);
                }
                tmp.push(maxNum);
        }
        tmp[tmp.length - 1] = -1;
        console.log('tmpo.', tmp);
        return tmp;
    }
}
