/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberOfPairs = function (nums) {
  const map = {};
  let count = 0;
  for (let n of nums) {
    if (map[n]) {
      map[n] = 0;
      count++;
    } else {
      map[n] = 1;
    }
  }
  const restNum = Object.values(map).filter(item => item === 1).length;
  return [count, restNum];
};
