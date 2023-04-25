/**
 * @param {number[]} nums
 * @return {number}
 */

// 两次动态规划，取最大
var rob = function(nums) {
    const len = nums.length;
    if(len ===0) return 0;
    if(len === 1) return nums[0]
    if(len === 2) return Math.max(nums[0],nums[1])

    const memo1 = [nums[0],nums[0]];
    for(let i=2;i<nums.length-1;i++){
        memo1[i] = Math.max(memo1[i-1],memo1[i-2]+nums[i]);
    }

    const memo2 = [0,nums[1]];
    for(let i=2;i<nums.length;i++){
        memo2[i] = Math.max(memo2[i-1],memo2[i-2]+nums[i]);
    }
    return Math.max(memo1[len-2],memo2[len-1]) 
};
