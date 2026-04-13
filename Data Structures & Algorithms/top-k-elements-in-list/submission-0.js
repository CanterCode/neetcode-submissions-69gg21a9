class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let map = new Map();

        for (let num of nums) {
            if (map.has(num)) {
                map.set(num, map.get(num) + 1)
            } else {
                map.set(num, 1)
            }
        }

        const array = Array.from(map.entries())

        array.sort((a, b) => b[1] - a[1]);

        return array.slice(0, k).map(entry => entry[0]);
    }
}
