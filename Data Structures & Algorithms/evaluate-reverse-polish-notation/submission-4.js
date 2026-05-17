class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let stack = []
        for (let i = 0; i < tokens.length; i++) {
            if (tokens[i] === "*" || tokens[i] === "/" ||
            tokens[i] === "+" || tokens[i] === "-") {
                const pop1 = stack.pop()
                const pop2 = stack.pop()
                switch (tokens[i]) {
                    case "+":
                        stack.push(Number(pop2) + Number(pop1))
                        break
                    case "-":
                        stack.push(pop2 - pop1)
                        break
                    case "*":
                        stack.push(pop2 * pop1)
                        break
                    case "/":
                        stack.push(Math.trunc(pop2 / pop1))
                        break
                }
            } else {
                stack.push(tokens[i])
            }
        }
        return Math.round(stack[0])
    }
}
