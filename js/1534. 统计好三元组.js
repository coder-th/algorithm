/**
 * @param {number[]} arr
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var countGoodTriplets = function (arr, a, b, c) {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      for (let k = j + 1; k < arr.length; k++) {
        const isLessA = Math.abs(arr[i] - arr[j]) <= a;
        const isLessB = Math.abs(arr[j] - arr[k]) <= b;
        const isLessC = Math.abs(arr[i] - arr[k]) <= c;
        if (isLessA && isLessB && isLessC) {
          result++;
        }
      }
    }
  }
  return result;
};

console.log(countGoodTriplets([3, 0, 1, 1, 9, 7], 7, 2, 3));
console.log(countGoodTriplets([1, 1, 2, 2, 3], 0, 0, 1));
