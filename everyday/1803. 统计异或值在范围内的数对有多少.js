/**
 * @param {number[]} nums
 * @param {number} low
 * @param {number} high
 * @return {number}
 */

const toBinaryArr = (num) => num.toString(2);

var countPairs = function (nums, low, high) {
  let sum = 0;
  let left = 0;
  let right = 1;
  while (left < nums.length - 1) {
    // let a = nums[left].toString(2);
    // let b = nums[right].toString(2);
    // const maxLength = Math.max(a.length,b.length);
    // a = a.padStart(maxLength,0).split("");
    // b = b.padStart(maxLength,0).split("");
    // const res = [];
    // console.log(a,b)
    // a.forEach((item,itemIndex)=>{
    //     res.push(item === b[itemIndex] ? "0" : "1");
    // })

    // const resNum = parseInt(res.join(""),2);

    const resNum = nums[left] ^ nums[right];
    if (resNum >= low && resNum <= high) {
      sum++;
    }
    if (right !== nums.length - 1) {
      right++;
    } else {
      left++;
      right = left + 1;
    }
  }
  return sum;
};
