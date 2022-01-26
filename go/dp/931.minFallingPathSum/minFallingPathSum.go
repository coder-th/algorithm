package main

import (
	"fmt"
	"math"
)
// 声明一个全局变量，用来保存上一次的计算结果，作为备忘录
var memo [][]int
func minFallingPathSum(matrix [][]int) int {
	res := 9999
	memo = make([][]int,len(matrix))
	for i := 0; i < len(matrix); i++ {
		for j := 0; j <= len(matrix); j++ {
			// 初始化备忘录
			memo[i] = append(memo[i],88888)
		}
	}
	for j := 0; j< len(matrix); j++ {
		res = min(res,dp(matrix,len(matrix) -1,j ))
	}
	return res
}
func dp(matrix [][]int,i int,j int) int {
	if i < 0 || j < 0 || i >= len(matrix) || j >= len(matrix[0]) {
		//  超出边界情况了
		return 9999
	}
	if memo[i][j] != 88888 {
		// 之前已经计算过了，可以直接拿来用
		return memo[i][j]
	}
	if i == 0 {
		return matrix[i][j]
	}
	// 状态转移
	return matrix[i][j] + getMin(dp(matrix,i-1,j-1),dp(matrix,i-1,j),dp(matrix,i-1,j+1))
}

func getMin(a int,b int,c int) int  {
	return int(math.Min(math.Min(float64(a),float64(b)),float64(c)))
}
func min(a int,b int)  int{
	if a <b {
		return a
	}else {
		return b
	}
}

func main() {
	fmt.Println(minFallingPathSum([][]int{{2,1,3},{6,5,4},{7,8,9}}))// expect: 13
	fmt.Println(minFallingPathSum([][]int{{-19,57},{-40,-5}}))// expect: -59
	fmt.Println(minFallingPathSum([][]int{{-48}}))// expect: -48
	fmt.Println(minFallingPathSum([][]int{{82,81},{69,33}}))// expect: 114
}
