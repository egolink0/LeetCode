/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
// 超时
// var dailyTemperatures = function (temperatures) {
//   let indexList = [];
//   const result = new Array(temperatures.length).fill(0);
//   for (let i = 0; i < temperatures.length; i++) {
//     for (let m = 0; m < indexList.length; m++) {
//       const [val, valIndex] = indexList[m];
//       if (val < temperatures[i]) {
//         result[valIndex] = i - valIndex;
//         indexList.splice(m, 1);
//         m--;
//       }
//     }
//     indexList.push([temperatures[i], i]);
//   }
//   return result;
// };

// 栈
// shift 和 unshift 会超时，性能问题
// 换成 push 和 pop 就过了
var dailyTemperatures = function (temperatures) {
  let indexList = [];
  const result = new Array(temperatures.length).fill(0);
  for (let i = 0; i < temperatures.length; i++) {
    const val = temperatures[i];
    while (indexList.length && indexList[indexList.length - 1][0] < val) {
      const [, valIndex] = indexList.pop();
      result[valIndex] = i - valIndex;
    }

    indexList.push([val, i]);
  }
  return result;
};
