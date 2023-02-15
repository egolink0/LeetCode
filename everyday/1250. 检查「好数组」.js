/**
 * @param {number[]} nums
 * @return {boolean}
 */

// 相减
// const gcd = (n1, n2) => {
//   let max = n1 > n2 ? n1 : n2;
//   let min = n1 > n2 ? n2 : n1;
//   while (max !== min) {
//     let res = max - min;
//     max = res > min ? res : min;
//     min = res > min ? min : res;
//   }
//   return max;
// };
const gcd = (a, b) => (b ? gcd(b, a % b) : a);
const getCounts = nums => {
  const count = [];
  for (let i = 0; i < nums.length; i = i + 2) {
    let num;
    if (nums[i + 1]) {
      num = gcd(nums[i], nums[i + 1]);
      count[i] = count[i + 1] = num;
    } else {
      num = gcd(nums[i], count[i - 1]);
      count[i] = num;
    }
  }
  return count;
};

var isGoodArray = function (nums) {
  if (nums.length === 1) return nums[0] === 1;
  if (nums.length === 2) return gcd(nums[0], nums[1]) === 1;
  nums.sort((a, b) => a - b);
  const count = getCounts(nums);
  let num = gcd(count[0], count[1]);
  for (let i = 2; i < count.length; i++) {
    num = gcd(num, nums[i]);
  }
  return num === 1;
};
