var a = [1, [2, 3], [4, [5, 6]]]

// 方法1,es5
function fn (data) {
    var result = []
    for (let i = 0, len = data.length; i < len; i++) {
        if (Array.isArray(data[i])) {
            result = result.concat(fn(data[i]))
        } else {
            result.push(data[i])
        }
    }
    return result
}

// 方法2
function myFlat(array) {
    while(array.some(item => Array.isArray(item))) {
        console.log(array, 111);
        array = [].concat(...array)
    }
    return array
}

console.log(myFlat(a));



// 方法3 es6
function fn1(data) {
    return data.flat(2)
}


// 如果是二位数组拍平成一维数组 还有contact和apply 方法

var arr1 = [1, [2, 3]]
var result1= [].concat(...arr1)
var result2 = Array.prototype.concat.apply([], arr1)
console.log(result1, result2);

// console.log(fn1(a))