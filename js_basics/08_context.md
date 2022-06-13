#Context
это, если говорить упрощённо, концепция, описывающая окружение, в котором производится выполнение кода на JavaScript. Код всегда выполняется внутри некоего контекста.

```ecmascript 6
const person = {
    surname:"Stark",
    knows: function (what, name) {
        console.log(`You know ${what} ${name} ${this.surname}`)
    }
}
person.knows('everytning', "Bran") // You know everything Bran Stark

const john = {surname: 'Snow'}

//форсированная передача контекста
// call(:новый контекст, :аргументы)
person.knows.call(john, "nothing", "John") // You know nothing John Snow

//call(:новый контекст, :массив аргументов)
person.knows.apply(john,["nothing", "John"]) // You know nothing John Snow

// bind(:новый контекст, :аргументы)
// не вызывется сразу
const res = person.knows.bind(john,"nothing", "John") // You know nothing John Snow
res()
```

##Классы созданные с помошью ключегого словва function и их контекст
- _Remark:_ стрелочные функции не создают собственного контекста

```ecmascript 6
function Person(name, age) {
    this.name = name
    this.age = age
    console.log(this)
}

const Elena = new Person('Elena', 32)//Person { name: "Elena", age: 32}
```

##Expicit Binding
```ecmascript 6
function logThis() {
    console.log(this)
}

const context = {name: 'sdsf'}
logThis.apply(context) // {name: 'sdsf'}
logThis.call(context) // {name: 'sdsf'}
logThis.bind(context)() // {name: 'sdsf'}
```

##Implicit Binding
к этой функции привязался контекст того оьбекта в котором она была вызванна
```ecmascript 6
const animal = {
    legs: 4,
    logThis: function (){
        console.log(this)
    }
    
}
animal.logThis()
```

