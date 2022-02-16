/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
/* var lastRemaining = function (n, m) {
  if (n === 1) {
    return 0;
  }
  //   生成0-n-1的数组
  const array = new Array(n);
  for (let index = 0; index < array.length; index++) {
    array[index] = index;
  }
  let startIndex = 0;
  let len = array.length;
  while (len > 1) {
    const endIndex = (startIndex + m - 1) % len;
    array.splice(endIndex, 1);
    startIndex = endIndex;
    len--;
  }
  return array[0];
}; */
var lastRemaining = function (n, m) {
  let x = 0;
  for (let i = 2; i <= n; i++) {
    x = (x + m) % i;
  }
  return x;
};
console.log(lastRemaining(5, 3)); //3
console.log(lastRemaining(10, 17)); //2
