// 节流

function throttle(func, delay) {
    let previous = 0

    return function() {
        let now = +new Date();
        if (now - previous > delay) {
            func(this, arguments)
            previous = now
        }
    }
}

(function(){
    let node = document.getElementById('layout')
    let count = 0

    function gtUserAction(e){
        console.log(this, e, count, 1111)
        node.innerHTML = `count: ${count++}`
    }
    
    node.onclick = throttle(gtUserAction, 1000)
})()