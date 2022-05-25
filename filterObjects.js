// Список курсов
let courses = [
    {name: 'Courses in England', prices: [0, 100]},
    {name: 'Courses in Germany', prices: [500, null]},
    {name: 'Courses in Italy', prices: [100, 200]},
    {name: 'Courses in Russia', prices: [null, 400]},
    {name: 'Courses in China', prices: [50, 250]},
    {name: 'Courses in USA', prices: [200, null]},
    {name: 'Courses in Kazakhstan', prices: [56, 324]},
    {name: 'Courses in France', prices: [null, null]},
];

// Варианты цен (фильтры), которые ищет пользователь
let requiredRange1 = [null, 200];
let requiredRange2 = [100, 350];
let requiredRange3 = [200, null];

//фунция
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

console.log(filter(requiredRange1, courses))
console.log(filter(requiredRange2, courses))
console.log(filter(requiredRange3, courses))

//сортировка
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

// сортируем вызвав у массива метод sort с нашей функцией сравнения
const sortedCourses = courses.sort(compare)
console.log(sortedCourses)

// Вывод
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
