/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
// var reverseString = function (s) {
//   if (s.length === 0) return s;
//   // 先弹出栈底元素，
//   const ret = process(s);
//   //   继续反转，直至结束
//   reverseString(s);
//   //  添加收到的值(每一次的栈底)
//   s.push(ret);
//   /**
//    * 删除栈底元素，并且返回该元素
//    * @param {*} stack
//    * @returns
//    */
//   function process(stack) {
//     const result = stack.pop();
//     if (stack.length === 0) {
//       return result;
//     }

//     // 继续执行,直至每次拿到下一次的值
//     const last = process(stack);
//     // 拿到的都是每次的栈底
//     stack.push(result);
//     return last;
//   }
//   return s;
// };

function reverseString(s) {
  if (s.length === 0) return s;
  let L = 0,
    R = s.length - 1;
  while (L <= R) {
    const temp = s[L];
    s[L] = s[R];
    s[R] = temp;
    L++;
    R--;
  }
  return s;
}

console.log(reverseString(["h", "e", "l", "l", "o"]));
console.log(reverseString(["H", "a", "n", "n", "a", "h"]));
