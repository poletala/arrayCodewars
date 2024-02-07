const initialArray1 = [1, 2, 3]
const initialArray2 = [4, 5, 6]
//          V1
const result = initialArray1.concat(initialArray2)
console.log(result)


//         V2
// Array.prototype.push.apply(initialArray1, initialArray2);
// console.log(initialArray1)

//          V3
// initialArray1.push(...initialArray2)
// console.log(initialArray1)

//          V4
// const all = [...initialArray1, ...initialArray2];  
// console.log(all)
