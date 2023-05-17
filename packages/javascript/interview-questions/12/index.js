const promise = new Promise((resolve, reject) => {
    console.log(1)
    resolve()
    console.log(2)
  })
  
  promise.then(() => {
    console.log(3)
  })
  
  console.log(4)

// 执行结果是：1243
// promise构造函数是同步执行的，then方法是异步执行的