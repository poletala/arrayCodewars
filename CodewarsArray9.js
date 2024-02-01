const initialArray = [1, 2, 3, 4]
 
//                                   Первый вариант
function multiplyByTwo (arr) {
    return arr.map((value, index) => {
    return value * 2
})
}

//                                     Второй вариант 

// Почему не работает проверка на тип данных?

// function multiplyByTwo (arr) {
//     for (let i = 0; i < arr.length; i++) {
// 		if (typeof arr[i] === 'number') {
// 			return  arr.map((value,index) =>  2 * value)
// 		} else {
// 			return
// 		}
// 	}
// }

const result = multiplyByTwo(initialArray)
console.log(result) 



