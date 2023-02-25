/**
 * @param {string} s1
 * @param {string} s2
 * @return {number}
 */
//  
var minimumSwap = function(s1, s2) {
    let xCount = 0;
    let yCount = 0;
    let s1DiffxCount = 0;
    let s1DiffyCount = 0;
    for(let i=0;i<s1.length;i++){
        if(s1[i] !== s2[i]){
            s1[i] ==="x" ? xCount++ :yCount++;
            s2[i] === "x" ? xCount++: yCount++;
            s1[i] === "x" ? s1DiffxCount++ : s1DiffyCount++;
        }
    }
    if(xCount%2 || yCount%2) return -1;
    // xx yy 的情况，交换一次达成
    const xxCaseCount = Math.floor(s1DiffxCount/2) + Math.floor(s1DiffyCount/2);
    // xy yx 情况下，交换两次达成
    const xyCaseCount = s1DiffyCount%2;
    return xxCaseCount + (xyCaseCount ? 2 : 0)
};
