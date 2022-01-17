
const firstFn = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('firstFn  ===>')
        resolve()
    }, 3000)
})

const secondFn = () => {
    console.log('secondFn  ===>')
}

export {
    firstFn,
    secondFn
}