





/* ####Задача 1

Напишите функцию `f`, которая возвращает куб числа. Число передается параметром. Данная функция должна обязательно содержать проверку входного параметра, потому что принимать она может только число.

```js
f(2); // 8
f('Content'); // Error: parameter type is not a Number */

function f(content){
  if (typeof content === 'number') {
let c
c = content**3
return c
  } else {
    throw new Error('parameter type is not a Number');
}

};
/* f('ht'); */
f(3);