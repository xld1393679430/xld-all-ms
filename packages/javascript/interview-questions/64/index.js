Promise.prototype.myFinally = function (cb) {
    let p = this.constructor
    return this.then(
        value => p.resolve(cb()).then(() => value),
        reason => p.resolve(cb()).then(() => { throw new Error(reason) })
    )
}

// const promise = new Promise((resolve) => {
//     resolve(1)
// }).then(() => { })
//     .catch(() => { })
//     .finally(() => { })