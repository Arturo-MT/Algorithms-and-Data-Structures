function BinarySearchTree() {
  var Node = function (key) {
    this.key = key;
    this.left = null;
    this.right = null;
  };
  var root = null;

  const insertNode = (node, newNode) => {
    if (newNode.key < node.key) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        insertNode(node.right, newNode);
      }
    }
  };

  const inOrderTraverseNode = (node, callback) => {
    if (node !== null) {
      inOrderTraverseNode(node.left, callback);
      callback(node.key);
      inOrderTraverseNode(node.right, callback);
    }
  };

  const preOrderTraverseNode = (node, callback) => {
    if (node !== null) {
      callback(node.key);
      preOrderTraverseNode(node.left, callback);
      preOrderTraverseNode(node.right, callback);
    }
  };

  const postOrderTraverseNode = (node, callback) => {
    if (node !== null) {
      postOrderTraverseNode(node.left, callback);
      postOrderTraverseNode(node.right, callback);
      callback(node.key);
    }
  };

  const minNode = (node) => {
    if (node) {
      while (node && node.left !== null) {
        node = node.left;
      }
      return node.key;
    }
    return null;
  };

  const maxNode = (node) => {
    if (node) {
      while (node && node.right !== null) {
        node = node.right;
      }
      return node.key;
    }
    return null;
  };

  const searchNode = (node, key) => {
    if (node === null) {
      return false;
    }
    if (key < node.key) {
      return searchNode(node.left, key);
    } else if (key > node.key) {
      return searchNode(node.right, key);
    } else {
      return true;
    }
  };

  const findMinNode = (node) => {
    while (node && node.left !== null) {
      node = node.left;
    }
    return node;
  };

  const removeNode = (node, key) => {
    if (node === null) {
      return null;
    }
    if (key < node.key) {
      node.left = removeNode(node.left, key);
      return node;
    } else if (key > node.key) {
      node.right = removeNode(node.right, key);
      return node;
    } else {
      if (node.left === null && node.right === null) {
        node = null;
        return node;
      }
      if (node.left === null) {
        node = node.right;
        return node;
      } else if (node.right === null) {
        node = node.left;
        return node;
      }
      var aux = findMinNode(node.right);
      node.key = aux.key;
      node.right = removeNode(node.right, aux.key);
      return node;
    }
  };

  this.insert = (key) => {
    var newNode = new Node(key);

    if (root === null) {
      root = newNode;
    } else {
      insertNode(root, newNode);
    }
  };
  this.inOrderTraverse = (callback) => inOrderTraverseNode(root, callback);
  this.preOrderTraverse = (callback) => preOrderTraverseNode(root, callback);
  this.postOrderTraverse = (callback) => postOrderTraverseNode(root, callback);
  this.min = () => minNode(root);
  this.max = () => maxNode(root);
  this.search = (key) => searchNode(root, key);
}

function AVLTree() {
  var Node = function (key) {
    this.key = key;
    this.left = null;
    this.right = null;
  };
  var root = null;

  const heightNode = (node) => {
    if (node === null) {
      return -1;
    } else {
      return Math.max(heightNode(node.left), heightNode(node.right)) + 1;
    }
  };

  const rotationRR = (node) => {
    let tmp = node.right;
    node.right = tmp.left;
    tmp.left = node;
    return tmp;
  };

  const rotationLL = (node) => {
    let tmp = node.left;
    node.left = tmp.right;
    tmp.right = node;
    return tmp;
  };

  const rotationLR = (node) => {
    node.left = rotationRR(node.left);
    return rotationLL(node);
  };

  const rotationRL = (node) => {
    node.right = rotationLL(node.right);
    return rotationRR(node);
  };

  let insertNode = (node, element) => {
    if (node === null) {
      node = new Node(element.key);
    } else if (element.key < node.key) {
      node.left = insertNode(node.left, element);
      if (node.left === null) {
        node.left = element;
      } else if (heightNode(node.left) - heightNode(node.right) > 1) {
        if (element.key < node.left.key) {
          node = rotationLL(node);
        } else {
          node = rotationLR(node);
        }
      }
    } else if (element.key > node.key) {
      node.right = insertNode(node.right, element);
      if (node.right === null) {
        node.right = element;
      } else if (heightNode(node.right) - heightNode(node.left) > 1) {
        if (element.key > node.right.key) {
          node = rotationRR(node);
        } else {
          node = rotationRL(node);
        }
      }
    }
    return node;
  };

  const inOrderTraverseNode = (node, callback) => {
    if (node !== null) {
      inOrderTraverseNode(node.left, callback);
      callback(node.key);
      inOrderTraverseNode(node.right, callback);
    }
  };

  const preOrderTraverseNode = (node, callback) => {
    if (node !== null) {
      callback(node.key);
      preOrderTraverseNode(node.left, callback);
      preOrderTraverseNode(node.right, callback);
    }
  };

  const postOrderTraverseNode = (node, callback) => {
    if (node !== null) {
      postOrderTraverseNode(node.left, callback);
      postOrderTraverseNode(node.right, callback);
      callback(node.key);
    }
  };

  const minNode = (node) => {
    if (node) {
      while (node && node.left !== null) {
        node = node.left;
      }
      return node.key;
    }
    return null;
  };

  const maxNode = (node) => {
    if (node) {
      while (node && node.right !== null) {
        node = node.right;
      }
      return node.key;
    }
    return null;
  };

  const searchNode = (node, key) => {
    if (node === null) {
      return false;
    }
    if (key < node.key) {
      return searchNode(node.left, key);
    } else if (key > node.key) {
      return searchNode(node.right, key);
    } else {
      return true;
    }
  };

  const findMinNode = (node) => {
    while (node && node.left !== null) {
      node = node.left;
    }
    return node;
  };

  const removeNode = (node, key) => {
    if (node === null) {
      return null;
    }
    if (key < node.key) {
      node.left = removeNode(node.left, key);
      return node;
    } else if (key > node.key) {
      node.right = removeNode(node.right, key);
      return node;
    } else {
      if (node.left === null && node.right === null) {
        node = null;
        return node;
      }
      if (node.left === null) {
        node = node.right;
        return node;
      } else if (node.right === null) {
        node = node.left;
        return node;
      }
      var aux = findMinNode(node.right);
      node.key = aux.key;
      node.right = removeNode(node.right, aux.key);
      return node;
    }
  };

  this.insert = (key) => {
    var newNode = new Node(key);
    if (root === null) {
      root = newNode;
    } else {
      insertNode(root, newNode);
    }
  };
  this.inOrderTraverse = (callback) => inOrderTraverseNode(root, callback);

  this.preOrderTraverse = (callback) => preOrderTraverseNode(root, callback);

  this.postOrderTraverse = (callback) => postOrderTraverseNode(root, callback);

  this.min = () => minNode(root);

  this.max = () => maxNode(root);

  this.search = (key) => searchNode(root, key);
}

module.exports = { BinarySearchTree, AVLTree };
