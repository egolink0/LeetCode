/**
 * @param {string} s
 * @param {string[][]} knowledge
 * @return {string}
 */
var evaluate = function(s, knowledge) {
    const map = knowledge.reduce((pre,item) => { // 这里使用 ... 拷贝方式返回值，耗时
        pre[item[0]]= item[1];
        return pre;
    },{} );

    let pair = "";
    let result = "";

    s.split("").forEach((char) => {
             if(char === ")"){
                 pair += char;
                 const key = pair.slice(1,pair.length-1);
                 result += map[key] || "?";
                 pair = "";
             }else if(char === "("){
                 result += pair;
                 pair = char;
             }else{
                 pair += char;
             }
    })
    return result + pair;
};
