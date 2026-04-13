class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let l = 0
        let r = 1
        let maxPrice = 0

        while (r < prices.length) {
            if (prices[l] < prices[r]) {
                let sellPrice = prices[r] - prices[l]
                maxPrice = Math.max(maxPrice, sellPrice)
            } else {
                l = r
            }
            r++
        }
        return maxPrice

    }
}
