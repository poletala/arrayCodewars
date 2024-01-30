const initialArray1 = [1, 2, 3]
const initialArray2 = [4, 5, 6]
const result = initialArray1.concat(initialArray2)
console.log(result)


const initialArray1 = [1, 2, 3]
const initialArray2 = [4, 5, 6]
Array.prototype.push.apply(initialArray1, initialArray2);
console.log(initialArray1)

const initialArray1 = [1, 2, 3]
const initialArray2 = [4, 5, 6]
initialArray1.push(...initialArray2)
console.log(initialArray1)

const initialArray1 = [1, 2, 3]
const initialArray2 = [4, 5, 6]
const all = [...initialArray1, ...initialArray2];  
console.log(all)