/**
 * @param {number[]} nums
 * @param {number} x
 * @return {number}
 */
const sumArr = (nums) => nums.reduce((sum, num) => sum + num, 0);

var minOperations = function (nums, x) {
  let left = -1,
    right = 0,
    leftSum = 0,
    rightSum = sumArr(nums),
    len = nums.length,
    result = -1;

  if (leftSum + rightSum < x) return result;

  while (left < len) {
    if (leftSum + rightSum > x) {
      if (right < len) {
        rightSum -= nums[right] || 0;
        right++;
      } else {
        leftSum += nums[left] || 0;
        left++;
      }
    } else if (leftSum + rightSum === x) {
      const newRes = len - right + left + 1;
      result = result === -1 ? newRes : Math.min(result, newRes); // 需要考虑初始赋值是 -1 的情况
      if (right < len) {
        rightSum -= nums[right] || 0;
        right++;
      } else {
        leftSum += nums[left] || 0;
        left++;
      }
    } else {
      if (left + 1 === right) {
        rightSum -= nums[right] || 0;
        right++;
      } else {
        left++;
        leftSum += nums[left] || 0; // 这里顺序不一样，先 left++ 再求和
      }
    }
  }
  return result;
};

// 每次都 reduce 求一遍滑动窗口的和，会导致时间超出
