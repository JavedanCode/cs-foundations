export default function Tree(array) {
  let root = buildTree(array);

  function buildTree(arr) {
    const sorted = [...new Set(arr)].sort((a, b) => a - b);

    function build(start, end) {
      if (start > end) return null;

      const mid = Math.floor((start + end) / 2);
      const node = Node(sorted[mid]);

      node.left = build(start, mid - 1);
      node.right = build(mid + 1, end);

      return node;
    }

    return build(0, sorted.length - 1);
  }

  function insert(value) {
    function insertRec(node, value) {
      if (!node) return Node(value);

      if (value < node.data) {
        node.left = insertRec(node.left, value);
      } else if (value > node.data) {
        node.right = insertRec(node.right, value);
      }

      return node;
    }

    root = insertRec(root, value);
  }

  function includes(value) {
    let current = root;

    while (current) {
      if (value === current.data) return true;
      if (value < current.data) current = current.left;
      else current = current.right;
    }

    return false;
  }

  function deleteItem(value) {
    function deleteRec(node, value) {
      if (!node) return null;

      if (value < node.data) {
        node.left = deleteRec(node.left, value);
      } else if (value > node.data) {
        node.right = deleteRec(node.right, value);
      } else {
        if (!node.left && !node.right) return null;

        if (!node.left) return node.right;
        if (!node.right) return node.left;

        let successor = node.right;
        while (successor.left) {
          successor = successor.left;
        }

        node.data = successor.data;
        node.right = deleteRec(node.right, successor.data);
      }

      return node;
    }

    root = deleteRec(root, value);
  }

  function levelOrderForEach(callback) {
    if (!callback) throw new Error("Callback required");

    const queue = [root];

    while (queue.length) {
      const node = queue.shift();
      if (!node) continue;

      callback(node.data);

      queue.push(node.left);
      queue.push(node.right);
    }
  }

  function inOrderForEach(callback) {
    if (!callback) throw new Error("Callback required");

    function traverse(node) {
      if (!node) return;
      traverse(node.left);
      callback(node.data);
      traverse(node.right);
    }

    traverse(root);
  }

  function preOrderForEach(callback) {
    if (!callback) throw new Error("Callback required");

    function traverse(node) {
      if (!node) return;
      callback(node.data);
      traverse(node.left);
      traverse(node.right);
    }

    traverse(root);
  }

  function postOrderForEach(callback) {
    if (!callback) throw new Error("Callback required");

    function traverse(node) {
      if (!node) return;
      traverse(node.left);
      traverse(node.right);
      callback(node.data);
    }

    traverse(root);
  }

  function height(value) {
    function find(node, value) {
      if (!node) return null;
      if (node.data === value) return node;
      if (value < node.data) return find(node.left, value);
      return find(node.right, value);
    }

    function getHeight(node) {
      if (!node) return -1;
      return 1 + Math.max(getHeight(node.left), getHeight(node.right));
    }

    const target = find(root, value);
    if (!target) return undefined;

    return getHeight(target);
  }

  function depth(value) {
    let current = root;
    let depth = 0;

    while (current) {
      if (value === current.data) return depth;
      if (value < current.data) current = current.left;
      else current = current.right;
      depth++;
    }

    return undefined;
  }

  function isBalanced() {
    function check(node) {
      if (!node) return 0;

      const left = check(node.left);
      if (left === -1) return -1;

      const right = check(node.right);
      if (right === -1) return -1;

      if (Math.abs(left - right) > 1) return -1;

      return 1 + Math.max(left, right);
    }

    return check(root) !== -1;
  }

  function rebalance() {
    const values = [];
    inOrderForEach((v) => values.push(v));
    root = buildTree(values);
  }

  function getRoot() {
    return root;
  }

  return {
    insert,
    includes,
    deleteItem,
    levelOrderForEach,
    inOrderForEach,
    preOrderForEach,
    postOrderForEach,
    height,
    depth,
    isBalanced,
    rebalance,
    getRoot,
  };
}

function Node(data) {
  return {
    data,
    left: null,
    right: null,
  };
}
