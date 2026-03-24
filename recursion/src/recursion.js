// Fibonacci Function
export default function fib(n, arr = [0, 1]) {
  if (n <= 0) return [];
  if (n === 1) return [0];
  if (arr.length === n) return arr;

  arr.push(arr[arr.length - 1] + arr[arr.length - 2]);

  return fib(n, arr);
}
