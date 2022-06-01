const { BinarySearchTree, AVLTree } = require('../myBinaryTree')

/* let tree = new BinarySearchTree();
tree.insert(11);
tree.insert(7);
tree.insert(15);
tree.insert(5);
tree.insert(3);
tree.insert(9);
tree.insert(8);
tree.insert(10);
tree.insert(13);
tree.insert(12);
tree.insert(14);
tree.insert(20);
tree.insert(18);
tree.insert(25);
tree.insert(6);

function printNode(value) {
  console.log(value);
}
tree.postOrderTraverse(printNode);

console.log(tree.search(1) ? "key 1 found" : "key 1 not found");
console.log(tree.search(8) ? "key 8 found" : "key 8 not found"); */

const AVLtree = new AVLTree()
AVLtree.insert(11)
AVLtree.insert(7)
AVLtree.insert(15)
AVLtree.insert(5)
AVLtree.insert(3)
AVLtree.insert(9)
AVLtree.insert(8)
AVLtree.insert(10)
AVLtree.insert(13)
AVLtree.insert(12)
AVLtree.insert(14)
AVLtree.insert(20)
AVLtree.insert(18)
AVLtree.insert(25)
AVLtree.insert(6)

function printNode (value) {
  console.log(value)
}
AVLtree.inOrderTraverse(printNode)
/*
console.log(AVLtree.search(1) ? "key 1 found" : "key 1 not found");
console.log(AVLtree.search(8) ? "key 8 found" : "key 8 not found"); */
