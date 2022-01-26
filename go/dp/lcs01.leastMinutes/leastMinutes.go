package main

import "fmt"
//
//  leastMinutes
//  @Description:  动态规划完成
//  @param n
//  @return int
//
/*func leastMinutes(n int) int {
	dp := make([]int,n+1)
	dp[0] = 0
	for i := 1; i <= n; i++ {
		dp[i] = getMin(dp[i-1]+1,dp[(i+1)/2]+1)
	}
	return  dp[n]
}
func getMin(a int,b int) int {
	if a > b {
		return b
	}else {
		return a
	}
}*/
func leastMinutes(n int) int {
	load,count := 1,0
	for load < n {
		load *= 2
		count++
	}
	return count+1
}
func main() {
fmt.Println(leastMinutes(2))// expect 2
fmt.Println(leastMinutes(4))// expect 3
}
