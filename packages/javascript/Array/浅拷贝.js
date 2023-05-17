var a = { name: 1, age: 2 }
var b = [1, 2, 3, 4]

// 浅拷贝1
function fn(obj) {
    if (typeof obj !== 'object') {
        return;
    }

    let newObj = obj instanceof Array ? [] : {}
    for (let key in obj) {
        console.log(key, 'key')
        if (obj.hasOwnProperty(key)) {
            newObj[key] = obj[key]
        }
    }
    return newObj
}

// 浅拷贝2
function shallowClone(v) {
    const isArray = Array.isArray(v);
    if (v === null) {
        return v
    } else if (isArray) {
        return [...v]
    } else if (typeof v === 'object') {
        return { ...v }
    } else {
        return v
    }
}


console.log(shallowClone(a))