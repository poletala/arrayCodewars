const initialArray = [
	{ "name": "Viktor", "age": 24 },
	{ "name": "Aboba", "age": 16 },
	{ "name": "Abiba", "age": 35 },
]

//                                ПЕРВЫЙ ВАРИАНТ

// function sortByAge (arr) {
//     let arrNew = arr.sort((a,b) => {
//         return a.age - b.age
//     })
//     return arrNew
// }
// const result = sortByAge(initialArray) 
// console.log(result) 



//                                    ВТОРОЙ ВАРИАНТ


function sortByAge (arr) {
let arrayAge = arr.map(a => a.age);
    for (let i = 0; i < arr.length; i++) {
		if (typeof arrayAge[i] === 'number') {
			let arrNew = arr.sort((a,b) => {
                return a.age - b.age
            })
            return arrNew
		} else {
			console.error('Age must be a number')
            return
		}
	}
}
const result = sortByAge(initialArray) 
console.log(result) 

