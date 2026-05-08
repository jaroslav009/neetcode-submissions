class MinStack {
    #stackObj = []
    constructor() {
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val: number) {
        this.#stackObj.push(val)
        return this.#stackObj;
    }

    /**
     * @return {void}
     */
    pop() {
        this.#stackObj.pop()
        return this.#stackObj
    }

    /**
     * @return {number}
     */
    top() {
        return this.#stackObj.at(-1)
    }

    /**
     * @return {number}
     */
    getMin() {
        return Math.min(...this.#stackObj)
    }
}
