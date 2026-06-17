class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const freq = Array.from({length: nums.length+1}, () => []);
        const count = {};

        for (let num of nums) {
            count[num] = (count[num] || 0) + 1;
        }

        for (let key in count) {
            freq[count[key]].push(key);
        }

        const res = [];

        for (let i = freq.length-1; i >= 0; i--) {
            for (let num of freq[i]) {
                res.push(num);

                if (res.length === k) {
                    return res;
                }
            }
        }
    }
}
