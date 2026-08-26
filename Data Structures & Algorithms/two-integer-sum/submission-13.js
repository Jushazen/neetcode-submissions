class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let mp = {}

        for (let i = 0; i < nums.length; i++) {
            let complement = target - nums[i];
            if (mp[complement] !== undefined) {
                return [mp[complement], i];
            }

            mp[nums[i]] = i;
        }
        return [];
    }
}
