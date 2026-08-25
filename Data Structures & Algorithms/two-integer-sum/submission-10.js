class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let visited = {}
        for (let i = 0; i < nums.length;i++) {
            let complement = target - nums[i];
            if (visited[complement] !== undefined) {
                return [visited[complement], i];
            }

            visited[nums[i]] = i;
        }
        return [];
    }
}
