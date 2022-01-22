/* Сделайте функцию `f`, которая отнимает от первого числа второе и делит на третье. Данная функция должна обязательно содержать проверку входных параметров, потому что принимать она может только числа.

```js
f(9,3,2); // 3
f('s',9,3) // Error: all parameters type should be a Number */

function f(a,b,c){
    if (typeof a === 'number' && typeof b === 'number' && typeof c === 'number'){
        let result = (a-b)/c;
        return result;
    } else {
        throw new Error('all parameters type should be a Number');
}
}

console.log(f(10,'',3));
