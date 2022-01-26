package main

import (
	"fmt"
	"math"
)
//
//  longestCommonPrefix
//  @Description: 查找字符串数组中的最长公共前缀，通过横向
//  @param strs
//  @return prefix
//
func longestCommonPrefix(strs []string) (prefix string) {
	if len(strs) == 0 || strs == nil {
		return ""
	}
	prefix = strs[0]
	for i := 1; i < len(strs); i++ {
		prefix  = compareCommonPrefix(prefix,strs[i])
		if prefix == "" {
			break
		}
	}
	return
}
//
//  compareCommonPrefix
//  @Description: 比较两个字符串之间的公共前缀
//  @param str1
//  @param str2
//  @return prefix
//
func compareCommonPrefix(str1 string,str2  string) (prefix string)  {
	if len(str1) == 0 || len(str2) == 0 {
		return  ""
	}
	// 需要比较的轮数
	count := int(math.Min(float64(len(str1)),float64(len(str2))))
	for i := 0; i < count; i++ {
		if str1[i] == str2[i] {
			prefix += string(str1[i])
		}else {
			break
		}
	}
	return
}
//
//  compareLongestPrefix
//  @Description: 查找字符串数组中的最长公共前缀,通过纵向
//  @param strs
//  @return prefix
//
func compareLongestPrefix(strs []string)(prefix string)  {
	if len(strs) == 0 || strs[0] == "" {
		return ""
	}
	for i := 0; i < len(strs[0]); i++ {
		char := strs[0][i]
		for j := 1 ;j < len(strs);j++ {
			if i == len(strs[j]) || strs[j][i] != char {
				// 只要开始有不同了或者下一个字符串长度刚好结束，就结束程序了
				return strs[0][:i]
			}
		}
	}
	return strs[0]
}
func main() {
	//fmt.Println(longestCommonPrefix([]string{"flower","flow","flight"}))
	//fmt.Println(longestCommonPrefix([]string{"dog","racecar","car"}))
	//fmt.Println(compareLongestPrefix([]string{"flower","flow","flight"}))
	//fmt.Println(compareLongestPrefix([]string{"dog","racecar","car"}))
	fmt.Println(compareLongestPrefix([]string{"ab", "a"}))
}
