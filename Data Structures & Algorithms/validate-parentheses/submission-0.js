class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = [];
        const closeOpen = {
            ')': '(',
            '}': '{',
            ']': '['
        }

        for (let c of s) {
            if (closeOpen[c]) {
                if (
                    stack.length > 0 &&
                    stack[stack.length - 1] === closeOpen[c]
                ) {
                    stack.pop()
                } else {
                    return false
                }
            } else {
                stack.push(c)
            }
        } return stack.length === 0
    }
}
