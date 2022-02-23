function Node(key, value) {
  this.value = value;
  this.key = key;
  this.pre = null;
  this.last = null;
}
/**
 * 实现双向链表
 */
class DoubleLinkedList {
  constructor() {
    // 头指针
    this.head = null;
    // 尾指针
    this.tail = null;
  }
  /**
   * 添加一个节点到尾巴上
   * @param {Node} newNode
   */
  addNode(newNode) {
    if (newNode == null) return;
    //   当前链表一个节点也没有
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      // 之前就有节点
      // 尾指针的next指向新节点
      this.tail.next = newNode;
      // 新节点的上一个指针指向尾结点
      newNode.last = this.tail;
      // 尾结点更新为新节点
      this.tail = newNode;
    }
  }
  /**
   * 移动节点到尾部
   * @param {Node} node
   */
  moveNodeToTail(node) {
    // 移动的节点刚好是尾结点
    if (node === this.tail) {
      return;
    }

    if (this.head === node) {
      // 移动的节点刚好是头结点
      this.head = node.next;
      this.head.last = null;
    } else {
      // 移动的节点是普通的节点
      node.last.next = node.next;
      node.next.last = node.last;
    }

    // 尾指针的next指向新节点
    this.tail.next = node;
    // 新节点的上一个指针指向尾结点
    node.last = this.tail;
    node.next = null;
    // 尾结点更新为新节点
    this.tail = node;
  }
  /**
   * 删除头指针
   * @returns  {Node} node
   */
  removeHead() {
    //   链表没有节点
    if (this.head === null) {
      return null;
    }
    const node = this.head;
    if (this.head === this.tail) {
      // 链表只有一个节点
      this.head = null;
      this.tail = null;
    } else {
      this.head = node.next;
      node.next = null;
      this.head.last = null;
    }
    return node;
  }
  /**
   * 删除尾结点
   * @returns  {Node} node
   */
  removeTail() {
    // 没有节点
    if (this.tail === null) {
      return null;
    }
    let node = this.tail;
    //   一个节点
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      // 多个节点
      this.tail = node.last;
      node.last = null;
      this.tail.next = null;
    }

    return node;
  }
  /**
   * 删除一个普通节点
   * @param {Node} node
   * @returns  {Node} node
   */
  removeNode(node) {
    if (this.head === null) {
      throw new Error("没有节点了");
    }
    if (node === this.head) {
      // 删除的节点是头结点
      this.removeHead();
    } else if (node === this.tail) {
      // 删除的节点是尾结点
      this.removeTail();
    } else {
      // 删除的节点是普通节点
      node.last.next = node.next;
      node.next.last = node.last;
    }
    return node;
  }
}
/* const dbLinkList = new DoubleLinkedList();
const newNode1 = new Node(1);
dbLinkList.addNode(newNode1);
const newNode2 = new Node(2);
dbLinkList.addNode(newNode2);
const newNode3 = new Node(3);
dbLinkList.addNode(newNode3);
const newNode4 = new Node(4);
dbLinkList.addNode(newNode4);
console.dir(dbLinkList, { depth: null });
dbLinkList.moveNodeToTail(newNode2);
console.dir(dbLinkList, { depth: null });
dbLinkList.removeHead();
console.dir(dbLinkList, { depth: null });
dbLinkList.removeTail();
dbLinkList.removeNode(newNode4);
console.dir(dbLinkList.head, { depth: null }); */
/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  // 保证存储的容量
  this.capacity = capacity;
  // 双向链表(保存每一个操作节点的顺序，越往后时间越新)
  this.list = new DoubleLinkedList();
  // 哈希表（保存每个节点的值）
  this.cached = new Map();
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  // 缓存中存过该数据
  if (this.cached.has(key)) {
    //   在缓存中读取数据
    const node = this.cached.get(key);
    // 更新当前的操作记录
    this.list.moveNodeToTail(node);
    return node.value;
  }
  return -1;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  // 缓存中存过该数据
  if (this.cached.has(key)) {
    // 存过，认为是更新的
    // 更新缓存
    const node = this.cached.get(key);
    node.value = value;
    // 更新操作记录链表
    this.list.moveNodeToTail(node);
  } else {
    // 没存过，认为是新增的
    // 如果当前的缓存已经存满了，
    const newNode = new Node(key, value);
    if (this.cached.size === this.capacity) {
      // 需要删掉一个
      //   删掉操作记录的头结点(操作时间最久的了)
      const head = this.list.removeHead();
      // 在缓存中删掉该节点
      this.cached.delete(head.key);
      // 将新节点添加进缓存
      this.cached.set(key, newNode);
      // 添加节点到操作记录链表中
      this.list.addNode(newNode);
    } else {
      // 直接加一个在缓存
      this.cached.set(key, newNode);
      //   添加一个节点到操作记录链表
      this.list.addNode(newNode);
    }
  }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
