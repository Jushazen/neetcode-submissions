class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const res = {};

        for (let str of strs) {
            const count = new Array(26).fill(0);

            for (let i = 0; i < str.length; i++) {
                count[str.charCodeAt(i) - 'a'.charCodeAt(0)]++;
            }

            const key = count.join(',');

            if (!res[key]) {
                res[key] = [];
            }

            res[key].push(str);
        }

        return Object.values(res);

    }
}
