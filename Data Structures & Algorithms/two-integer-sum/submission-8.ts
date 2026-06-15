class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const res = {};

        for (const [idx, num] of nums.entries()) {
            let correct = target - num;
            if (res[correct] !== undefined) {
                return [res[correct], idx];
            }
            res[num] = idx;
        }

    }
}
