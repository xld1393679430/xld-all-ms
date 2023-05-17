function debounce(func, wait, immediate) {
    let timer = null

    var debounced = function() {
        let context = this
        let args = arguments

        if (timer) {
            clearTimeout(timer)
        } 
    
        if (immediate) {
            let callNow = !timer
            timer = setTimeout(() => {
                timer = null
            }, wait)
            if(callNow) {
                func.apply(context, args)
            }
        } else {
            timer = setTimeout(() => {
                func.apply(context, args)
            }, wait)
        }
    }

    debounced.cancel = function(){
        if (timer){
            clearTimeout(timer)
            timer = null
        }
    }

    return debounced
}


(function () {
    let node = document.getElementById('layout')
    let count = 0

    function getUserAction(e) {
        console.log(this, e, count, 1111)
        node.innerHTML = `count: ${count++}`
    }

    var setUseAction = debounce(getUserAction, 1000, true);
    // 使用防抖
    node.onclick = setUseAction
})()