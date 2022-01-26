package tree

type Node struct {
	Value int
	Left  *Node
	Right *Node
}
//
//  TransformArrToTreeByRecursion
//  @Description: 通过递归的方式将数组转成树
//  @param arr
//  @param index
//  @return *Node
//
func TransformArrToTreeByRecursion(arr []int, index int) *Node {
	if len(arr) <= 0 {
		return nil
	}
	if index > len(arr) || &(arr[index]) == nil {
		return nil
	}
	node := &Node{Value: arr[index]}
	if (index*2+1) < len(arr) {
		result := TransformArrToTreeByRecursion(arr, index*2+1)
		if result != nil {
			node.Left = result
		}
	}
	if (index*2+2) < len(arr) {
		result := TransformArrToTreeByRecursion(arr, index*2+2)
		if result != nil {
			node.Right = result
		}
	}
	return node
}
//
//  TransformArrToTreeByQueue
//  @Description:通过队列生成树
//  @param arr
//  @return *Node
//
func TransformArrToTreeByQueue(arr []int) *Node {
	queue := []*Node{}
	isLeft := true
	root := &Node{Value: arr[:1][0]}
	arr = arr[1:]
	queue = append(queue, root)
	for i := 0; i < len(arr); i++ {
		node := &Node{Value: arr[i]}
		queue = append(queue, node)
		firstNode := queue[0]
		if isLeft {
			firstNode.Left = node
			isLeft = false
		} else {
			firstNode.Right = node
			isLeft = true
			//	 处理完后，弹出元素
			queue = queue[1:]
		}
	}
	return root
}
