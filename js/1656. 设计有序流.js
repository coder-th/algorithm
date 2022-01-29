/**
 * @param {number} n
 */
var OrderedStream = function (n) {
  this.steam = new Array(n + 1);
  this.ptr = 1;
  this.max = 1;
};

/**
 * @param {number} idKey
 * @param {string} value
 * @return {string[]}
 */
OrderedStream.prototype.insert = function (idKey, value) {
  let result = [];
  this.max = Math.max(this.max, idKey);
  this.steam[idKey] = value;
  if (idKey === this.ptr) {
    for (let index = this.ptr; index <= this.max; index++) {
      if (this.steam[index] !== undefined) {
        result.push(this.steam[index]);
        this.ptr = index + 1;
      } else {
        // 遇到undefined了要停止
        break;
      }
    }
  }
  return result;
};

/**
 * Your OrderedStream object will be instantiated and called as such:
 * var obj = new OrderedStream(n)
 * var param_1 = obj.insert(idKey,value)
 */
var steam = new OrderedStream(5);
console.log(steam.insert(3, "cccc"));
console.log(steam.insert(1, "aaaa"));
console.log(steam.insert(2, "bbbb"));
console.log(steam.insert(5, "eeee"));
console.log(steam.insert(4, "dddd"));
