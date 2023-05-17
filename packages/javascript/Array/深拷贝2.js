const isObject = obj => (typeof target === 'object' || typeof target === 'function')

function deepClone(target, map = new WeakMap()) {
    if (map.get(target)) {
        return target;
    }

    let constructor = target.constructor

    console.log(target, constructor, constructor.name, 111);

    if (/^(RegExp|Date)$/i.test(constructor.name)) {
        return new constructor(target)
    }

    if (isObject(target)) {
        map.set(target, true)
        const cloneTarget = Array.isArray(target) ? [] : {}
        for(let key in target) {
            if (target.hasOwnProperty(key)) {
                cloneTarget[key] = deepClone(target[key], map)
            }
        }
        return cloneTarget
    } else {
        return target
    }
}

const a = {
    name: 'a',
    address: {
        city: 'b'
    },
    [new Date()]: 'date'
}

deepClone(a)
// console.log(a, deepClone(a))