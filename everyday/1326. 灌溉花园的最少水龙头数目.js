/**
 * @param {number} n
 * @param {number[]} ranges
 * @return {number}
 */

const getMap = (ranges, n) => {
  const r = ranges.reduce((map, cur, index) => {
    if (cur) {
      // 去掉 0 的情况
      const min = Math.max(0, index - cur);
      const max = Math.min(cur + index, n);
      if (map[min]) {
        map[min] = Math.max(map[min], max);
      } else {
        map[min] = max;
      }
    }
    return map;
  }, {});
  return r;
};

// 查找在当前范围内开头的水龙头，找出覆盖更远的一个
const findMax = (start, end, map) => {
  let max = end;
  while (start <= end) {
    max = Math.max(map[start] || 0, max);
    start++;
  }
  return max;
};

var minTaps = function (n, ranges) {
  const map = getMap(ranges, n); // 转化成范围图

  if (map[0] === n) return 1; // 恰好一个水龙头覆盖住
  if (Object.keys(map).length === 0) return -1; // 全是0
  let count = 1;
  let end = map[0];
  let start = 0;
  while (end < n) {
    let newEnd = findMax(start, end, map);
    if (newEnd === end) {
      // 如果没有找到新的覆盖的水龙头,说明断了
      return -1;
    }
    start = end;
    end = newEnd;
    count++;
  }
  return count;
};
