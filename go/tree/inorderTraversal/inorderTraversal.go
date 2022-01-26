package main

import (
	"algorithm/utils/tree"
	"fmt"
)

// 二叉树的前序遍历(递归)
//  preorderTraversal
//  @Description:
//  @param root
//  @return res
//
func preorderTraversal(root *tree.Node) (res []int) {
	var preorder func(node *tree.Node)
	preorder = func(node *tree.Node) {
		if node == nil {
			return
		}
		res = append(res, node.Value)
		preorder(node.Left)
		preorder(node.Right)

	}
	preorder(root)
	return
}

// 前序遍历(栈)
//  preorderTraversalByStack
//  @Description:
//  @param root
//  @return res
//
func preorderTraversalByStack(root *tree.Node) (res []int) {
	var stack []*tree.Node
	for root != nil || len(stack) > 0 {
		for root != nil {
			stack = append(stack, root)
			//--------------------- 保存节点的值 ------------------
			res = append(res, root.Value)
			root = root.Left
		}
		// 弹出最后的元素
		root = stack[len(stack)-1]
		stack = stack[:len(stack)-1]
		// 取出右节点
		root = root.Right
	}
	return
}

//	二叉树中序遍历(通过递归的方式)
//  inorderTraversal
//  @Description:
//  @param root
//  @return []int
//
func inorderTraversal(root *tree.Node) (res []int) {
	var inorder func(node *tree.Node)
	inorder = func(node *tree.Node) {
		if node == nil {
			return
		}

		inorder(node.Left)

		// 保存当前节点的值
		res = append(res, node.Value)

		inorder(node.Right)

	}
	inorder(root)
	return
}

//	通过栈的方式进行中序遍历
//  inorderTraversalByRecursion
//  @Description:
//  @param root
//  @return []int
//
func inorderTraversalByStack(root *tree.Node) (res []int) {
	var stack []*tree.Node
	for root != nil || len(stack) > 0 {
		for root != nil {
			stack = append(stack, root)
			root = root.Left
		}
		// 弹出最后的元素
		root = stack[len(stack)-1]
		stack = stack[:len(stack)-1]
		//--------------------- 保存节点的值 ------------------
		res = append(res, root.Value)
		// 取出右节点
		root = root.Right
	}
	return
}

// 后序遍历(递归)
//  postorderTraversal
//  @Description:
//  @param root
//  @return res
//
func postorderTraversal(root *tree.Node) (res []int) {
	var postorder func(node *tree.Node)
	postorder = func(node *tree.Node) {
		if node == nil {
			return
		}
		postorder(node.Left)
		postorder(node.Right)
		res = append(res, node.Value)
	}
	postorder(root)
	return
}

//	后序遍历(栈)
//  postorderTraversalByStack
//  @Description:
//  @param root
//  @return []int
//
func postorderTraversalByStack(root *tree.Node) (res []int) {

	if root == nil {
		return
	}

	stack := make([]*tree.Node, 0)
	var lastVisited *tree.Node

	for len(stack) > 0 || root != nil{
		for root != nil {
			stack = append(stack, root)
			root = root.Left
		}
		n := stack[len(stack) - 1]
		if n.Right == nil || n.Right == lastVisited {
			res = append(res, n.Value)
			stack = stack[:len(stack) - 1]
			lastVisited = n
		} else {
			root = n.Right
		}
	}

	return
}

func main() {
	root := tree.TransformArrToTreeByQueue([]int{1, 2, 3, 4, 5, 6, 7, 8, 9, 10})
	fmt.Println("前序遍历[递归] => ", preorderTraversal(root))
	fmt.Println("前序遍历[栈] => ", preorderTraversalByStack(root))
	fmt.Println("中序遍历[递归] => ", inorderTraversal(root))
	fmt.Println("中序遍历[栈] => ", inorderTraversalByStack(root))
	fmt.Println("后序遍历[递归] => ", postorderTraversal(root))
	fmt.Println("后序遍历[栈] => ",postorderTraversalByStack(root))
}
