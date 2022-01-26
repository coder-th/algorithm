package main

import "fmt"
/*

	746. 使用最小花费爬楼梯
		 https://leetcode-cn.com/problems/min-cost-climbing-stairs/

*/
/*func minCostClimbingStairs(cost []int) (min int) {
	n := len(cost)
	dp := make([]int,n+1)
	// 状态转移方程=> f(x) = min{ f(x-1)+cost(x-1) ,  f(x-2)+cost(x-2) }
	for i := 2; i <= n; i++ {
		dp[i] = Min(dp[i-1]+cost[i-1],dp[i-2]+cost[i-2])
	}
	return dp[n]
}*/
//
//  minCostClimbingStairs
//  @Description: 滑动数组优化空间复杂度
//  @param cost
//  @return min
//
func minCostClimbingStairs(cost []int) (min int) {
	n := len(cost)
	pre,current,next := 0,0,0
	// 状态转移方程=> f(x) = min{ f(x-1)+cost(x-1) ,  f(x-2)+cost(x-2) }
	for i := 2; i <= n; i++ {
		next = Min(pre+cost[i-2],current+cost[i-1])
		pre = current
		current = next
	}
	return next
}
func Min(a int,b int) int {
	if a > b {
		return b
	}
	return  a
}
func main() {
	fmt.Println(minCostClimbingStairs([]int{10, 15, 20})) // expect: 15
	fmt.Println(minCostClimbingStairs([]int{1, 100, 1, 1, 1, 100, 1, 1, 100, 1})) // expect: 6

}
