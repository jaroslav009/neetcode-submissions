class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let res = 0
        console.log("tokens", tokens)
        let boofer = []
        for (let i = 0; i < tokens.length; i++) {
            console.log("boofer", boofer, res)
            if (tokens[i] === "*" || tokens[i] === "/" ||
            tokens[i] === "+" || tokens[i] === "-") {
                const pop1 = boofer.pop()
                const pop2 = boofer.pop()
                switch (tokens[i]) {
                    case "+":
                        boofer.push(Number(pop2) + Number(pop1))
                        break
                    case "-":
                        boofer.push(pop2 - pop1)
                        break
                    case "*":
                        boofer.push(pop2 * pop1)
                        break
                    case "/":
                        boofer.push(Math.trunc(pop2 / pop1))
                        break
                }
            } else {
                boofer.push(tokens[i])
            }
        }
        console.log("boofer4234", boofer)
        return Math.round(boofer[0])
    }
}
