class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board: string[][]): boolean {
        const cols = new Map();
        const rows = new Map();
        const squares = new Map();

        for (let i = 0; i < 9; i++) {
            rows.set(i, new Set());
            cols.set(i, new Set());
        }

        for (let r = 0; r < 9; r++) {
            for (let c = 0; c < 9; c++) {
                if (board[r][c] === '.') {
                    continue;
                }

                let square = String(Math.floor(r/3)) + "," + String(Math.floor(c/3));

                if (squares.get(square) === undefined) {
                    squares.set(square, new Set());
                }

                if (rows.get(r).has(board[r][c]) || cols.get(c).has(board[r][c]) || squares.get(square).has(board[r][c])) {
                    return false;
                }


                rows.get(r).add(board[r][c]);
                cols.get(c).add(board[r][c]);
                squares.get(square).add(board[r][c]);
            }
        }

        return true;

    }

    
}
