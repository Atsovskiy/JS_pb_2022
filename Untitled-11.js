/* #### Задача 11

Дан массив с элементами `[2, 5, 9, 15, 0, 4]`. С помощью цикла `for`
 и оператора `if` выведите на экран столбец 
тех элементов массива, которые больше 3-х, но меньше 10. */


var arra = [2, 5, 9, 15, 0, 4];
  for (i=0; i<arra.length; i++){
      if (arra[i] > 3 && arra[i] < 10) {
          console.log(arra[i]);
      }
  }