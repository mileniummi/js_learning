#References
```ecmascript 6
let a = 42
let b = a
b++
console.log(a) // 42
console.log(b) // 43 все ок
```

###arrays
- коппируется ссылка
```ecmascript 6
let a = [1,2,3]
let b = a
b.push(4)
console.log(a) // [1,2,3,4]
console.log(b) // [1,2,3,4]

let c = [1,2,3,4]

console.log(a === b) // true
console.log(a === c) // false
```
- чтобы получить копию нужно вызвать метод a.concat()
- при сравнении сравнивается ссылка