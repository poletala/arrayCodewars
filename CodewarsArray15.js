const initialArray = ['js', 'world', 'viktor', 'awdjsdc', 'javes']
function contains(arr) {
  return arr.filter(str => str.includes('js')); 
}
const result = contains(initialArray) 
console.log(result) 
