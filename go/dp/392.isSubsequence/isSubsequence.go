package main

import (
	"fmt"
)

/*
	392. 判断子序列
	https://leetcode-cn.com/problems/is-subsequence/
*/
/*func isSubsequence(s string, t string) (ret bool) {
	// 两个字符串的长度
	m,n := len(s),len(t)
	if m == n {
		// 如果长度相同，直接比较字符串是否相同
		return s == t
	}
	// 初始化连个指针，i=> 短的字符串 j => 长的字符串
	i,j := 0,0
	for i < m && j < n {
		if s[i] == t[j] {
			// 相同 的情况，短的指针需要移动
			i++
		}
		// 指向长字符串的指针需要不断地移动
		j++
	}
	// 移动结束后，判断是否短的已经完全走完
	return i == m
}*/
//
//  isSubsequence
//  @Description: 使用二分查找
//  @param s
//  @param t
//  @return ret
//
func isSubsequence(s string, t string) (ret bool) {
	// 先对 t 建立一个 hashTable
	hashTable := map[uint8][]int{}
	//
	for i := 0; i < len(t); i++ {
		hashTable[t[i]] = append(hashTable[t[i]],i)
	}
	//lastIndex := 0
	// 循环s的每一个字符，在哈希表中查找
	for i := 0; i < len(s); i++ {
		fmt.Println(s[i],hashTable[s[i]])
	}
	return
}
//
//  nearNumber
//  @Description: 找到一个最接近大于该数的数字
//  @param number
//  @param arr
//  @return int
//
func nearNumber(number int,arr []int)int  {
	// 使用二分进行查找
	left,right := 0,len(arr)-1
	for right > left{
		mid := (right - left) / 2
		if number <= arr[mid]  {
			left = mid
		}else {
			right = mid
		}
	}
	return arr[left]
}

func main() {
	fmt.Println(isSubsequence("abc","ahabgdc"))// expect: true
	fmt.Println(isSubsequence("axc", "ahabgdc"))// expect: false
	fmt.Println(nearNumber(3,[]int{0,1,2,3,4,5,6}))
}
