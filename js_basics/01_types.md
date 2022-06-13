##Типы данных

_**6 types**_ 
- null
- undefined 
- string 
- number
- object
- boolean 
+ symbol(es6)

```ecmascript 6
console.log(typeof Symbol('sd')) // symbol
console.log(typeof (() => {})) // function
console.log(typeof NaN) // number
console.log(1/0) // infinity
```

#приведение типов

### _**falsie values**_
- ""
- 0
- null
- undefined
- NaN
- false

**Строки и числа**

- _для строк определен только оператор сложения_

- _null приводится к числу ноль_

- _undefined не приводится к числу_
```ecmascript 6
console.log( 1 + "2") // "12"
console.log( "" + 1 + 0) // "10"
console.log("" -1 + 0) // -1
console.log("3" * "8") // 24
console.log(4 + 10 + "px") // 14px
console.log("px" + 10 + 3) // px13
console.log("42" - 10) // 32
console.log("22px" - 4) // NaN
console.log(null + 2)
console.log(undefined + 2) // NaN
```

##==  vs ===
Двойное равно сравнивает значение с приведением типов а тройное нет

```ecmascript 6
console.log(2 == "2") // true
console.log(2 === "2") // false
console.log(undefined == null) // true
console.log(undefined === null) // false
console.log('0' == false) // true
```
###список неоднозначных сравнений _запомнить_
```ecmascript 6
console.log(false == "") // true
console.log(false == []) // true &&%^^7
console.log(false == {}) // false
console.log('' == 0) // true
console.log('' == []) // true
console.log('' == {}) // false
console.log(0 == []) // true
console.log(0 == {}) // false
console.log(0 == null) // false
```