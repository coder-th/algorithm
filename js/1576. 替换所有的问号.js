/**
 * @param {string} s
 * @return {string}
 */
var modifyString = function (s) {
  // 先将每个字符存到数组中
  var len = s.length;
  const arr = [...s];
  for (let i = 0; i < len; i++) {
    // 遇到问号
    if (arr[i] === "?") {
      for (let j = 0; j < 3; j++) {
        // 如果arr[i-1] !== 'a' && arr[i+1] !== 'a',那么 arr[i]就可以取'a'(跳出循环)，否则下一次循环，比较'b'
        const cur = String.fromCharCode("a".charCodeAt() + j); // 'a' | 'b' | 'c'
        if (i > 0 && arr[i - 1] === cur || i < len-1 && arr[i + 1] === cur) {
            continue
        }
        arr[i] = cur
        break
      }
    }
  }
  return arr.join("");
};
console.log(modifyString("?zs")); //"azs"
console.log(modifyString("ubv?w")); //"ubvaw"
console.log(modifyString("j?qg??b")); //"jaqgacb"
console.log(modifyString("??yw?ipkj?")); //"acywaipkja"
console.log(modifyString("??yw?ipka?")); //"acywaipkab"
