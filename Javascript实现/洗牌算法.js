// 复杂度为 O(n2)
// const shuffle = arr => {
//   let res = [], random
  
//   while(arr.length > 0) {
//     random = parseInt(Math.random() * arr.length)
//     console.log(random)
//     res.push(arr.splice(random, 1)[0])
//   }
//   return res;
// }
// let res = shuffle([2,3,6,22,6,2]);
// console.log(res);

// O(n)
const shuffle2 = arr => {
  let n = arr.length,
      tmp,
      random
  while (n != 0) {
      random = parseInt(Math.random() * n)
      n--
      // 交换
      tmp = arr[n]
      arr[n] = arr[random]
      arr[random] = tmp
  }

  return arr;
}
console.log(shuffle2([6,3,2,2,6,2]));