/**
 * @param {number[][]} brackets
 * @param {number} income
 * @return {number}
 */
var calculateTax = function(brackets, income) {
    let pay = 0;
    for(let i=0;i<brackets.length;i++){
        if(!income){
            return pay;
        }
        const [limit,per] = brackets[i];
        const l = limit - (brackets[i-1]?.[0] || 0);
        if(income > l){
            pay += l * per / 100;
            income -= l
        }else{
            pay += income * per /100;
            income = 0;
        }
    }
    return pay;
};
