class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let answer = 0;

        for (let i = 0; i < prices.length; i++) {
            for (let j = i + 1; j < prices.length; j++) {
                let profit = prices[j] - prices[i]

                if (profit > answer) {
                    answer = profit
                }
            }
        }

        return answer
    }
}
