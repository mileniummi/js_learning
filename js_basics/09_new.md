## Operator new
new создает инстансы классов ... Это простое взаимодействие между обьектами

```ecmascript 6
//class
function Cat(color, name) {
    this.color = color
    this.name = name
}

const cat = new Cat('black', 'Cat')
console.log(cat) // Cat { name: "Cat", color: "black" }

function myNew(constructor, ...args) {
    const obj = {}
    Object.setPrototypeOf(obj, constructor.prototype)
    return constructor.apply(obj, args) || obj
}

const newCat = myNew(Cat, 'black', "Kot")
console.log(newCat) // Cat { name: "Kot", color: "black" }
```