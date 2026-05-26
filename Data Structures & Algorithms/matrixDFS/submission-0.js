class Solution {
    /**
     * @param {number[][]} grid
     * @returns {number}
     */
    countPaths(grid) {
        const COLUMN = grid.length
        const ROW = grid[0].length
        return this.dfsPath(grid, 0, 0, new Set(), ROW, COLUMN)
    }
    dfsPath(grid, r, c, hash, ROW, COLUMN) {
        const currHash = `${c}, ${r}`
        if (r >= ROW || c >= COLUMN || hash.has(currHash) || r < 0 || c < 0 ||
        grid[c][r] === 1) {
            return 0
        } else if (ROW - 1 === r && COLUMN - 1 === c) {
            return 1
        }

        hash.add(currHash)
        let count = 0
        count += this.dfsPath(grid, r + 1, c, hash, ROW, COLUMN)
        count += this.dfsPath(grid, r, c + 1, hash, ROW, COLUMN)
        count += this.dfsPath(grid, r - 1, c, hash, ROW, COLUMN)
        count += this.dfsPath(grid, r, c - 1, hash, ROW, COLUMN)

        hash.delete(currHash)
        return count;
    }
}
