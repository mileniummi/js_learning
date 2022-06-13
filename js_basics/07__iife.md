#Immediate invoked function expressions
```ecmascript 6
let result = []
for (var i = 0; i < 5; i++) {
    result.push(function () {
        console.log(i)
    })
}

result[2]() // 5
result[3]() // 5
```
##How to fix
```ecmascript 6
let result = []
for (var i = 0; i < 5; i++) {
    (function (j) {
        result.push(function () {
            console.log(j)
        })
    })(i)
}

result[2]() // 5
result[3]() // 5
```