/* ####Задача 4

Создать имплементацию функции `some`, логика работы такая же как и у родного метода.

Функция должна содержать проверки:

- Первый параметр обязателен и может принимать только массив
- Второй параметр обязателен и может принимать только функцию

```javascript
const arr = [1,2,3];
some(arr, function(item, i, arr) {}); */



function somme(item){
    
    return item === 'string' ;

    

}


function someFunc(arr, somme){
if (Array.isArray(arguments[0]) !== true) {
    throw new Error('parameter type is not a Massive');
} else if (typeof (arguments[1])  !== 'function'){
    throw new Error('parameter type is not a function');
} else if ( Array.isArray(arguments[0])== true && typeof (arguments[1])  == 'function'){
    
    let myArray = [...arguments[0]];
    
     let myArray2 = myArray.some(somme);
    console.log(myArray2);
}
}

someFunc([1, -1, 2, -2, 3], somme);