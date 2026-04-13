class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let answer = 0;

        for (let i = 0; i < prices.length; i++) {
            for (let j = prices.length - 1; j > i; j--) {
                let profit = prices[j] - prices[i]

                if (profit > answer) {
                    answer = profit
                }
            }
        }

        if (answer < 1) {
            return 0
        } else {
            return answer
        }
    }
}
