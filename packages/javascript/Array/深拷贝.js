var a = {name: 1, age: 2, address: {city: 'c'}}

function fn(obj) {
    if (typeof obj !== 'object' || typeof obj !== null) {
        return obj
    }

    let newObj = obj instanceof Array ? [] : {}
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            if (typeof obj[key] === 'object') {
                newObj[key] = fn(obj[key])
            } else {
                newObj[key] = obj[key]
            }
        }
    }

    return newObj
}
var b = fn(a)
a.address.city = 'd'
console.log(b, a)