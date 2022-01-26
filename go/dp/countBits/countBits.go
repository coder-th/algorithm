package main

import "fmt"
/*
	338. 比特位计数
          https://leetcode-cn.com/problems/counting-bits/
*/
func countBits(n int) []int {
	ans := make([]int,n+1)
	for i := 0; i <= n; i++ {
		oneCount := 0
		// 状态转移方程为 x = x & (x-1)
		for x := i; x != 0;x &= x-1 {
			oneCount++
		}
		ans[i] = oneCount
	}
	return ans
}
func main() {
	fmt.Println(countBits(2)) // expect: [0,1,1]
	fmt.Println(countBits(5)) // expect: [0,1,1,2,1,2]
}
