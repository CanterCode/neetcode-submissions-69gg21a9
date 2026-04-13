class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let newS = s.toLowerCase().replace(/[^a-z0-9]/g, "")

        for (let i = 0; i < newS.length; i++) {
            let j = newS.length - 1 - i

            if (newS[i] !== newS[j]) {
                return false
            }
        }

        return true


    }
}