const initialArray = [1, 2, 13, 234, 59, 9, 40, 78]
const average = array => array.reduce((a, b) => a + b) / array.length;
const a = average(initialArray)

function greaterThanAverage(arr,average) {
     return arr.filter(item => (item >= a));
}
const result = greaterThanAverage(initialArray, a)
console.log(result) 
