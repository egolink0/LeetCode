/**
 * @param {number[][]} grid
 * @return {number}
 */

const hasZero = (list, grid) => {
  for (let pos of list) {
    if (!grid[pos[0]]) return true;
    if (!grid[pos[0]][pos[1]]) {
      return true;
    }
  }
  return false;
};

// 判断当前节点，宽度是 w 的边在的点，所有的数值是否都是 1
const isSquare = (r, c, w, grid) => {
  for (let i = 0; i < w; i++) {
    const list = [
      [r, c + i],
      [r + w - 1, c + i],
      [r + i, c],
      [r + i, c + w - 1],
    ];
    if (hasZero(list, grid)) {
      return 0;
    }
  }
  return true;
};

// 计算当前节点展开的不同宽度是否有正方形，更新最大的边，只向右向下扩展
const calc = (origin, minWidth, max, grid) => {
  const [r, c] = origin;
  let result = 0;
  for (let w = minWidth + 1; w <= max; w++) {
    if (isSquare(r, c, w, grid)) result = Math.max(result, w);
  }
  return result;
};

// 枚举
var largest1BorderedSquare = function (grid) {
  const max = Math.min(grid.length, grid[0].length);
  let result = 0;
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[row].length; col++) {
      const item = grid[row][col];
      if (result === max) return result * result; // 最大宽度达到，返回
      else if (item === 0) continue;
      else {
        if (item === 1 && result === 0) result = 1;
        const newResult = calc([row, col], result, max, grid);
        result = Math.max(result, newResult);
      }
    }
  }
  return result * result;
};
