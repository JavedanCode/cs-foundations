import Tree from "../src/bst";

describe("Binary Search Tree", () => {
  let tree;

  beforeEach(() => {
    tree = Tree([1, 2, 3, 4, 5, 6, 7]);
  });

  test("tree is balanced on creation", () => {
    expect(tree.isBalanced()).toBe(true);
  });

  test("includes() finds values correctly", () => {
    expect(tree.includes(4)).toBe(true);
    expect(tree.includes(10)).toBe(false);
  });

  test("insert adds new values", () => {
    tree.insert(8);
    expect(tree.includes(8)).toBe(true);
  });

  test("insert does not duplicate values", () => {
    tree.insert(4);
    let count = 0;

    tree.inOrderForEach((val) => {
      if (val === 4) count++;
    });

    expect(count).toBe(1);
  });

  test("deleteItem removes leaf node", () => {
    tree.deleteItem(7);
    expect(tree.includes(7)).toBe(false);
  });

  test("deleteItem removes node with one child", () => {
    tree.insert(8);
    tree.deleteItem(7);

    expect(tree.includes(7)).toBe(false);
    expect(tree.includes(8)).toBe(true);
  });

  test("deleteItem removes node with two children", () => {
    tree.deleteItem(4);
    expect(tree.includes(4)).toBe(false);
  });

  test("levelOrderForEach traverses correctly", () => {
    const result = [];
    tree.levelOrderForEach((val) => result.push(val));

    expect(result).toEqual([4, 2, 6, 1, 3, 5, 7]);
  });

  test("inOrderForEach returns sorted order", () => {
    const result = [];
    tree.inOrderForEach((val) => result.push(val));

    expect(result).toEqual([1, 2, 3, 4, 5, 6, 7]);
  });

  test("preOrderForEach works correctly", () => {
    const result = [];
    tree.preOrderForEach((val) => result.push(val));

    expect(result).toEqual([4, 2, 1, 3, 6, 5, 7]);
  });

  test("postOrderForEach works correctly", () => {
    const result = [];
    tree.postOrderForEach((val) => result.push(val));

    expect(result).toEqual([1, 3, 2, 5, 7, 6, 4]);
  });

  test("traversal methods throw error without callback", () => {
    expect(() => tree.levelOrderForEach()).toThrow();
    expect(() => tree.inOrderForEach()).toThrow();
    expect(() => tree.preOrderForEach()).toThrow();
    expect(() => tree.postOrderForEach()).toThrow();
  });

  test("height returns correct value", () => {
    expect(tree.height(4)).toBe(2);
    expect(tree.height(1)).toBe(0);
  });

  test("height returns undefined for missing value", () => {
    expect(tree.height(999)).toBe(undefined);
  });

  test("depth returns correct value", () => {
    expect(tree.depth(4)).toBe(0);
    expect(tree.depth(1)).toBe(2);
  });

  test("depth returns undefined if value not found", () => {
    expect(tree.depth(999)).toBe(undefined);
  });

  test("tree becomes unbalanced after inserts", () => {
    tree.insert(100);
    tree.insert(200);
    tree.insert(300);

    expect(tree.isBalanced()).toBe(false);
  });

  test("rebalance restores balance", () => {
    tree.insert(100);
    tree.insert(200);
    tree.insert(300);

    tree.rebalance();

    expect(tree.isBalanced()).toBe(true);
  });

  test("rebalance keeps all values", () => {
    tree.insert(100);
    tree.insert(200);

    tree.rebalance();

    expect(tree.includes(100)).toBe(true);
    expect(tree.includes(200)).toBe(true);
  });
});
