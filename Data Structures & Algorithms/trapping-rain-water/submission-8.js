class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let l = 0;
        let r = height.length-1;
        let maxL = 0;
        let maxR = 0;
        let res = 0;
        while (l < r) {
            if (height[l] <= height[r]) {
                res += Math.max(0, maxL - height[l]);
                maxL = Math.max(maxL, height[l]);
                l++;
            } else {
                res += Math.max(0, maxR - height[r]);
                maxR = Math.max(maxR, height[r]);
                r--;
            }
        }

        return res;
    }
}
