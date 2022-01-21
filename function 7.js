/* ####Задача 7

Сделайте функцию `getDivisors`, которая параметром принимает число 
и возвращает массив его делителей (чисел, на которое делится данное 
    число начиная от 1 и заканчивая самим собой). Данная функция должна 
    обязательно содержать проверку входного параметра, потому что принимать 
    она может только число больше 0.

```js
getDivisors(12); // [1, 2, 3, 4, 6, 12]
getDivisors('Content'); // Error: parameter type is not a Number
getDivisors(0); // Error: parameter can't be a 0 */

function getDivisors(content, arr =[]){
    if (content === 0){
        throw new Error('parameter can not be a 0');
    } else if (typeof content === 'number'){
        for (i=1; i<content; i++){
            if (content%i == 0){
                arr.push(i);
            }
        } return arr
    } else  {
        throw new Error('parameter type is not a Number');
    }
        
        
         
        
}

console.log(getDivisors('0'));









