class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums: number[]): number[] {
        let ans = [];
        let j = 0;
        for (let i = 0; i < nums.length*2; i++) {
            if (j == nums.length) j = 0;
            ans.push(nums[j++]);
        }
        return ans;
    }
}
