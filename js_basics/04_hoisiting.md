#Hoisting
_когда JS перемещает создание некоторых вещей например функций в начало файла_


```ecmascript 6
console.log(sum(1, 34)) // works
function sum(a, b) {
    return a + b
}

console.log(sum(1, 34)) // works
```

```ecmascript 6
console.log(i) // undefined
var i  = 46
console.log(i) //46
```
- но такое происходит  только с var, переменные сonst и let не подверженны hoisingu

## Function expression and function declaration
- _function declaration можно использовать до того как они были определены_
- _function expression нет_

```ecmascript 6
console.log(square(2)) // works
function square(num) { // function declaration 
    return num ** 2
}

console.log(square(2)) //  not works
const square = (num) => { // function expression 
    return num ** 2
}
```
