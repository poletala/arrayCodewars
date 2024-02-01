'use strict';
const initialArray = [true, 2, 3, 4, 5]
//                                           Первый вариант
// function sum (arr) {
//     if (!isNaN(Number(arr[0]))) 
//    return arr.reduce((acc, value) => 
//    acc + value
//   )}

                                            // Второй вариант
function sum (arr) {
    for (let i = 0; i < arr.length; i++) {
		if (typeof arr[i] === 'number') {
			return  arr.reduce((acc, value) => acc + value)
		} else {
			console.error(`Element '${arr[i]}' must be a number`)
		}
	}
}
// Отдельно проверка на тип данных. Как записать короче? 
//   function elementCheck (arr) {
//     for (let i = 0; i < arr.length; i++) {
// 		if (typeof arr[i] === 'number') {
// 			return arr
// 		} else {
// 			console.error(`Element ${arr[i]} must be a number`)
// 		}
// 	}
// }
// elementCheck(initialArray)

const result = sum(initialArray) 
console.log(result) 