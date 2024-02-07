const initialArray = [true, 2, 3, 4, 5]
function sum(arr) {
   return  arr.reduce((acc, value) => acc + value)
}
const result = sum(initialArray) 
console.log(result) 
