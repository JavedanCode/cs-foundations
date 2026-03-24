import HashMap from "../src/hashmap";

describe("HashMap", () => {
  let map;

  beforeEach(() => {
    map = HashMap();
  });

  test("initial state", () => {
    expect(map.length()).toBe(0);
    expect(map.keys()).toEqual([]);
    expect(map.values()).toEqual([]);
    expect(map.entries()).toEqual([]);
  });

  test("set and get values", () => {
    map.set("apple", "red");
    map.set("banana", "yellow");

    expect(map.get("apple")).toBe("red");
    expect(map.get("banana")).toBe("yellow");
  });

  test("get returns null if key not found", () => {
    expect(map.get("missing")).toBe(null);
  });

  test("has works correctly", () => {
    map.set("apple", "red");

    expect(map.has("apple")).toBe(true);
    expect(map.has("banana")).toBe(false);
  });

  test("overwrite existing key", () => {
    map.set("apple", "red");
    map.set("apple", "green");

    expect(map.get("apple")).toBe("green");
    expect(map.length()).toBe(1);
  });

  test("remove existing key", () => {
    map.set("apple", "red");

    expect(map.remove("apple")).toBe(true);
    expect(map.get("apple")).toBe(null);
    expect(map.length()).toBe(0);
  });

  test("remove non-existing key", () => {
    expect(map.remove("missing")).toBe(false);
  });

  test("keys, values, entries", () => {
    map.set("apple", "red");
    map.set("banana", "yellow");

    expect(map.keys()).toContain("apple");
    expect(map.values()).toContain("yellow");

    expect(map.entries()).toEqual(
      expect.arrayContaining([
        ["apple", "red"],
        ["banana", "yellow"],
      ]),
    );
  });

  test("clear removes everything", () => {
    map.set("apple", "red");
    map.set("banana", "yellow");

    map.clear();

    expect(map.length()).toBe(0);
    expect(map.keys()).toEqual([]);
  });

  test("handles collisions correctly", () => {
    map.set("a", 1);
    map.set("b", 2);
    map.set("c", 3);

    expect(map.get("a")).toBe(1);
    expect(map.get("b")).toBe(2);
    expect(map.get("c")).toBe(3);
  });

  test("resizes when load factor exceeded", () => {
    const items = [
      ["apple", "red"],
      ["banana", "yellow"],
      ["carrot", "orange"],
      ["dog", "brown"],
      ["elephant", "gray"],
      ["frog", "green"],
      ["grape", "purple"],
      ["hat", "black"],
      ["ice cream", "white"],
      ["jacket", "blue"],
      ["kite", "pink"],
      ["lion", "golden"],
      ["moon", "silver"],
    ];

    items.forEach(([k, v]) => map.set(k, v));

    expect(map.length()).toBe(items.length);

    items.forEach(([k, v]) => {
      expect(map.get(k)).toBe(v);
    });
  });

  test("overwriting after resize still works", () => {
    map.set("apple", "red");

    for (let i = 0; i < 20; i++) {
      map.set("key" + i, i);
    }

    map.set("apple", "green");

    expect(map.get("apple")).toBe("green");
  });
});
