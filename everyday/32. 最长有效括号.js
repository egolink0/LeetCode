/**
 * @param {string} s
 * @return {number}
 */
// 栈
var longestValidParentheses = function (s) {
  let list = [];
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    const letter = s[i];
    const end = stack[stack.length - 1];
    if (end && end[0] === "(" && letter === ")") {
      stack.pop();
      list.push(end[1]); // 记录每个可以成对的位置
    } else {
      stack.push([s[i], i]);
    }
  }

  list = list.sort((a, b) => a - b);
  if (!list.length) return 0;

  let index = list[0];
  let count = 2;
  let total = index + 2;
  let max = count;

  // 统计连续的位置的有效括号的数量
  for (let i = 1; i < list.length; i++) {
    const idx = list[i];
    if (idx <= total) {
      count += 2;
      total += 2;
    } else {
      max = Math.max(max, count);
      count = 2;
      total = idx + 2;
    }
    index = idx;
  }

  // 返回最大值
  return Math.max(max, count);
};
