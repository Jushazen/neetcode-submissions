class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        let l = 0;
        let r = s.length-1;

        while (l < r) {
            if (!this.isAlphaNum(s[l])) {
                l++;
                continue;
            }

            if (!this.isAlphaNum(s[r])) {
                r--;
                continue;
            }

            if (s[l].toLowerCase() !== s[r].toLowerCase()) {
                return false;
            }
            l++;
            r--;
        }
        return true;
    }

    isAlphaNum(c: string): boolean {
        return ((c >= 'A' && c <= 'Z') || (c >= 'a' && c <= 'z') || (c >= '0' && c <= '9'));
    }
}
