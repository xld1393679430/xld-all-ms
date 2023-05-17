function throttle(func, wait, options) {
    var timeout, context, args;
    var previous = 0;
    if (!options) options = {};

    var throttled = function() {
        var now = new Date().getTime();
        if (!previous && options.immediate === false) previous = now;
        var remaining = wait - (now - previous);
        context = this;
        args = arguments;
        if (remaining <= 0 || remaining > wait) {
            if (timeout) {
                clearTimeout(timeout);
                timeout = null;
            }
            previous = now;
            func.apply(context, args);
            if (!timeout) context = args = null;
        } else if (!timeout && options.trailing !== false) {
            timeout = setTimeout(() => {
                previous = options.immediate === false ? 0 : new Date().getTime();
                timeout = null;
                func.apply(context, args);
                if (!timeout) context = args = null;
            }, remaining);
        }
    };
    
    throttled.cancel = function() {
        clearTimeout(timeout);
        previous = 0;
        timeout = null;
    }
    return throttled;
}


(function(){
    let node = document.getElementById('layout')
    let count = 0

    function gtUserAction(e){
        console.log(this, e, count, 1111)
        node.innerHTML = `count: ${count++}`
    }
    
    node.onclick = throttle(gtUserAction, 1000, {immediate: false})
})()