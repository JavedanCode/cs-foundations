# 📘 5. Binary Search Tree (BST)

````md
# Binary Search Tree

This project implements a balanced Binary Search Tree with traversal, insertion, deletion, and rebalancing.

Built as part of **The Odin Project – Computer Science section**.

---

## 📚 What is a Binary Search Tree?

A BST is a tree where:

- Left subtree contains smaller values
- Right subtree contains larger values

---

## 🧠 Concepts Practiced

- Tree structures
- Recursion
- Traversal algorithms (BFS & DFS)
- Balancing trees

---

## ⚙️ Features

- Build a balanced tree from an array
- Insert and delete nodes
- Search values
- Traversals:
  - Level-order (BFS)
  - In-order, Pre-order, Post-order (DFS)
- Calculate height and depth
- Check if tree is balanced
- Rebalance tree

---

## 🧪 Example

```js
const tree = Tree([1, 2, 3, 4, 5]);

tree.isBalanced();
// → true

tree.insert(100);

tree.isBalanced();
// → false

tree.rebalance();
```
````
