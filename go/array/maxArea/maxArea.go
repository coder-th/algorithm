package main

import "fmt"

func maxArea(arr []int) (res int)  {
	start,end := 0,len(arr) -1
	for start < end {
		// 面积等于， (end - start) * (Min(arr[start],arr[end]))
		area := (end - start) * getMin(arr[start],arr[end])
		if res < area {
			res = area
		}
		if arr[start] > arr[end] {
			end--
		}else {
			start++
		}
	}
	return
}

func getMin(a int,b int) int  {
	if a > b {
		return b
	}
	return  a
}

func main() {
fmt.Println(maxArea([]int{1,8,6,2,5,4,8,3,7})) // 49
fmt.Println(maxArea([]int{4,3,2,1,4})) // 16
fmt.Println(maxArea([]int{1,2,1})) // 2
}
