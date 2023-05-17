function fn(url, key) {
    const searchParams = new URLSearchParams(url)
    if (Array.isArray(key)) {
        return [...searchParams.values(key)]
    }

    return searchParams.get(key)
}

const a = fn('?a=1&b=2', 'a')

const b = fn('?a=1&b=2', ['a', 'b'])


console.log(a, b);