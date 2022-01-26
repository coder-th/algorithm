package main

import "fmt"

func twoSum(nums []int, target int) []int {
	 hashTable := map[int]int{}
	// 生成映射表
	for i, x := range nums {
		if p,ok := hashTable[target-x];ok {
			// 说明在映射表中可以找到该元素
			return []int{p,i}
		}
		hashTable[x] = i
	}
	return nil
}

func main() {
	fmt.Println(twoSum([]int{3,3},6))
}
