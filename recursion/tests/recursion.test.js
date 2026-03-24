import { fib } from "../src/recursion";

// Fibonacci Tests

describe("Fibonacci", () => {
  test("returns empty array for n <= 0", () => {
    expect(fib(0)).toEqual([]);
    expect(fib(-5)).toEqual([]);
  });

  test("returns [0] when n = 1", () => {
    expect(fib(1)).toEqual([0]);
  });

  test("returns correct sequence for n = 2", () => {
    expect(fib(2)).toEqual([0, 1]);
  });

  test("returns correct sequence for n = 5", () => {
    expect(fib(5)).toEqual([0, 1, 1, 2, 3]);
  });

  test("returns correct sequence for n = 8", () => {
    expect(fib(8)).toEqual([0, 1, 1, 2, 3, 5, 8, 13]);
  });
});

// Merge Sort Tests

import { mergeSort } from "../src/recursion";

describe("Merge Sort", () => {
  test("mergeSort([]) returns []", () => {
    expect(mergeSort([])).toEqual([]);
  });

  test("mergeSort([73]) returns [73]", () => {
    expect(mergeSort([73])).toEqual([73]);
  });

  test("mergeSort([1, 2, 3, 4, 5]) returns sorted array", () => {
    expect(mergeSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  });

  test("mergeSort([3, 2, 1, 13, 8, 5, 0, 1]) sorts correctly", () => {
    expect(mergeSort([3, 2, 1, 13, 8, 5, 0, 1])).toEqual([
      0, 1, 1, 2, 3, 5, 8, 13,
    ]);
  });

  test("mergeSort([105, 79, 100, 110]) sorts correctly", () => {
    expect(mergeSort([105, 79, 100, 110])).toEqual([79, 100, 105, 110]);
  });
});
