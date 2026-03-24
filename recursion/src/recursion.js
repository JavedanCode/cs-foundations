// Fibonacci Function
export function fib(n, arr = [0, 1]) {
  if (n <= 0) return [];
  if (n === 1) return [0];
  if (arr.length === n) return arr;

  arr.push(arr[arr.length - 1] + arr[arr.length - 2]);

  return fib(n, arr);
}

// Merge Sort Function
export function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  const mid = Math.floor(arr.length / 2);

  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  const result = [];
  let i = 0;
  let j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i++]);
    } else {
      result.push(right[j++]);
    }
  }

  return result.concat(left.slice(i)).concat(right.slice(j));
}
