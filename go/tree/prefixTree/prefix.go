package main

import "fmt"

type TreeNode struct {
	Path int
	End int
	Next [26]*TreeNode
}


func (tree *TreeNode)insert(str string )  {
	if len(str) == 0 {
		return
	}
	node := tree
	index := 0
	for i := 0; i < len(str); i++ {
		index = int(str[i] - 'a')
		if node.Next[index] == nil {
			node.Next[index] = &TreeNode{}
		}
		node = node.Next[index]
		node.Path++
	}
	node.End++
}

func main() {
	var root = &TreeNode{};
	root.insert("abc")
	root.insert("abcec")
	fmt.Println(root)
}
