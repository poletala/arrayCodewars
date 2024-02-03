const initialArray1 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const initialArray2 = [1, 3, 4, 5, 7, 8, 9, 10, 20, 30, 40]
//                                      Первый вариант
function compare (arr1, arr2) {
    let newArr2 = new Set(arr2);
    return compare = arr1.filter((num) => 
    !newArr2.has(num))
}
//                                      Второй вариант
// function compare (arr1, arr2) {
//     for (let i = 0; i < arr1.length && i < arr2.length; i++) {
//         if (typeof arr1[i] === 'number' && typeof arr2[i] === 'number') {
//             let newArr2 = new Set(arr2)
//             return  arr1.filter((num) => 
//             !newArr2.has(num))
//         }
//         else {
//             return console.error('error')
//         }
//     }
// }

// Почему проверка не работает?

console.log(compare(initialArray1,initialArray2))
