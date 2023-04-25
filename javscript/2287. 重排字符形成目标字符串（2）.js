/**
 * @param {string} s
 * @param {string} target
 * @return {number}
 */
var rearrangeCharacters = function(s, target) {
    const codes = {};
    const targetCodes = target.split("");

    s.split("").forEach(c => {
       codes[c] = codes[c] ? codes[c] +1 : 1;
    })

    let canGoOn = true,
        count = 0;
   
    while(canGoOn){
        let hasAllCode = true;
        targetCodes.forEach(c =>{
            if(codes[c]){
                codes[c] =  codes[c] -1 ;
            }else{
                hasAllCode = false;
            }
        })

        if(!hasAllCode){
            canGoOn = false;
        }else{
            count++;
        }
    }

    return count;
};


// 需要考虑 target 中有重复出现的字符
