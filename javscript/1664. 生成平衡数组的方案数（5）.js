/**
 * @param {number[]} nums
 * @return {number}
 */

const calc = (arr) => {
    let odd = 0;
    let even = 0;
    arr.forEach((n,i)=>{
        if(i%2){
            odd += n;
        }else{
            even += n;
        }
    });
    return {odd,even}
};


// 前缀和，后缀和
var waysToMakeFair = function(nums) {
    let odd = 0;
    let even = 0;
    let count = 0;
    let {odd:afterOdd,even:afterEven} = calc(nums);

    nums.forEach((n,i)=>{
        if(i%2){
            afterOdd -= n;
        }else{
            afterEven -= n;
        }
        if((i + i - 1)%2){
            if(odd+afterEven === even + afterOdd){
                count++;
            }
        }else{
            if(odd + afterOdd === even+ afterEven){
                count++;
            }
        }
        if(i%2){
            odd += n;
        }else{
            even += n;
        }
    });
    return count;
};

// 模拟会超时
