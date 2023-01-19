/**
 * @param {number} m
 * @param {number} k
 */
var MKAverage = function(m, k) {
    this.m = m;
    this.k = k;
    this.left = [];
    this.mid = [];
    this.right = [];
    this.list = [];
};

const deleteNum = (arr,num) =>{
    for(let i=0;i<arr.length;i++){
        if(num === arr[i]){
            arr.splice(i,1);
            return;
        }
    }
}

const insertNum = (arr,num) =>{
    if(num <= arr[0]) {
        arr.unshift(num);
        return;
    }
    for(let i=0;i<arr.length;i++){
        if(num < arr[i]){
            arr.splice(i,0,num)
            return;
        }
    }
    arr.push(num);
}

/** 
 * @param {number} num
 * @return {void}
 */
MKAverage.prototype.addElement = function(num) {
    const {m,k,list} = this;
    list.push(num);
    if(list.length === m){
        // 初始化 left ，mid 和 right
        const arr = _.clone(list).sort((a,b) => a-b);
        this.left = arr.slice(0,k);
        this.right = arr.slice(arr.length-k);
        arr.splice(arr.length-k);
        arr.splice(0,k);
        this.mid = arr;
    }else if(list.length > m) {
        // 添加 num
        const min = this.right[0];
        const max = this.left[this.left.length-1];
        if(num > min){
            insertNum(this.right,num);
            this.mid.push(this.right[0]);
            this.right.shift();
        }else if(num < max) {
            insertNum(this.left,num);
            this.mid.unshift(this.left[this.left.length-1]);
            this.left.pop();
        }else{
            insertNum(this.mid,num);
        }
        // 删掉一个 last
        const last = list[list.length-m-1];
        const leftMax = this.left[this.left.length-1];
        const rightMin = this.right[0];
        if(last<= leftMax){
            deleteNum(this.left,last);
            this.left.push(this.mid[0]);
            this.mid.shift();
        }else if(last >= rightMin){
            deleteNum(this.right,last);
            this.right.unshift(this.mid[this.mid.length-1]);
            this.mid.pop();
        }else {
            deleteNum(this.mid,last);
        }
    }
};

/**
 * @return {number}
 */
MKAverage.prototype.calculateMKAverage = function() {
    
    if(this.list.length < this.m ) return -1;

    const sum = this.mid.reduce((s,c) =>{
        return s + c
    },0);
    return Math.floor(sum / this.mid.length);
   
};

/**
 * Your MKAverage object will be instantiated and called as such:
 * var obj = new MKAverage(m, k)
 * obj.addElement(num)
 * var param_2 = obj.calculateMKAverage()
 */
