function sleep(time) {
    return new Promise(resolve => setTimeout(resolve, time || 1000))
}

function fn() {
    console.log('sleep 1000ms');
}

sleep().then(fn)