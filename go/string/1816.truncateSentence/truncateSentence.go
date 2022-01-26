package main

import "fmt"

/**
https://leetcode-cn.com/problems/truncate-sentence/
 */
func truncateSentence(s string,k int) string  {
	// 字符串的长度，统计单词数，结束的位置索引
	sLen,count,end := len(s),0,0
	for i := 0; i <= sLen; i++ {
		if i == sLen || s[i] == ' ' {
			// 当前遍历结束或者遇到空格了,统计单词的个数
			count++
			if count == k {
				// 找到截断的位置了
				end = i
			}

		}
	}
	return s[:end]
}

func main() {
	fmt.Println(truncateSentence("Hello how are you Contestant",4))// expect: "Hello how are you"
	fmt.Println(truncateSentence("What is the solution to this problem",4))// expect: "What is the solution"
	fmt.Println(truncateSentence("chopper is not a tanuki",5))// expect: "chopper is not a tanuki"
}
