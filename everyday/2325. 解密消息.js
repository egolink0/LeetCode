/**
 * @param {string} key
 * @param {string} message
 * @return {string}
 */

 const getLetter = index => String.fromCharCode(index+97);

var decodeMessage = function(key, message) {
    const map = {};
    let count =0;
    key.split(" ").forEach(word =>{
        word.split("").forEach(char =>{
            if(map[char] === undefined){
                map[char] = count;
                count++;
            }
        });
    })
    return message.split(" ").map(word => word.split("").map(char => getLetter(map[char])).join("")).join(" ");
};
