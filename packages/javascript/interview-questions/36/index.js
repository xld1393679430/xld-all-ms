/* 
实现flatten
*/

let array = [1,2,3,[4,5],[6,[7,[8]]]]

// 方法1
// let result = []
// function rest(list) {
//     list.map(item => {
//         if (item && Array.isArray(item)) {
//             rest(item)
//         } else {
//             result.push(item)
//         }
//     })
// }

// rest(array)

// console.log(result);

// 方法2
Array.prototype._flat = function () {
    const result = []
    const fn = function (array) {
        const len = array.length
        for (let i = 0; i < len; i++) {
            const item = array[i]
            if (Array.isArray(item)) {
                fn(item)
            } else {
                result.push(item)
            }
        }
    }

    fn(this)

    return result
}
console.log(array._flat());