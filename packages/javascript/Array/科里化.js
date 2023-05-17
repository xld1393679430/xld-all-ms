function curry(fn) {
    let judge = (...args) => {
        console.log(args, fn, fn.length, 11111);
        if (args.length == fn.length) return fn(...args)
        return (...arg) => {
            console.log(args, arg, 22222);
            return judge(...args, ...arg)
        }
    }
    return judge
}

function add(a, b, c) {
    return a + b + c
}
let addCurry = curry(add)
const result = addCurry(1)(2)(3)
console.log(result, 'result');
