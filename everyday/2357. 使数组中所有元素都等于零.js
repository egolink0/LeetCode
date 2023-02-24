/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function(nums) {
    let step = 0;
    nums.sort((a,b) => a-b);
    nums  = nums.filter(n => !!n);
    while(nums.length){
        nums = nums.map(item => item-nums[0]);
        nums  = nums.filter(n => !!n);
        step++;
    }
    return step;
};
