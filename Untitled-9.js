/* #### Задача 9

Отсортировать массив по убыванию.

```javascript
var arr = [1,2,3,4,5,6]; */


var arr = [1,2,3,4,5,6];
    var kuku;
    for (i=0; i<arr.length; i++){
        for (j=0; j<arr.length; j++){
            if (arr[i]>arr[j]){
                kuku = arr[i];
                arr[i]= arr[j];
                arr[j]= kuku;} 
        }
       }   
      console.log(arr);

      
