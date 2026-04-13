class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let cleanedS = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

        for (let i = 0; i < cleanedS.length; i++) {
            let j = cleanedS.length - 1 - i;

            if (cleanedS[i] !== cleanedS[j]) {
                return false
            }
        }

        return true
    }
}
