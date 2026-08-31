class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let l = 0;
        let r = s.length-1;

        while (l < r) {
            while (l < r && !this.isAlphaNum(s[l])) {
                l+= 1;
            }
            while (l < r && !this.isAlphaNum(s[r])) {
                r-= 1;
            }

            if (s[l].toLowerCase() !== s[r].toLowerCase()) {
                return false;
            }
            l+=1;
            r-=1;
        }

        return true;
    }

    isAlphaNum(c) {
        return ('a' <= c && c <= 'z') || ('A' <= c && c <= 'Z') || ('0' <= c && c <= '9');
    }
}
