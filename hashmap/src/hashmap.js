export default function HashMap() {
  let capacity = 16;
  const loadFactor = 0.75;
  let size = 0;

  let buckets = new Array(capacity).fill(null).map(() => []);

  function hash(key) {
    let hashCode = 0;
    const prime = 31;

    for (let i = 0; i < key.length; i++) {
      hashCode = (prime * hashCode + key.charCodeAt(i)) % capacity;
    }

    return hashCode;
  }

  function set(key, value) {
    const index = hash(key);
    const bucket = buckets[index];

    for (let pair of bucket) {
      if (pair[0] === key) {
        pair[1] = value;
        return;
      }
    }

    bucket.push([key, value]);
    size++;

    if (size / capacity > loadFactor) {
      resize();
    }
  }

  function get(key) {
    const index = hash(key);
    const bucket = buckets[index];

    for (let pair of bucket) {
      if (pair[0] === key) return pair[1];
    }

    return null;
  }

  function has(key) {
    const index = hash(key);
    const bucket = buckets[index];

    return bucket.some((pair) => pair[0] === key);
  }

  function remove(key) {
    const index = hash(key);
    const bucket = buckets[index];

    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        bucket.splice(i, 1);
        size--;
        return true;
      }
    }

    return false;
  }

  function length() {
    return size;
  }

  function clear() {
    buckets = new Array(capacity).fill(null).map(() => []);
    size = 0;
  }

  function keys() {
    return buckets.flat().map((pair) => pair[0]);
  }

  function values() {
    return buckets.flat().map((pair) => pair[1]);
  }

  function entries() {
    return buckets.flat();
  }

  function resize() {
    const oldBuckets = buckets;

    capacity *= 2;
    buckets = new Array(capacity).fill(null).map(() => []);
    size = 0;

    for (let bucket of oldBuckets) {
      for (let [key, value] of bucket) {
        set(key, value); // rehash into new buckets
      }
    }
  }

  return {
    set,
    get,
    has,
    remove,
    length,
    clear,
    keys,
    values,
    entries,
  };
}
