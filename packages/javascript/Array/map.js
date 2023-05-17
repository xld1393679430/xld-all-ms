Array.prototype.myMap = function(fn) {
    const result = []
    console.log(this, fn, 111)
    for(let i = 0; i < this.length; i++ ){
        if (!this.hasOwnProperty(i)) continue;
        console.log(i, 222)

        result.push(fn(this[i], i, this))
    }
    return result;
}

const arr = [1, 2, 3, 4]
const newArr = arr.myMap(item => item * 2)
console.log(arr, newArr)