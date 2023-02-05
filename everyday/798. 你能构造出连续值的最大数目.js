/**
 * @param {number[]} coins
 * @return {number}
 */

// 排序后贪心
// 找规律，什么时候会截断
// 感觉是数学题了
var getMaximumConsecutive = function(coins) {
    let sum = 1;
    coins.sort((a,b) => a-b); // 升序
    for(let num of coins){
        if(num > sum){
            return sum;
        }
        sum += num;
    }

    return sum;
};

// 思路 1：求出所有子集的和，然后看每个整数是否能对得上。（超时！！！）
