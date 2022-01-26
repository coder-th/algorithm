package main

import "fmt"

func numWays(n int, relation [][2]int, k int) int {
	dp := make([][]int, k+1)
	for i := range dp {
		dp[i] = make([]int, n)
	}
	dp[0][0] = 1
	for i := 0; i < k; i++ {
		for _, r := range relation {
			src, dst := r[0], r[1]
			dp[i+1][dst] += dp[i][src]
		}
	}
	return dp[k][n-1]
}

func main() {
fmt.Println(numWays(5,[][2]int{{0,2},{2,1},{3,4},{2,3},{1,4},{2,0},{0,4}},3))
}
