var array = [1, 2, 3, 4]

// 方法1
function fn1(array) {
    if (Array.isArray(array) && array.length) {
        return Math.max.apply(this, array)
    } else {
        throw '参数非数组或者数组为空'
    }
}

// 方法2
function fn2(array) {
    if (Array.isArray(array) && array.length) {
        return Math.max.call(this, ...array)
    } else {
        throw '参数非数组或者数组为空'
    }
}

// 方法3
function fn3(array) {
    if (Array.isArray(array) && array.length) {
        return [].reduce((prev, current) => {
            return Math.max(prev, current)
        })
    } else {
        throw '参数非数组或者数组为空'
    }
}

console.log(fn3([]));