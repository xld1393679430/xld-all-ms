/* 
为什么普通 for 循环的性能远远高于 forEach 的性能，请解释其中的原因
*/

let arr = new Array(10000000);

console.time('forEach');
arr.forEach((arr) => {});
console.timeEnd('forEach');

console.time('for');
for (let i = 0; i < arr.length; i++) {};
console.timeEnd('for');

// 结论 不管for循环的len是先赋值或者直接判断都是如下结论
// 1 在10万这个级别下， forEach 的性能是 for的十倍
// 2 在100万这个量级下， forEach 的性能是和for的一致
// 3 在1000万级以上的量级上 forEach 的性能远远低于for的性能




