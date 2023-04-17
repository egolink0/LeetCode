/**
 * @param {number[]} height
 * @return {number}
 */

var trap = function (height) {
  const startVal = height.find(v => !!v); // 找到第一个不为 0 的值的位置
  let start = [startVal, height.indexOf(startVal)]; // [value, index]
  let end = [height[start[1] + 1], start[1] + 1]; // end 记录 下一个比 start 高的点，或者最接近 start 高度的点
  let result = 0;

  const calc = () => {
    for (let i = end[1] + 1; i < height.length; i++) {
      if (height[i] > end[0]) {
        // 不停的更新 end 节点，记录更靠近 start 高度的点的位置
        end[0] = height[i];
        end[1] = i;
      }
      if (end[0] >= start[0]) {
        break;
      }
    }

    if (end[1] - start[1] > 1) {
      // 计算两个间隔之间的面积，减去中间存在的高度，得到可以装下的雨水数量
      let count = 0;
      for (let m = start[1] + 1; m < end[1]; m++) {
        count += height[m];
      }
      const res = Math.min(start[0], end[0]) * (end[1] - start[1] - 1) - count;
      result += res > 0 ? res : 0;
    }
    start = end;
    end = [height[start[1] + 1], start[1] + 1];
  };

  while (start[1] < height.length - 1) {
    calc();
  }
  return result;
};
