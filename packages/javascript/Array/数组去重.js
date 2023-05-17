// es5 
function fn(data) {
    return data.filter((item, index, array) => {
        console.log(item, index, array, 2222)
        return array.indexOf(item) === index
    })
}

var a = [1, 2, 2, 3]
// var b = fn(a)
// console.log(a, b, 'result')


// es6

const c = [...new Set(a)]

console.log(a, c )