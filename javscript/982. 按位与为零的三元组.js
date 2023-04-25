/**
 * @param {number[]} nums
 * @return {number}
 */
var countTriplets = function(nums) {
    let count = 0;
    for(let i=0;i<nums.length;i++){
        for(let j=0;j<nums.length;j++){
            for(let k=0;k<nums.length;k++){
                const res = nums[i] & nums[j] & nums[k];
                if(res ===0){
                    count++;
                }
            }
        }
    }
    return count
};
