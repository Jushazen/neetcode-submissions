class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const numSet = new Set(nums);
        let max = 0;
        for (let num of numSet) {
            if (!numSet.has(num-1)) {
                let length = 1;
                while (numSet.has(num+length)) {
                    length++;
                }
                max = Math.max(length, max);
            }
        }

        return max;
    }
}
