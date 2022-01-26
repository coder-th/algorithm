package main

import "fmt"
/**
https://leetcode-cn.com/problems/ransom-note/
 */
func canConstruct(ransomNote string, magazine string) bool {
	// 如果ransomeNote都要比magazine的长度还要大，不可能组成需要的
	if len(ransomNote) > len(magazine) {
		return  false
	}
	cnt := [26]int{}
	for i := 0; i < len(magazine); i++ {
		cnt[magazine[i] - 'a']++
	}
	for i := 0; i < len(ransomNote); i++ {
		chIndex := ransomNote[i] - 'a'
		cnt[chIndex]--
		if cnt[chIndex] < 0 {
			return  false
		}
	}
	return true
}

func main() {
	fmt.Println(canConstruct("a","b"))// expect: false
	fmt.Println(canConstruct("aa","ab"))// expect: false
	fmt.Println(canConstruct("aa","aab"))// expect: true

}
