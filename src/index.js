// ...existing code...
import { LRUCache } from 'lru-cache'; // replace require with import

// Example refactor for inflight usage
const cache = new LRUCache({ max: 500 });

// Function to set a value in the cache
function setCache(key, value) {
  cache.set(key, value);
}

// Function to get a value from the cache
function getCache(key) {
  return cache.get(key);
}

// Example usage
setCache('exampleKey', 'exampleValue');
console.log(getCache('exampleKey')); // Output: exampleValue

// ...existing code...
