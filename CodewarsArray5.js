const initialArray = [1, 2, 3, 2, 6, 5, 4, 4, 9, 1]
const duplicatesOnly = (arr) => [...new Set(arr.filter(elm => arr.indexOf(elm) !== arr.lastIndexOf(elm)))]
const result = duplicatesOnly(initialArray) 
console.log(result) 