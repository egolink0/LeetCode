/**
 * @param {number} n
 * @return {number}
 */

// dfs 超时
// var climbStairs = function(n) {
//     let count = 0;
//     const dfs = (sum) => {
//         if(sum === n) return count++;
//         if(sum > n) return;
//         [1,2].forEach(num =>{
//             dfs(sum + num);
//         })
//     };
//     dfs(0);
//     return count;
// };

// 动态规划 f(n) = f(n-1) + f(n-2)
// 最后一步踏一步，则前面有 f(n-1) 种方案
// 最后一步踏2步，则前面有 f(n-2) 种方案
// var climbStairs = function(n) {
//     const memo = {};
//     const dp = (n) =>{
//         if(n===1) return 1; 
//         if(n===2) return 2;
//         if(memo[n]) return memo[n];
//         const sum = dp(n-1) + dp(n-2);
//         memo[n] = sum;
//         return sum;
//     };
//     return dp(n)
// };

// 官方 正向
var climbStairs = function(n) {
    let x2 = 2;
    let x1 = 1;
    if(n===1) return x1;
    if(n===2) return x2;
    let i = 3;
    while(i<=n){
        let c = x1 +x2;
        x1 = x2;
        x2 = c;
        i++;
    }
    return x2;
};
