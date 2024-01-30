const initialArray = [
	{ "name": "Viktor", "age": 24 },
	{ "name": "Aboba", "age": 16 },
]
function adultOnly(arr) {
    return arr.filter(element => element.age >= 18)
}
const result = adultOnly(initialArray) 
console.log(result) 