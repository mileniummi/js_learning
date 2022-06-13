# Async

```ecmascript 6
const first = () => {
    console.log('first')
}
const second = () => {
    console.log('second')
}
const third = () => {
    console.log('third')
}

first()
setTimeout(second(), 0) // function goes to callback queue
third()

// first
// third
// second
```