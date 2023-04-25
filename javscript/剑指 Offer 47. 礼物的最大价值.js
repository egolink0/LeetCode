// /**
//  * @param {number[][]} grid
//  * @return {number}
//  */
// //  暴力（超时）
// const maxValue = function (grid) {
//   let list = [{ sum: grid[0][0], pos: [0, 0] }];
//   const maxX = grid[0].length - 1;
//   const maxY = grid.length - 1;
//   const result = [];
//   while (true) {
//     let newList = [];
//     list.forEach(item => {
//       const { sum, pos } = item;
//       const [y, x] = pos;
//       const newStep = [];
//       if (y + 1 <= maxY) {
//         newStep.push({ sum: sum + grid[y + 1][x], pos: [y + 1, x] });
//       }
//       if (x + 1 <= maxX) {
//         newStep.push({ sum: sum + grid[y][x + 1], pos: [y, x + 1] });
//       }
//       if (newStep.length) {
//         newList = newList.concat(newStep);
//       } else {
//         result.push(item);
//       }
//     });
//     if (!newList.length) {
//       break;
//     } else {
//       list = newList;
//     }
//   }
//   result.sort((a, b) => b.sum - a.sum);
//   return result[0].sum;
// };


/**
 * @param {number[][]} grid
 * @return {number}
 */
//  动态规划 value = max(value + leftValue, value + topValue)
const maxValue = function (grid) {
  const end = [grid.length - 1, grid[0].length - 1];
  const history = {}; 

  const maxSum = pos => {
    const [y, x] = pos;
    const key = `${y}-${x}`;
    if (history[key]) return history[key];

    if (x === 0 && y === 0) {
      return grid[0][0];
    }

    const leftPos = x - 1 >= 0 && [y, x - 1];
    const topPos = y - 1 >= 0 && [y - 1, x];
    const value = grid[y][x];
    let current = 0;
    if (!leftPos) current = maxSum(topPos) + value;
    else if (!topPos) current = maxSum(leftPos) + value;
    else current = Math.max(maxSum(leftPos) + value, maxSum(topPos) + value);
    history[key] = current;
    return current;
  };

  const result = maxSum(end);
  return result;
};
