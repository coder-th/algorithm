package main

import "fmt"
//
//  numWays
//  @Description: 使用递归的方式
//  @param n
//  @return ans
//
/*func numWays(n int) (ans int) {
	if n <= 1 {
		return 1
	}
	for i := 2; i <= n; i++ {
		// 状态转移方程为 f[x] = f[x-1] + f[x-2]
		ans = (numWays(n-1) + numWays(n-2))%1000000007
	}
	return
}*/
//
//  numWays
//  @Description: 使用滚动数组进行解决
//  @param n
//  @return ans
//
func numWays(n int) (ans int) {
	if n <= 1 {
		return 1
	}
	pre,current := 1,1
	for i := 2; i <= n; i++ {
		// 状态转移方程为 f[x] = f[x-1] + f[x-2]
		ans = (pre + current)%1000000007
		pre = current
		current = ans
	}
	return
}
func main() {
	fmt.Println(numWays(2))// expect 2
	fmt.Println(numWays(7))// expect 21
	fmt.Println(numWays(0))// expect 1
}
