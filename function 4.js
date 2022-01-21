
/* ####Задача 4

Сделайте функцию `f`, которая принимает параметром число от 1 до 7, а затем возвращает день недели на русском языке. Данная функция должна обязательно содержать проверку входного параметра, потому что принимать она может только числа от 1 до 7.

```js
f(1); // Воскресенье
f(2); // Понедельник
f(8); // Error: parameter should be in the range of 1 to 7
f('1'); // Error: parameter type is not a Number */



function f(content){
    if (typeof content === 'number' ) {
        let c
        switch (content){
            case 1: c = 'Понедельник'
            break;

            case 2: c = 'Вторник'
            break;

            case 3: c = 'Среда'
            break;

            case 4: c = 'Четверг'
            break;

            case 5: c = 'Пятница'
            break;

            case 6: c = 'Суббота'
            break;

            case 7: c = 'Воскресенье'
            break;

            default:throw new Error('parameter should be in the range of 1 to 7');
            

        } return c


    } else {
      throw new Error('parameter type is not a Number');
  }
  
  };

  console.log((f('8')));
