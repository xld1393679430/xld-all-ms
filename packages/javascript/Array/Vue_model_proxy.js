window.onload = function() {
    const input = document.getElementById('input')
    const text = document.getElementById('text')
    const obj = {}

    const newObj = new Proxy(obj, {
        get: function(target, key, receiver) {
            console.log(target, key, receiver, 111);
            return Reflect.get(target, key, receiver)
        },
        set: function(target, key, value, receiver) {
            console.log(target, key, value, receiver, 222);
            if (key === 'text') {
                input.value = value
                text.innerHTML = value
            }
            return Reflect.set(target, key, value, receiver)
        }
    })

    input.onkeyup = function(e) {
        newObj.text1 = e.target.value
    }
}