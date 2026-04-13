class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let cleanedS = s.toLowerCase().replace(/[^a-z0-9]/g, '')
        if (cleanedS === cleanedS.split('').reverse().join('')) {
            return true
        } else {
            return false
        }
    }
}
