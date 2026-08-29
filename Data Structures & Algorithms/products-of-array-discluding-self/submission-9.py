class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        res = [1] * len(nums);

        for i in range(len(res)-1):
            res[i+1] = res[i] * nums[i]
        
        post = 1

        for i in range(len(res)-1, -1, -1):
            res[i] *= post
            post *= nums[i]
        
        return res