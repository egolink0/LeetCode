/**
 * @param {number[]} nums
 * @return {number}
 */

// //  模拟
// var minMaxGame = function(nums) {
//     while(nums.length !==1){
//         const n = nums.length;
//         const newArr = [];
//         for(let i = 0;i<n/2;i++){
//             const n1 = nums[2 * i];
//             const n2 =  nums[2 * i + 1];
//             newArr[i] = i%2 ? Math.max(n1,n2) :Math.min(n1,n2);
//         }
//          nums = newArr;
//     }
//     return nums[0]
// };

// 递归
var minMaxGame = function(nums) {
    if(nums.length === 1) return nums;
    const n = nums.length;
    const newArr = [];
    for(let i = 0;i<n/2;i++){
        const n1 = nums[2 * i];
        const n2 =  nums[2 * i + 1];
        newArr[i] = i%2 ? Math.max(n1,n2) :Math.min(n1,n2);
    }
    return minMaxGame(newArr)
};
