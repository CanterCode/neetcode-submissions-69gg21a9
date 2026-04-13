class Solution {
    /**
     * @param {number} n
     * @return {number[]}
     */
    countBits(n) {
        let array = Array.from({length: n + 1}, (_, i) => i)
        let result = Array.from({length: n + 1}, () => 0)

        for (let value of array) {
            let binary = value.toString(2)
            let count = 0


            for (let num of binary) {
                if (num === "1") {
                    count ++
                }
            
            result[value] = count

            }
        }
        
        return result
    }
}
