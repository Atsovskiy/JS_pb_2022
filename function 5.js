/* ####Задача 5

Дан массив с числами `[1, 2, -4, 3, -9, -1, 7]`. Создайте из него новый массив, 
где останутся лежать только положительные числа `[1, 2, 3, 7]`. 
Создайте для этого вспомогательную функцию `isPositive(-3)`, 
которая параметром будет принимать число и возвращать true,
 если число положительное, и false — если отрицательное. 
 Данная функция должна обязательно содержать проверку 
 входного параметра, потому что принимать она может только число.

*Для добавление нового элемента в конец массива используйте метод push*

```js
// Пример использования функции isPositvie()
isPositive(-3) // вернет false
isPositive(3) // вернет true
isPositive('s') // Error: parameter type is not a Number */



function isPositiv(arr = [1, 2, -4, 3, -9, -1, 7]){
    let arrPositive = [];
    for (i=0; i<arr.length; i++){
        if (isPositive(arr[i])){
            arrPositive.push(arr[i]);

        }
    }return arrPositive;

}
console.log(isPositiv());

function isPositive(numb){
    if (numb > 0){
        return true;
    } else if (numb <= 0){
        return false;
    } else {
        throw new Error('parameter type is not a Number');
    }
}




