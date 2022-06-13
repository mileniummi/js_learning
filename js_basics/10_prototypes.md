#Prototypes
Прототипы - это механизм, с помощью которого объекты JavaScript наследуют свойства друг от друга.

```ecmascript 6
//__proto__
function Cat(color, name) {
    this.color = color
    this.name = name
}
// расширение прототипа родительского класса
Cat.prototype.voice = function (){
    console.log(`Cat ${this.name} says miau`)
}

const cat = new Cat('Kot', "white")
cat.voice() // Cat Kot says miau

console.log(cat.prototype) // { voice: [Function] }
console.log(cat)  // { name: "Kot", color: "white" }
console.log(cat.__proto__)  // { voice: [Function] }
```

## Собственные свойства обьектов
```ecmascript 6
function Person() {}

Person.prototype.legs = 2
Person.prototype.skin = white

const person = new Person()
person.name = "Mihail"

// in проверяет есть ли свойство в обьекте или его прототипе
console.log('skin' in person) // true

console.log(person.hasOwnProperty('name')) // true
console.log(person.hasOwnProperty('legs')) // false
```

## Создание новых обьектов используя существующий прототип

```ecmascript 6
const proto = { year: 2022 }
const myDate = Object.create(proto)

console.log(myDate.year) // 2022
console.log(myDate.hasOwnProperty('year')) // false
console.log(myDate.__proto__ === proto) // true

// если изменить обьект прото то поле в обьекте тоже поменяется 

proto.year = 2323
console.log(myDate.year) // 2323
```
