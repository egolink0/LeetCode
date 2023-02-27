/**
 * @param {number[]} nums
 * @return {number}
 */
var movesToMakeZigzag = function(nums) {
    let count0Min = 0; // 偶数最小，下降
    let count1Min = 0; // 奇数最小，下降
    for(let i=0;i<nums.length;i ++){
        const isOdd = !!(i%2);
        const num = nums[i];
        const left = nums[i-1];
        const right = nums[i+1];
        const min = Math.min(left||Number.MAX_VALUE,right|| Number.MAX_VALUE);
        if(min <= num){
            if(isOdd) count0Min += num - min +1;
            else count1Min += num - min +1;
        }
    }
    return Math.min(count0Min,count1Min)
};
