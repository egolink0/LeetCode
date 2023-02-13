/**
 * @param {string} s
 * @return {number}
 */

const isOk = (count, replace) => {
  let result = true;
  for (let key in replace) {
    const res = (count[key] || 0) - Math.abs(replace[key]);
    if (res < 0) {
      return false;
    }
  }
  return result;
};

var balancedString = function (s) {
  if (!s) return 0;

  const map = {};
  ["Q", "W", "E", "R"].forEach(letter => (map[letter] = 0));
  const time = s.length / 4;
  // 统计各个字母出现个数
  for (let letter of s) {
    map[letter] = map[letter] + 1;
  }
  let isBalance = true;

  // 记录每个字母需要被替换的元素数量
  let replace = {};
  for (let k in map) {
    map[k] = time - map[k]; // 2 缺两个，-2 多了两个
    if (map[k]) isBalance = false;
    if (map[k] < 0) replace[k] = map[k];
  }
  if (isBalance) return 0;
  if (Object.values(replace).reduce((sum, cur) => (cur < 0 ? sum + cur : sum), 0) === -1) return 1;

  let min = s.length;
  let i = 0;
  let j = -1;
  const curCount = {};

  // 双指针
  while (j < s.length) {
    const res = isOk(curCount, replace);
    // 包含符合条件的子串
    if (res) {
      // 更新符合条件的最小子串长度
      min = Math.min(min, j - i + 1);
      if (replace[s[i]]) {
        // 如果已经被记录，则删除
        curCount[s[i]]--;
      }
      //   左指针右移，缩小范围
      i++;
    } else {
      // 需要的元素还缺，就右指针右移，扩大范围
      j++;
      if (replace[s[j]]) curCount[s[j]] = (curCount[s[j]] || 0) + 1;
    }
  }
  return min;
};
