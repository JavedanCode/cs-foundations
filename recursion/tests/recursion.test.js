import fib from "../src/recursion";

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
