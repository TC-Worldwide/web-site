try {
  throw new DOMException('Example error');
} catch (e) {
  console.error(e);
}

// Replace inflight with lru-cache
import { LRUCache } from 'lru-cache';
const cache = new LRUCache({ max: 500 });
cache.set('key', 'value');
console.log(cache.get('key'));

// Replace q with native JavaScript promises
const promise = new Promise((resolve, reject) => {
  resolve('result');
});
promise.then(result => console.log(result)).catch(error => console.error(error));

// Replace sourcemap-codec with @jridgewell/sourcemap-codec
import { decode, encode } from '@jridgewell/sourcemap-codec';
const decoded = decode('AAAA');
const encoded = encode(decoded);
console.log(encoded);

// Replace stable with native Array#sort
const array = [3, 1, 4, 1, 5, 9];
array.sort((a, b) => a - b);
console.log(array);

// Replace w3c-hr-time with native performance.now() and performance.timeOrigin
console.log(performance.now());
console.log(performance.timeOrigin);

// Replace abab with native atob() and btoa()
const encodedStr = btoa('Hello World');
const decodedStr = atob(encodedStr);
console.log(decodedStr);

// Replace @humanwhocodes/config-array with @eslint/config-array
import { ConfigArray } from '@eslint/config-array';
const configArray = new ConfigArray();
configArray.push({ rules: { semi: 'error' } });
console.log(configArray);

// Replace @humanwhocodes/object-schema with @eslint/object-schema
import { ObjectSchema } from '@eslint/object-schema';
const schema = new ObjectSchema({ type: 'object', properties: { name: { type: 'string' } } });
const result = schema.validate({ name: 'example' });
console.log(result);

// ...existing code...
