var MinStack = function () {
  this.stack = [];
  this.minStack = [];
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  this.stack.push(val);
  let index = -1;
  this.minStack.forEach((item, itemIndex) => {
    if (index === -1 && item > val) {
      index = itemIndex;
    }
  });
    (index === -1) && (index = this.minStack.length);
  this.minStack.splice(index, 0, val);
   console.log(index,this.minStack)
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  const val = this.stack.pop();
  let index = this.minStack.indexOf(val);
  this.minStack.splice(index, 1);
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.minStack[0];
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
