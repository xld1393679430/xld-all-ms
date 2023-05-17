const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'

// todo 待改进  https://juejin.cn/post/6945319439772434469
class MyPromise {
    constructor(executor) {
        this.resolve = this.resolve.bind(this)
        this.reject = this.reject.bind(this)
        this.then = this.then.bind(this)
        this.resolvePromise = this.resolvePromise.bind(this)
        try {
            executor(this.resolve, this.reject)
        } catch (error) {
            this.reject(error)
        }
    }
    status = PENDING
    value = null
    reason = null
    onFulfilledCallbacks = []
    onRejectedCallbacks = []

    static resolve(param) {
        if (param instanceof MyPromise) {
            return param
        }
        return new MyPromise(resolve => {
            resolve(param)
        })
    }

    static reject(reason) {
        return new MyPromise((_, reject) => reject(reason))
    }

    resolve(value) {
        if (this.status === PENDING) {
            this.status = FULFILLED
            this.value = value
            while (this.onFulfilledCallbacks.length) {
                this.onFulfilledCallbacks.shift()(value)
            }
        }
    }

    reject(reason) {
        if (this.status === PENDING) {
            this.status = REJECTED
            this.reason = reason
            while (this.onRejectedCallbacks.length) {
                this.onRejectedCallbacks.shift()(reason)
            }
        }
    }

    then(onFulfilled, onRejected) {
        onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value;
        onRejected = typeof onRejected === 'function' ? onRejected : reason => { throw reason }
        const promise = new MyPromise((resolve, reject) => {
            if (this.status === FULFILLED) {
                queueMicrotask(() => {
                    try {
                        const x = onFulfilled(this.value)
                        this.resolvePromise(promise, x, resolve, reject)
                    } catch (error) {
                        reject(error)
                    }
                })
            } else if (this.status === REJECTED) {
                queueMicrotask(() => {
                    try {
                        const x = onRejected(this.reason)
                        this.resolvePromise(promise, x, resolve, reject)
                    } catch (error) {
                        reject(error)
                    }
                })
                
            } else if (this.status === PENDING) {
                this.onFulfilledCallbacks.push(() => {
                    queueMicrotask(() => {
                        try {
                            const x = onFulfilled(this.value)
                            this.resolvePromise(promise, x, resolve, reject)
                        } catch (error) {
                            reject(error)
                        }
                    })
                })
                this.onRejectedCallbacks.push(() => {
                    queueMicrotask(() => {
                        try {
                            const x = onRejected(this.reason)
                            this.resolvePromise(promise, x, resolve, reject)
                        } catch (error) {
                            reject(error)
                        }
                    })
                })
            }
        })

        return promise
    }

    resolvePromise(promise, x, resolve, reject) {
        if (promise === x) {
            return reject(new TypeError('Chaining cycle detected for promise #<Promise>'))
        }
        if (x instanceof MyPromise) {
            x.then(resolve, reject)
        } else {
            resolve(x)
        }
    }
}

// module.exports = {
//     MyPromise
// }

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = MyPromise;
}
else {
    if (typeof define === 'function' && define.amd) {
        define([], function () {
            return MyPromise;
        });
    }
    else {
        window.MyPromise = MyPromise;
    }
}
