const initialArray = [1, 20, 13, 234, 59, 9, 40, 78]
const average = array => array.reduce((a, b) => a + b) / array.length;
const a = average(initialArray)

function greaterThanAverage(arr,average) {
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'number') {
            return arr.filter(item => (item >= a));
          }
        else {
            return console.error(`Element '${arr[i]}' is not a number`)
        }
    }
}

const result = greaterThanAverage(initialArray, a)
console.log(result) 
