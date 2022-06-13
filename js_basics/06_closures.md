# Замыкания

- когда фунция замыкает в себе значения из вышестоящего scope
- практическое применение: создание приватных переменных

```ecmascript 6
function sayHello(name) {
    const message = `Hello` + name
    return function () {
        console.log(message)
    }
}

const sayHelloToGeorge = sayHello('George') // замкнули переменную message в функции
sayHelloToGeorge()
```

- Частое задание

```ecmascript 6
const fib = [1, 2, 3, 5, 8, 13]

for (var i = 0; i < fib.length; i++) {
    setTimeout(() => {
        console.log(`fib[${i}]: ${fib[i]}`)
    }, 1500)

}
```

### Как решить?

- поменять var на let
- замыкание

```ecmascript 6
const fib = [1, 2, 3, 5, 8, 13]

for (var i = 0; i < fib.length; i++) {
    (function (j) {
        setTimeout(() => {
            console.log(`fib[${j}]: ${fib[j]}`)
        }, 1500)
    })(i)
}
```
