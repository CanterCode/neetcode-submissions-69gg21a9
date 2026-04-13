class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const output = Array.from({length: nums.length}, () => 0);

        let leftProduct = 1
        let rightProduct = 1

        for (let i = 0; i < nums.length; i++) {
            output[i] = leftProduct
            leftProduct = leftProduct * nums[i]
        }

        for (let i = nums.length-1; i >= 0; i--) {
            output[i] = output[i] * rightProduct
            rightProduct = rightProduct * nums[i]
        }
        
        return output
    }
}
