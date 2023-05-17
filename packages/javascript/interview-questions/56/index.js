/* 

LazyMan('Tony');
// Hi I am Tony

LazyMan('Tony').sleep(10).eat('lunch');
// Hi I am Tony
// 等待了10秒...
// I am eating lunch

LazyMan('Tony').eat('lunch').sleep(10).eat('dinner');
// Hi I am Tony
// I am eating lunch
// 等待了10秒...
// I am eating diner

LazyMan('Tony').eat('lunch').eat('dinner').sleepFirst(5).sleep(10).eat('junk food');
// Hi I am Tony
// 等待了5秒...
// I am eating lunch
// I am eating dinner
// 等待了10秒...
// I am eating junk food

*/

class LazyManClass {
    constructor(name) {
        const msg = `Hi I am ${name}`
        console.log(msg);
        return this
    }

    sleep(time) {
        const msg = `等待了${time}秒...`
        console.log(msg);
        return this
    }
    eat(food) {
        const msg = `I am eating ${food}`
        console.log(msg);
        return this
    }
}

 // LazyMan('Tony');
function LazyMan(name) {
    return new LazyManClass(name)
}
 

// LazyMan('Tony').sleep(10).eat('launch')

LazyMan('Tony').eat('lunch').eat('dinner').sleep(10).eat('junk food');
