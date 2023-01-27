/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
//  贪心
var getSmallestString = function(n, k) {
    let after = "";
    let before = "";
    while(n >0) {
       if(n===1){
           const c = String.fromCharCode(96 + k);
            before += c;
       }else if(k <= 25+n ){
           before += "a";
           k -= 1;
       }else{
           after += "z";
           k -= 26;
       }
       n--;
    }
    return before + after;
};
