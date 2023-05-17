/* 
如何把一个字符串的大小写取反（大写变小写小写变大写），例如 ’AbC' 变成 'aBc' 
*/

const str = 'AbC'

// 1
// const result = str.split('').map(item => {
//     if(item.charCodeAt() > 64 && item.charCodeAt() < 91) {
//         item = item.toLowerCase()
//     } else {
//         item = item.toUpperCase()
//     }
//     return item
// }).join('')

// 2
const result = str.split('').map(item => {
    item = item === item.toLowerCase() ? item.toUpperCase() : item.toLowerCase()
    return item
}).join('')

console.log(result, 'result');