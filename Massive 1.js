/* ####Задача 1

Создать имплементацию функции `forEach`, логика работы такая же как и у родного метода.

Функция должна содержать проверки:

- Первый параметр обязателен и может принимать только массив
- Второй параметр обязателен и может принимать только функцию

```javascript
const arr = [1,2,3];
forEach(arr, function(item, i, arr) {}); */
/* let g = ["Яблоко", "Апельсин", "Груша"]; */


 
function f(t,tt){
    if ( Array.isArray(arguments[0])== true && typeof (arguments[1])  == 'function'){
        let arr = [...arguments[0]];
        g(arr);
        
}   else if (Array.isArray(arguments[0]) !== true) { 
    throw new Error('parameter type is not a Massive');
}   else if (typeof (arguments[1])  !== 'function'){
    throw new Error('parameter type is not a function');
}


}

function g(arr){
    arr.forEach( function(item, i, arr) {
       console.log (i + ': '+ item + '(массив:' + arr + ' )');
    
});
}


f(["Яблоко", "Апельсин", "Груша"], g);



























