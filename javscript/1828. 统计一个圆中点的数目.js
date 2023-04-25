/**
 * @param {number[][]} points
 * @param {number[][]} queries
 * @return {number[]}
 */
var countPoints = function(points, queries) {
    const answers = [];
    queries.forEach((item,index) =>{
        const [x,y,r] = item;
        let count=0;
        points.forEach(p =>{
            const [x0,y0]=p;
            if(((x0-x)**2 + (y0-y)**2) <= r**2){
                count++;
            }
        })
        answers[index] = count;
    });
    return answers;
};
