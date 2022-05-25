Полное решение находится в файле [filterObjects.js](filterObjects.js)

его можно запустить командой: node filterObjects.js

**Условие задачи:**

На сайте UniPage есть подборка интересных языковых курсов. У каждого курса есть цена, которая является диапазоном.
Например:

от 100 до 200 рублей;
от 500 рублей;
до 400 рублей.
Пользователю сайта нужно найти подходящие ему курсы. Для этого есть фильтр, где пользователь может задать подходящий ему диапазон цен.

**Требование:**

Опишите, как можно отфильтровать список курсов, чтобы выдались только подходящие по цене? Реализуйте на JavaScript (или TypeScript) функцию, проводящую такую фильтрацию.

**Входные данные:**
``` ecmascript 6
    // Список курсов
    let courses = [
        { name: "Courses in England", prices: [0, 100] }, 
        { name: "Courses in Germany", prices: [500, null] }, 
        { name: "Courses in Italy", prices: [100, 200] }, 
        { name: "Courses in Russia", prices: [null, 400] },
        { name: "Courses in China", prices: [50, 250] },
        { name: "Courses in USA", prices: [200, null] },
        { name: "Courses in Kazakhstan", prices: [56, 324] },
        { name: "Courses in France", prices: [null, null] },
    ];

    // Варианты цен (фильтры), которые ищет пользователь
    let requiredRange1 = [null, 200];
    let requiredRange2 = [100, 350];
    let requiredRange3 = [200, null];
```
**Вывод:**
``` ecmascript 6
let range1 = [
    {name: 'Courses in England', prices: [0, 100]},
    {name: 'Courses in Italy', prices: [100, 200]}
]
let range2 = [{name: 'Courses in Italy', prices: [100, 200]}]
let range3 = [
    {name: 'Courses in Germany', prices: [500, null]},
    {name: 'Courses in USA', prices: [200, null]}
]
```
**Функция**
Вызовем у массива фунцию filter, будем возвращать true если данный диапазон нам подходит и false если он не подходит.
Если левая граница диапазона null, нам не важна минимальная цена курса.
Иначе, если минимальная цена курса неизвестна, либо ее значения меньше нужных нам границ, этот курс нам не подходит.
Тоже самое для правой границы диапазона, только с противоположным знаком.
```ecmascript 6
function filter([leftBoundary, rightBoundary], array) {
    return array.filter((course) => {
        if (leftBoundary !== null) {
            if (course.prices[0] === null || course.prices[0] < leftBoundary) {
                return false;
            }
        }
        if (rightBoundary !== null) {
            if (course.prices[1] === null || course.prices[1] > rightBoundary) {
                return false;
            }
        }
        return true
    });
}
```
Дополнительно, вы также можете реализовать алгоритм сортировки курсов по цене.

**Сортировка**

```ecmascript 6
// сначала нужно написать функцию сравнения двух обьектов
// числа с null сравнивать не удобно, поэтому:
//  если левая граница null -> цена может начинатся от нуля
//  если правая граница null -> цена может быть бесконечно большой
// сравниваем минимальную цену(Left), если она меньше, значит и диапазон меньше
// если она одинаковая то смотрим на правую границу(Right), если она меньше, значит и диапазон меньше

function compare(a, b) {
    const aLeft = a.prices[0] === null ? 0 : a.prices[0]
    const bLeft = b.prices[0] === null ? 0 : b.prices[0]
    const aRight = a.prices[1] === null ? Infinity : a.prices[1]
    const bRight = b.prices[1] === null ? Infinity : b.prices[1]
    if (aLeft < bLeft) {
        return -1
    }
    if (aLeft > bLeft) {
        return 1
    } else {
        if (aRight < bRight) {
            return -1
        }
        if (aRight > bRight) {
            return 1
        }
        return 0
    }
}
// далее сортируем вызвав у массива метод sort с нашей функцией сравнения
```
**Вывод**
```ecmascript 6
let answers = [
    {name: 'Courses in England', prices: [0, 100]},
    {name: 'Courses in Russia', prices: [null, 400]},
    {name: 'Courses in France', prices: [null, null]},
    {name: 'Courses in China', prices: [50, 250]},
    {name: 'Courses in Kazakhstan', prices: [56, 324]},
    {name: 'Courses in Italy', prices: [100, 200]},
    {name: 'Courses in USA', prices: [200, null]},
    {name: 'Courses in Germany', prices: [500, null]}
]
// у этой задачи много решений в зависимости от того какой курс считать дешевле
// в моем решении я считаю дешевле тот курс у котого минимальная возможная цена меньше
```



