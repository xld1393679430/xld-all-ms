function debounce(func, delay) {
    let timer;
    return function() {
        let context = this;
        let args = arguments;
        timer && clearTimeout(timer)
        timer = setTimeout(function() {
            func.apply(context, args)
        }, delay)
    }
}

(function(){
    let node = document.getElementById('layout')
    let count = 0

    function gtUserAction(e){
        console.log(this, e, count, 1111)
        node.innerHTML = `count: ${count++}`
    }
    
    node.onmousemove = debounce(gtUserAction, 100)
})()