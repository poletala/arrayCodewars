const initialArray = [true, 2, 3, 4, 5]
function sum(arr) {
    for (let i = 0; i < arr.length; i++) {
		if (typeof arr[i] === 'number') {
			return  arr.reduce((acc, value) => acc + value)
		} else {
			console.error(`Element '${arr[i]}' must be a number`)
			return
		}
	}
}
const result = sum(initialArray) 
console.log(result) 
