/**
 * @param {string} sentence1
 * @param {string} sentence2
 * @return {boolean}
 */



const getCommomPos = (sen1,sen2) =>{
    if(sen1.length === 0 && sen2.length===0){
        return {p:-1,preArr:[]}
    }
    let p = 0;
    while(true){
        if(sen1[p]== sen2[p]){
            p++;
        }else{
            break;
        }
    };
    // slice api ,-1
    return {p:p-1,preArr: sen1[p] ? sen1.slice(0,p) : sen2.slice(0,p)};
};

var areSentencesSimilar = function(sentence1, sentence2) {
    if(sentence2 === sentence1) return true;

    const sen1 = sentence1.split(" ");
    const sen2 = sentence2.split(" ");

    const min = Math.min(sen2.length,sen1.length);

    const {p,preArr} = getCommomPos(sen1,sen2);

    const r1 = sen1.slice(p+1).reverse();
    const r2 = sen2.slice(p+1).reverse();

    const {p:rp,preArr:sufArr} = getCommomPos(r1,r2);

    console.log(preArr,sufArr)
    return (preArr.length || sufArr.length) && (p+1 + rp+1 === min)
};
