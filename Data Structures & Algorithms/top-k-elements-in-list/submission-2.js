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
                let count = map.get(num) + 1;
                map.set(num, count)
            } else {
                map.set(num, 1)
            }
        }

        let array = Array.from(map.entries());
        array.sort((a, b) => b[1] -a[1]);

        const res = [];

        for (let i = 0; i < k; i++) {
            res.push(array[i][0]);
        }

        return res
    }
}
