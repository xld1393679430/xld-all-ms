const a1 = [1, 2, 3, 4]
let b1 = a1.reduce((prev, cur) => prev + cur, 0)

let a2 = [{age: 1}, {age: 2}, {age: 4}]
let b2 = a2.reduce((prev, cur, index, arr) => {
    console.log(prev, cur, index, arr);
    return prev + cur.age
}, 0)

console.log(b1, b2);