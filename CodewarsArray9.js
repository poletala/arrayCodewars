const initialArray = [1, 2, 3, 4]

function multiplyByTwo(arr) {
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'number') {
      newArr.push(arr[i] * 2)
    } 
    if (typeof arr[i] === 'boolean' || typeof arr[i] === 'string' ||
     typeof arr[i] === 'null' || typeof arr[i] === 'undefined') {
        console.error(`Element '${arr[i]}' must be a number`)
        return
    }
  } return newArr
}

const result = multiplyByTwo(initialArray)
console.log(result) 



