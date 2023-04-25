/**
 * @param {number[]} nums
 * @return {number}
 */



// const rev  = (num) => Number(String(num%10).split("").reverse().join(""));

// 模拟超时
// var countNicePairs = function(nums) {
//     let count = 0;

//     for(let i=0;i<nums.length;i++){
//         for(let j=i+1;j<nums.length;j++){
//             if(nums[i] + rev(nums[j]) === nums[j] + rev(nums[i])){
//                 count++;
//             } 
//         }
//     }
//     return count % (10 ** 9 + 7)
// };

const rev = num => {
    let r = 0;
    while(num>0){
        r = r*10 + num%10;
        num = Math.floor(num / 10);
    }
    return r;
}

// 哈希表
var countNicePairs = function(nums) {
    let count = 0;
    const map = {};

    for(let i=0;i<nums.length;i++){
        const x = nums[i];
        const diff = x - rev(x);
        map[diff] = (map[diff] || 0) + 1;
    };

    Object.values(map).forEach(v =>{
        if(v === 2 ){
            count ++;
        } else  if(v >2){
            count += (v-1+1)*(v-1)/2
        }
    })

    return count % (10 ** 9 + 7)
};
