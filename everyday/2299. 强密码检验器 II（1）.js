/**
 * @param {string} password
 * @return {boolean}
 */
var strongPasswordCheckerII = function(password) {
    if(password.length<8) return false;
    if(!/[a-z]/.test(password)) return false;
    if(!/[A-Z]/.test(password)) return false;
    if(!/[0-9]/.test(password)) return false;

    const chars = "!@#$%^&*()-+";
    let hasChar = false;
    const arr =password.split("");
    for(let i=0;i<arr.length;i++){
        if(i > 0 && arr[i] === arr[i-1]){
            return false;
        }
        if(!hasChar && chars.includes(arr[i])){
            hasChar = true;
        }
    }
    return hasChar;
};
