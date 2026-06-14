class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        return strs.map(s => String(s.length) + "#" + s).join('');
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        const res = [];
        let i = 0;

        while (i < str.length) {
            let j = i;

            while (str[j] !== "#") {
                j++;
            }

            let length = parseInt(str.substring(i, j));
            i = j + 1;
            j = length + i;

            res.push(str.substring(i, j));

            i = j;
        }

        return res;
    }
}
