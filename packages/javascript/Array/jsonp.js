function jsonp({ url, params, callbackName }) {
    const generateUrl = () => {
        let dataSrc = ''
        for (let key in params) {
            if (params.hasOwnProperty(key)) {
                dataSrc += `${key}=${params[key]}&`
            }
        }
        dataSrc += `callback=${callbackName}`
        return `${url}?${dataSrc}`
    }

    return new Promise((resolve, reject) => {
        const scriptEle = document.createElement('script')
        scriptEle.src = generateUrl()

        document.body.appendChild(scriptEle)
        window[callbackName] = data => {
            console.log(data, 'data--')
            resolve(data)
            document.removeChild(scriptEle)
        }
    })
}

jsonp({
    url: 'http://localhost:3002/api/jsonp',
    params: { a: 1 },
    callbackName: 'handleCallback'
}).then(res => {
    console.log(res, 'res-----');
})