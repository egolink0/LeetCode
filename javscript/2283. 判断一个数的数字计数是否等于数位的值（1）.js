/**
 * @param {string} num
 * @return {boolean}
 */
var digitCount = function(num) {
    const mapCount = {}; // 统计 index 出现的个数
    const mapRes = {} ; // 统计 index 应该出现的频率
    num.split("").forEach((item ,index) =>{
        const n = Number(item);
        mapRes[index] = n;
        mapCount[n] = (mapCount[n] || 0) + 1;
    })

    return Object.entries(mapRes).every(([k,v]) => v===0 ? !mapCount[k] : v === mapCount[k])
};
