class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let result = 0

        for (let i = 0; i < prices.length; i++){
            for (let j = i + 1; j < prices.length; j++) {
                let profit = prices[j] - prices[i];
                if (profit > result){
                    result = profit
                }
                
            }
        }
    return result

    }
}
