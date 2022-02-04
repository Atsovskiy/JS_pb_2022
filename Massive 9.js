/* ####Задача 9

Сделайте функцию `arrayFill`, которая будет заполнять массив заданными значениями.
 Первым параметром функция принимает значение, которым заполнять массив, 
 а вторым — сколько элементов должно быть в массиве.

Функция должна содержать проверки:

- Первый параметр обязателен и может принимать только число, строку, объект, массив
- Второй параметр обязателен и может принимать только число

```javascript
arrayFill('x',5); // [x,x,x,x,x]
``` */

function arrayFill(item, el){
    let arr = [];
    if (arr.length == 0){
        arr.length = el;
    }else if (arr.length > 0){
        arr.length = arr.length + el;
    }
    if (typeof item == 'number' || typeof item == 'string' || Array.isArray(item) && typeof el == 'number' ){
        arr.fill(item, 0, el);
        return arr;
    } else {
        throw new Error('parameter type is not a Massive, Number or String');
    }
};

console.log(arrayFill('tt', 5));