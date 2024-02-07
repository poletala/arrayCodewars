const initialArray = ['Say', 'hello', 'to', 'world']
function firstLetters(arr) {
    return arr.reduce((acc, value, index) => {
        const first = value[0]
        acc = acc + first
        return acc
    }, '')
}
const result = firstLetters(initialArray) 
console.log(Array.from(result)) 
