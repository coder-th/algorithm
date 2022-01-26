package main

import (
	"fmt"
	"math"
)
/*
121. 买卖股票的最佳时机
	 https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock/
*/


//
//  maxProfit
//  @Description: 暴力解法
//  @param prices
//  @return res
//
/*func maxProfit(prices []int) (res int) {
	for i := 0; i < len(prices); i++ {
		for j := i+1; j <  len(prices); j++ {
			diff := prices[j] - prices[i]
			if res < diff {
				res = diff
			}
		}
	}
	return
}*/
func maxProfit(prices []int) (res int) {
	// 转移方程  max{ maxProfit, prices[i] - minProfit  }
	min := int(math.Pow10(4))
	for i := 0; i < len(prices); i++ {
		if min > prices[i] {
			min = prices[i]
		}else if prices[i] - min > res {
			res = prices[i] - min
		}
	}
	return
}
func main() {
	fmt.Println(maxProfit([]int{7,1,5,3,6,4})) // expect: 5
	fmt.Println(maxProfit([]int{7,6,4,3,1})) // expect: 0
}
