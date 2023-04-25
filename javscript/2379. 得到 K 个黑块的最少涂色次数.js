/**
 * @param {string} blocks
 * @param {number} k
 * @return {number}
 */
// 滑动窗口
var minimumRecolors = function (blocks, k) {
  if (k === 1) return blocks.indexOf("B") !== -1 ? 0 : 1;
  let diff = k - 1;
  let j = k;
  let minW = blocks
    .slice(0, k)
    .split("")
    .reduce((sum, c) => sum + (c === "W" ? 1 : 0), 0);
  let lastMin = minW;
  for (j; j < blocks.length; j++) {
    let newCount = lastMin;

    if (blocks[j] === "W") newCount++;
    if (blocks[j - diff - 1] === "W") newCount--;
    minW = Math.min(newCount, minW);
    lastMin = newCount;
  }
  return minW;
};
