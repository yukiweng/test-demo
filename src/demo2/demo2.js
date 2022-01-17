const asyncFn = () => new Promise((resolve, reject) => {
    setTimeout(() => { resolve() }, 3000)
})

export default asyncFn