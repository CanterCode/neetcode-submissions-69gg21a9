class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let stack = [];
        let pairs = new Map;

        pairs.set("}", "{");
        pairs.set("]", "[");
        pairs.set(")", "(");


        for (let i = 0; i < s.length; i++) {
            if (s[i] === "{" || s[i] === "[" || s[i] === "(") {
                stack.push(s[i]);
            } else {
                let compare = stack.pop();
                let compare2 = pairs.get(s[i]);
                if (compare === compare2) {
                    continue
                } else {
                    return false
                }
            }
        }

        if (stack.length === 0) {
            return true
        } else {
            return false
        }
    }
}
