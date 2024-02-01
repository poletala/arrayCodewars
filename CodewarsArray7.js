const initialArray = [
	{ "name": "Viktor", "age": true },
	{ "name": "Aboba", "age": 16 },
	{ "name": "Abiba", "age": 35 },
]

//                                ПЕРВЫЙ ВАРИАНТ

//              Сначала проверка на соответствие age типу number

let arrayAge = initialArray.map(a => a.age);
function ageCheck (arr) {
    for (let i = 0; i < arr.length; i++) {
		if (typeof arr[i] === 'number') {
			return arr
		} else {
			console.error('Age must be a number')
		}
	}
}
ageCheck(arrayAge)

//                           Сортировка массива

function sortByAge (arr) {
    let arrNew = arr.sort((a,b) => {
        return a.age - b.age
    })
    return arrNew
}
const result = sortByAge(initialArray) 
console.log(result) 



//                                    ВТОРОЙ ВАРИАНТ


// function sortByAge (arr) {
// let arrayAge = arr.map(a => a.age);
//     for (let i = 0; i < arr.length; i++) {
// 		if (typeof arrayAge[i] === 'number') {
// 			let arrNew = arr.sort((a,b) => {
//                 return a.age - b.age
//             })
//             return arrNew
// 		} else {
// 			console.error('Age must be a number')
// 		}
// 	}
// }

// const result = sortByAge(initialArray) 
// console.log(result) 

// Но во втором варианте он все равно выводит и ошибку, и массив
// помогите
// как сделать так, чтобы не выводил массив в случае ошибки? 
// как упростить написание проверки age на соответствию типу number