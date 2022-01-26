package main

import "fmt"

/*
	119. 杨辉三角 II
https://leetcode-cn.com/problems/pascals-triangle-ii/

*/
func getRow(rowIndex int) []int {
	// 申请空间存放数据
	ans := make([][]int,rowIndex+1)
	for i := 0; i <= rowIndex; i++ {
		// 申请空间存放每一行数据
		ans[i] = make([]int,i+1)
		for j := 0; j <= i; j++ {
			if j== 0 || i == j {
				// 第一列和最后一列的数据都为1
				ans[i][j] = 1
			}else {
				// 状态转移方程 f[i,j] = f[i-1,j-1] + f[i-1,j]
				ans[i][j] = ans[i-1][j-1] + ans[i-1][j]
			}
		}
	}
	return ans[rowIndex]
}
func main() {
	fmt.Println(getRow(3)) // expect: [1,3,3,1]
	fmt.Println(getRow(0)) // expect: [1]
	fmt.Println(getRow(1)) // expect: [1,1]
}