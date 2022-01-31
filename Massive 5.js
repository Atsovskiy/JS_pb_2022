/* Зачет
•
1 балл
Срок сдачи: Вчера
####Задача 5

Создать имплементацию функции `reduce`, логика работы такая же как и у родного метода.

Функция должна содержать проверки:

- Первый параметр обязателен и может принимать только массив
- Второй параметр обязателен и может принимать только функцию
- Третий параметр обязателен и может принимать только строку или число

```javascript
const arr = [1,2,3];
const acc = 0;
reduce(arr, function(acc, item, i, arr) {}, acc); */


function myReduce(acc, item){
    
    return (acc + item) ;
   
};


function mR(arr, myReduce){
if (Array.isArray(arguments[0]) !== true) {
    throw new Error('parameter type is not a Massive');
} else if (typeof (arguments[1])  !== 'function'){
    throw new Error('parameter type is not a function');
} else if ( Array.isArray(arguments[0])== true && typeof (arguments[1])  == 'function'){
    
    let myArray = [...arguments[0]];
    let myArray2 = myArray.reduce(myReduce);
    console.log(myArray2);
     
    
}
}

mR([1, -1, 2, -2, 3], myReduce);