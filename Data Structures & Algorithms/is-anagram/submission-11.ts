class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if (s.length !== t.length) {
            return false;
        }

        const res = new Array(26).fill(0);

        for (let i = 0; i < s.length; i++) {
            res[s.charCodeAt(i) - 'a'.charCodeAt(0)] += 1;
            res[t.charCodeAt(i) - 'a'.charCodeAt(0)] -= 1;
        }

        return res.every(c => c === 0);

    }
}
