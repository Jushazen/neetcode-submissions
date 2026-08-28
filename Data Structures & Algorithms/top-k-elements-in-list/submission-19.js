class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let freq = Array.from({length: nums.length+1}, () => []);
        let count = {};

        for (const num of nums) {
            count[num] = (count[num] || 0) + 1;
        }

        for (const key in count) {
            freq[count[key]].push(key);
        }

        let res = [];

        for (let i = freq.length-1; i > 0; i--) {
            for (const num of freq[i]) {
                res.push(num);
                if (res.length == k) {
                    return res;
                }
            }
        }
    }
}
