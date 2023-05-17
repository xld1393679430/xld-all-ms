let weakMap = new WeakMap()

let n = {n: 'n'}
weakMap.set(n, 'nn')

let m = {m: 'm'}
weakMap.set(m, 'mm')

// const result = weakMap.get(m)
// console.log(result)

// console.log(...weakMap);

weakMap.delete(m)
console.log(weakMap, weakMap.get(n));

// weakMap.clear()

// let weakMap_1 = new WeakMap([ [{}, 2], [{}, 5] ])

// console.log(weakMap_1.size);