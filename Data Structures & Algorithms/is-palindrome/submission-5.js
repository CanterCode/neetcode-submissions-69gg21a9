class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let cleaned = s.toLowerCase().replace(/[^a-z0-9]/g, '');

        for (let i = 0; i < s.length; i++) {
            let j = cleaned.length - 1 - i

            if (cleaned[i] !== cleaned[j]) {
                return false
            }
        }

        return true
    }
}
