const sayHello = (callback) => {
    console.log('hello')
    callback && callback('hello world')
}

export default sayHello