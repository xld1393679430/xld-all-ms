/* 

[2, 10, 3, 4, 5, 11, 10, 11, 20] ->  [[2, 3, 4, 5], [10, 11], [20]]
*/

const data = [2, 10, 3, 4, 5, 11, 10, 11, 20] 

const a = data.sort((a, b) => a - b)

function fn(array, result) {
    let b = []
    for(let i = 0, len = array.length; i < len; i++) {
        let current = array[i]
        if (b.length) {
            let last = b[b.length - 1]
            if (current - last !== 1) {
                result.push(b)
                b = []
            } else {
                b.push(current)
            }
        } else {
            if (i === len - 1){
                b.push(current)
                result.push(b)
                b = []
            } else {
                b.push(current)  
            }
        
        }
    }
    return result
}

const result = fn(a, [])
console.log(result, 'result');