// 自己手写版

const PENDING = 'pending' 
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'

class MyPromise {
    constructor(executor) {
        try {
            executor(this.resolve, this.reject)
        } catch (error) {
            this.reject(error)
        }
    }

    status = PENDING
    value = ''
    reason = ''

    onFulfilledCb = []
    onRejectedCb = []

    resolve = (value) => {
        if (this.status === PENDING) {
            this.status = FULFILLED
            this.value = value
            while(this.onFulfilledCb.length) {
                this.onFulfilledCb.shift()(value)
            }
        }
    }

    reject = (reason) => {
        if (this.status === PENDING) {
            this.status = REJECTED
            this.reason = reason
            while(this.onRejectedCb.length) {
                this.onRejectedCb.shift()(reason)
            }
        }
    }

    then = (onFulfilled, onRejected) => {
        const realOnFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value
        const realOnRejected = typeof onRejected === 'function' ? onRejected : reason => { throw reason}

        const promise = new MyPromise((resolve, reject) => {
            const realOnFulfilledTask = () => {
                queueMicrotask(() => {
                    try {
                        const x = onFulfilled(this.value)
                        resolvePromise(promise, x, resolve, reject)
                    } catch (error) {
                        reject(error)
                    }
                })
            }

            const realOnRejectedTask = () => {
                queueMicrotask(() => {
                    try {
                        const x = onRejected(this.reason)
                        resolvePromise(promise, x, resolve, reject)
                    } catch (error) {
                        reject(error)
                    }
                })
            }

            if (this.status === FULFILLED) {
                realOnFulfilledTask()
            } else if (this.status === REJECTED) {
                realOnRejectedTask()
            } else if (this.status === PENDING) {
                this.onFulfilledCb.push(realOnFulfilledTask)
                this.onRejectedCb.push(realOnRejectedTask)
            }
        })

        return promise
    }

    static resolve(parameter) {
        if (parameter instanceof MyPromise) {
            return parameter
        }

        return new MyPromise(resolve => resolve(parameter))
    }

    static reject(parameter) {
        return new MyPromise((_, reject) => reject(parameter))
    }
    
}

function resolvePromise(promise, x, resolve, reject) {
    if (promise === x) {
        return reject(new TypeError('Chaining cycle detected for promise #<Promise>'))
    }

    if (x instanceof MyPromise) {
        x.then(resolve, reject)
    } else {
        resolve(x)
    }
}

module.exports = <My></My>