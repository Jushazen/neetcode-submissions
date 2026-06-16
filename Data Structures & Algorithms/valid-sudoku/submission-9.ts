class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board: string[][]): boolean {
        for (let i = 0; i < 9; i++) {
            if (!this.isValidRows(board, i) || !this.isValidCols(board,i)) {
                return false;
            }
        }

        for (let r = 0; r < 9; r += 3) {
            for (let c = 0; c < 9; c += 3) {
                if (!this.isValidSquare(board, r, c)) {
                    return false;
                }
            }
        }

        return true;
    }

    isValidRows(board: string[][], row: number): boolean {
        const rows = new Array(10).fill(0);

        for (let col = 0; col < 9; col++) {
            if (board[row][col] === '.') continue;
            if (rows[parseInt(board[row][col])] !== 0) {
                return false;
            }
            rows[parseInt(board[row][col])]++;
        }

        return true;
    }

    isValidCols(board: string[][], col: number): boolean {
        const cols = new Array(10).fill(0);

        for (let row = 0; row < 9; row++) {
            if (board[row][col] === '.') continue;
            if (cols[parseInt(board[row][col])] !== 0) {
                return false;
            }
            cols[parseInt(board[row][col])]++;
        }

        return true;
    }

    isValidSquare(board: string[][], row: number, col: number): boolean {
        const square = new Array(10).fill(0);
        for (let r = row; r < (row+3); r++) {
            for (let c = col; c < (col+3); c++) {
                if (board[r][c] === '.') continue;
                if (square[parseInt(board[r][c])] !== 0) {
                    return false;
                }
                square[parseInt(board[r][c])]++;
            }
        }
        return true;
    }


}
