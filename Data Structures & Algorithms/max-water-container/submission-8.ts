class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights: number[]): number {
        let [max, l, r] = [0, 0, heights.length-1];

        while (l < r) {
            max = Math.max(max, Math.min(heights[l], heights[r]) * (r-l));

            if (heights[l] <= heights[r]) {
                l++;
            } else {
                r--;
            }
        }

        return max;
    }
}
