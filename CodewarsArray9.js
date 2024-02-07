const initialArray = [1, 2, 3, 4]
function multiplyByTwo(arr) {
    for (let i = 0; i < arr.length; i++) {
		if (typeof arr[i] === 'number') {
			return  arr.map((value,index) =>  2 * value)
		} else {
   console.error(`Element '${arr[i]}' must be a number`)
		}
	}
}
const result = multiplyByTwo(initialArray)
console.log(result) 



