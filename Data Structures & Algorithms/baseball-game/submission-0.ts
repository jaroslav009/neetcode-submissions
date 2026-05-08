class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations: string[]) {
        const resArr = []
        for (let i = 0; i <= operations.length - 1; i++) {
            const operationItem = operations[i]
            let res = null;
            switch (operationItem) {
                case "+":
                    res = Number(resArr.at(-1)) + Number(resArr.at(-2))
                    break
                case "C":
                    resArr.pop()
                    break
                case "D":
                    res = Number(resArr.at(-1)) * 2
                    break
                default:
                    resArr.push(Number(operationItem))
                    break;
            }
            if (res) {
                resArr.push(res)
            }
        }
        return resArr.reduce((acc, val) => acc + val, 0)
    }
}
