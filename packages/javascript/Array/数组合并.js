var a1 = [1 ,2, 3]
var a2 = [3, 4, 5]

function fn1(a1, a2) {
    return a1.concat(a2)
}

function fn2(a1, a2) {
    return [...a1, ...a2]
}

function fn3(a1, a2) {
    const result = []
    Array.prototype.push.call(result, ...a1, ...a2)
    return result
}

// 改变了a1
function fn4(a1, a2) {
    Array.prototype.push.apply(a1, a2)
    return a1
}

console.log(fn4(a1, a2));