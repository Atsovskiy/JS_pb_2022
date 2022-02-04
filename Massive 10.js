/* ####Задача 10

Создать имплементацию функции `reverse`, которая принимает массив в качестве параметра, 
а возвращает массив только в обратном порядке.

Функция должна содержать проверки:

- Первый параметр обязателен и может принимать только массив
- Генерировать ошибку если был передан пустой массив

```javascript
const arr = [3,2,1];
reverse(arr); // [1,2,3] */


function reverse(item){
    if (!Array.isArray(item) ){
        throw new Error('parameter type is not a Massive');
    }else {
        let arr = item.reverse();
        return item;
    }
}

console.log(reverse([3,2,1]))
console.log(reverse(''))



