const initialArray = [8, 0, true, null, undefined, , 7, 44, 9]
function evenNumbersOnly(arr) {
  return arr.filter(element => typeof element === 'number' && element % 2 == 0)
}
const result = evenNumbersOnly(initialArray)
console.log(result)
