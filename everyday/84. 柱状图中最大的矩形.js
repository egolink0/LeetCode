/**
 * @param {number[]} heights
 * @return {number}
 */
// over time 计算每个位置的可扩展的宽度和最小高度 O(n^2)
// var largestRectangleArea = function (heights) {
//   const result = [];
//   let max = 0;
//   for (let i = 0; i < heights.length; i++) {
//     const thisVal = heights[i];
//     if (thisVal) {
//       result.push([i, thisVal]);
//       max = Math.max(max, thisVal);
//     }

//     for (let j = 0; j < result.length; j++) {
//       const [pos, val] = result[j];
//       if (thisVal) {
//         const newVal = Math.min(val, thisVal);
//         result[j][1] = newVal;
//         max = Math.max(max, newVal * (i - pos + 1));
//       } else {
//         result.splice(j, 1);
//         j--;
//       }
//     }
//   }
//   return max;
// };

// over time 计算每个位置左边和右边第一个比它小的数的位置，计算中间的面积 O(n^2)
// var largestRectangleArea = function (heights) {
//   let max = 0;
//   const find = (val, index) => {
//     if (!val) return;
//     let i = index - 1;
//     let j = index + 1;
//     // to left
//     while (i > -1) {
//       if (heights[i] >= val) {
//         i--;
//       } else {
//         break;
//       }
//     }

//     // to right
//     while (j < heights.length) {
//       if (heights[j] >= val) {
//         j++;
//       } else {
//         break;
//       }
//     }
//     max = Math.max(max, (j - i - 1) * val);
//   };

//   heights.forEach((val, index) => find(val, index));
//   return max;
// };

var largestRectangleArea = function (heights) {};

console.log(largestRectangleArea([2, 0, 2]));
