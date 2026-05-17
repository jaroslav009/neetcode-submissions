class Solution {
    /**
     * @param {string[]} logs
     * @return {number}
     */
    minOperations(logs) {
        let currentPosition = 0
        for (let i = 0; i < logs.length; i++) {
            console.log("currentPosition", currentPosition)
            switch (logs[i]) {
                case "../":
                    if (currentPosition > 0) {
                        currentPosition--
                    }
                    break;
                case "./":
                    break;
                default:
                    currentPosition++
            }
        }
        return currentPosition
    }
}
