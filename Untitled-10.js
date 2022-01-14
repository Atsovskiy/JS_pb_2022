/* #### Задача 10

Отсортировать массив по возрастанию.

```javascript
var arr = [6,5,4,3,2,1]; */

var arr = [6,5,4,3,2,1];

for (i=0; i<arr.length; i++){
    for (j=0; j<arr.length; j++){
        if (arr[i]<arr[j]){
            kuku = arr[i];
            arr[i]= arr[j];
            arr[j]= kuku;} 
    }
   }   
  console.log(arr);

  