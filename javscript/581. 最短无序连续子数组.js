/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function (nums) {
  const sorted = [...nums].sort((a, b) => a - b);
  let i = -1;
  let j = nums.length;
  while (sorted[i + 1] === nums[i + 1] && i < j) {
    i++;
  }
  while (j > i && sorted[j - 1] === nums[j - 1]) {
    j--;
  }

  return j !== i ? j - i - 1 : 0;
};
