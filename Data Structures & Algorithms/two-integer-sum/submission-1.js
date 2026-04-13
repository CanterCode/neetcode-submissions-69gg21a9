class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let mapper = new Map();
        for (let i = 0; i <= nums.length; i++) {
            let diff = target - nums[i];
            if (mapper.has(diff)) {
                return[mapper.get(diff), i]
            } else {
                mapper.set(nums[i], i)
            }
        }
    }
}
