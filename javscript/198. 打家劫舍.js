/**
 * @param {number[]} nums
 * @return {number}
 */

//  dfs
// var rob = function(nums) {
//     let visited = new Array(nums.length).fill(0);
//     let max = 0;
//     const memo = new Array(nums.length).fill(0);

//     const dfs = (i,nums,sum) =>{
//         if(i === nums.length){
//             max = Math.max(max,sum)
//             return;
//         }
//         // 如果都是没有钱，一定跳过，不选
//         if(nums[i] === 0){
//             visited[i] = 0; // 不选
//             dfs(i+1,nums,sum);
//             return
//         }
//         // 前一个被偷了，不能偷
//         if(i===0 || !visited[i-1]){
//             const newSum = sum+nums[i];
//             // 如果在 index 家的时候，已经有金额更高的方案，就放弃这种选择，不优
//             if(memo[i] > newSum) return ;
//              visited[i] = 1; // 选
//             dfs(i+1,nums,newSum);
//             memo[i] = Math.max(memo[i],newSum);
//         }
//         visited[i] = 0; // 不选
//         dfs(i+1,nums,sum);
//     }

//     dfs(0,nums,0);
//     return max;
// };

// 动态规划，每一步的最优选择，是 Math.max(当前金额+隔一个的最优金额，上一个金额）
var rob = function(nums) {
    if(nums.length === 0) return 0;
    if(nums.length === 1) return nums[0];
    if(nums.length === 2) return Math.max(nums[0],nums[1]);

    const memo = [nums[0],Math.max(nums[0],nums[1])];
    for(let i=2;i<nums.length;i++){
        memo[i] = Math.max(memo[i-1],nums[i]+memo[i-2])
    }
    return memo[nums.length-1];
}
