const initialArray = ['Say', 'hello', 'to', 'world', 'javascript', 'students']
function longerThanFive(arr) {
    return arr.filter(element => typeof element === 'string' && element.length > 5)
}
const result = longerThanFive(initialArray) 
console.log(result) 
