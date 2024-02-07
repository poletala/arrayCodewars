const initialArray = [
	{ "name": "Viktor", "age": 24 },
	{ "name": "Aboba", "age": 16 },
	{ "name": "Abiba", "age": 35 },
]

function sortByAge(arr) {
	let arrayAge = arr.map(a => a.age);
	let arrNew = arr.sort((a,b) => {
    return a.age - b.age
  })
  return arrNew
}
const result = sortByAge(initialArray) 
console.log(result) 

