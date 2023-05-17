function fn(url ,key) {
    const regExp = new RegExp(key + '=([^&]*)')
    const result = url.match(regExp)
    return result ? result[1] : null
}

const a = '?a=1&b=2'

console.log(fn(a, 'a'));