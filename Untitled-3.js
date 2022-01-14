/* ####Задача 3

Перепишите код, заменив оператор `switch` на оператор `if..else`:

```js
switch (val) {
case 'a':
console.log( 'a' );
break;

case 'b':
case 'c':
case 'd':
case 'e':
console.log( 'others' );
break;

default:
console.log( 'unknown' );
}  */

if (val == 'a') { console.log( 'a' ) }
  if (val == 'b') { console.log( 'others' )}
  if (val == 'с') { console.log( 'others' )}
  if (val == 'd') { console.log( 'others' )}
  if (val == 'e') { console.log( 'others' )}
    else {console.log( 'unknown' )};

    //      либо

    let val;
    if (val == 'a') { console.log( 'a' ) }
    else {console.log( 'unknown' )}; 