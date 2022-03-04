function TrieNode() {
  this.pass = 0;
  this.end = 0;
  this.nexts = new Map();
}
/**
 * Initialize your data structure here.
 */
var Trie = function () {
  this.root = new TrieNode();
};

/**
 * Inserts a word into the trie.
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
  this.root.pass++;
  let node = this.root;
  for (let i = 0; i < word.length; i++) {
    // const index = word[i].charCodeAt() - "a".charCodeAt();
    const nexts = node.nexts;
    const char = word[i];
    if (!nexts.has(char)) {
      // 该元素之前没有添加过
      //   node.nexts[index] = new TrieNode();
      nexts.set(char, new TrieNode());
    }
    nexts.get(char).pass++;
    node = nexts.get(char);
  }
  node.end++;
};

/**
 * Returns if the word is in the trie.
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
  let node = this.root;
  for (let i = 0; i < word.length; i++) {
    const nexts = node.nexts;
    const char = word[i];
    if (!nexts.has(char)) {
      // 该元素之前没有添加过
      return false;
    }
    node = nexts.get(char);
  }
  return node.end > 0;
};

/**
 * Returns if there is any word in the trie that starts with the given prefix.
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
  let node = this.root;
  for (let i = 0; i < prefix.length; i++) {
    const nexts = node.nexts;
    const char = prefix[i];
    if (!nexts.has(char)) {
      // 该元素之前没有添加过
      return false;
    }
    node = nexts.get(char);
  }
  return node.pass > 0;
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
const trie = new Trie();
trie.insert("abc");
trie.insert("abd");
trie.insert("bd");
console.dir(trie, { depth: null });
