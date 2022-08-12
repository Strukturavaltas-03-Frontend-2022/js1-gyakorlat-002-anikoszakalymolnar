/*
- Írj egy olyan függvénykifejezést, amely paraméterként vár egy egész számokat tartalmazó tömböt! (Inputellenőrzést nem kell végezni.)
- A függvény neve `brutto` legyen!
- A függvény szorozza meg a tömbelemek értékét 1.27-tel, majd pedig 
__térjen vissza__ az elemek egész számra kerekített összegével!
*/


// function brutto(array) {
//     let szum = 0;
//     for (let i = 0; i < array.length; i++)
//         szum += array[i] * 1.27;
//     return Math.round(szum);
// }



// const brutto = (array) => Math.round(array
//     .map(item => item * 1.27)
//     .reduce((previosValue, currentValue) => previosValue + currentValue));




function brutto(array) {
   return Math.round(array
        .map(item => item * 1.27)
        .reduce((previosValue, currentValue) => previosValue + currentValue));
}
