/**
 * @param {number[]} hours
 * @return {number}
 */

var longestWPI = function (hours) {
  let step = 0;
  let list = [0];
  let countList = hours[step] > 8 ? [1] : [-1]; // 优化，记录前缀和，判断是否大于 0，比存储个数更省空间
  let max = hours[step] > 8 ? 1 : 0;
  hours[step] = hours[step] > 8 ? 1 : -1; // 使用 1 和 -1 表示

  for (let j = 1; j < hours.length; j += 1) {
    hours[j] = hours[j] > 8 ? 1 : -1;
    const count = hours[j] > 0 ? countList[j - 1] + 1 : countList[j - 1] - 1;
    if (count > 0) max = Math.max(max, j + 1);
    list.push(j); // 记录结束的位置
    countList.push(count);
  }
  while (step < hours.length) {
    list.forEach((item, index) => {
      if (item) {
        if (step === item) {
          list[index] = null;
        } else {
          const prev = hours[step];
          // 每次往前走一步，剔除前一个的数据
          prev > 0 ? countList[index]-- : countList[index]++;
          if (countList[index] > 0) max = Math.max(max, item - step);
        }
      }
    });
    step++;
  }
  return max;
};
