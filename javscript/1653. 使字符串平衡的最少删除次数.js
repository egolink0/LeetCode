/**
 * @param {string} s
 * @return {number}
 */

var minimumDeletions = function (s) {
  const aList = []; // 从右边往左边数 a 的个数
  const bList = []; // 从左往右数 b 的个数
  for (let i = 0; i < s.length; i++) {
    let last = bList[i - 1] || 0;
    bList[i] = s[i] === "b" ? last + 1 : last;
  }
  for (let j = s.length - 1; j > -1; j--) {
    let last = aList[j + 1] || 0;
    aList[j] = s[j] === "a" ? last + 1 : last;
  }

  let min = Number.MAX_VALUE;
  // 找出哪一个 aList[m-1] + bList[m] 的值最小
  for (let m = 0; m <= s.length; m++) {
    min = Math.min((bList[m - 1] || 0) + (aList[m] || 0), min);
  }
  return min;
};
