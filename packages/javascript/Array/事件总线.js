class EventEmitter {
    constructor() {
        this.cache = {}
    }

    on(name, fn) {
        console.log(this.cache, name, 1);
        if (this.cache[name]){
            this.cache[name].push(fn)
        } else {
            this.cache[name] = [fn]
        }
    }

    off(name, fn) {
        let tasks = this.cache[name]
        if(tasks) {
            const index = tasks.findIndex(f => f === fn || f.callback === fn)
            if (index >= 0) {
                tasks.splice(index, 1)
            }
        }
    }

    emit(name, once = false, ...args) {
        if (this.cache[name]){
            let tasks = this.cache[name].slice()
            console.log(tasks, name, this.cache, 2);
            for(let fn of tasks) {
                console.log(fn, 'fn')
                fn(...args)
            }
            if(once) {
                delete this.cache[name]
            }
        }
    }
}

let eventBus = new EventEmitter()
let fn1 = function(name, age) {
    console.log(name, age);
}

let fn2 = function(name, age) {
    console.log('hello', name, age);
}


eventBus.on('a', fn1)

eventBus.emit('a', false, '不烂', 12)

