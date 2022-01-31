/* ####Задача 3

Создать имплементацию функции `every`, логика работы такая же как и у родного метода.

Функция должна содержать проверки:

- Первый параметр обязателен и может принимать только массив
- Второй параметр обязателен и может принимать только функцию

```javascript
const arr = [1,2,3];
every(arr, function(item, i, arr) {});
``` */


function everElement(item){
    
    return typeof item == 'number' ;
   

}


function everry(arr, everElement){
if (Array.isArray(arguments[0]) !== true) {
    throw new Error('parameter type is not a Massive');
} else if (typeof (arguments[1])  !== 'function'){
    throw new Error('parameter type is not a function');
} else if ( Array.isArray(arguments[0])== true && typeof (arguments[1])  == 'function'){
    
    let myArray = [...arguments[0]];
    
     let myArray2 = myArray.every(everElement);
    console.log(myArray2);
}
}

everry([1, 5, 2, -54, 3], everElement);


