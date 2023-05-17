/* 
实现 (5).add(3).minus(2) 功能
*/

Number.prototype.add = function(number) {
    if(typeof number !== 'number') {
        throw new Error('请输入数字')
    }
    return this + number
}

Number.prototype.minus = function(number) {
    if(typeof number !== 'number') {
        throw new Error('请输入数字')
    }
    return this - number
}

const result = (5).add(3).minus(2)

console.log(result);