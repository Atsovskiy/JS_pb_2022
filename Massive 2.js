/* ####Задача 2

Создать имплементацию функции `filter`, логика работы такая же как и у родного метода.

Функция должна содержать проверки:

- Первый параметр обязателен и может принимать только массив
- Второй параметр обязателен и может принимать только функцию

```javascript
const arr = [1,2,3];
filter(arr, function(item, i, arr) {}); */

/* let arr1 = [1, -1, 2, -2, 3];
let negativeArr = arr1.filter(function(number){
    return number <0;
});

console.log(negativeArr); */

function filtur(item){
    
    return item < 0 ;

    

}


function negativeArr(arr, filtur){
if (Array.isArray(arguments[0]) !== true) {
    throw new Error('parameter type is not a Massive');
} else if (typeof (arguments[1])  !== 'function'){
    throw new Error('parameter type is not a function');
} else if ( Array.isArray(arguments[0])== true && typeof (arguments[1])  == 'function'){
    
    let myArray = [...arguments[0]];
    
     let myArray2 = myArray.filter(filtur);
    console.log(myArray2);
}
}

negativeArr([1, -1, 2, -2, 3], filtur);

