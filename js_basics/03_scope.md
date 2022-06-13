#Scope
- показывет доступность переменных
- global/local

```ecmascript 6
function fA() {
    let a = 1
    function fB() {
       let b = 2
        function fC() {
            let c = 3
            console.log(a, b, c)
        }
        console.log(a, b)
    }

    console.log(a)
}
```
- the only way :(