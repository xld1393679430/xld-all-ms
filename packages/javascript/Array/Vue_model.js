window.onload = function() {
    const input = document.getElementById('input')
    const text = document.getElementById('text')
    const data = {
        value: ''
    }
    Object.defineProperty(data, 'value', {
        get: function() {
            return input.value
        },
        set: function(val) {
            input.value = val
            text.innerText = val
        }
    })

    input.onkeyup = function(e) {
        data.value = e.target.value
    }
}