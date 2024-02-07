const initialArray = [1, 2, 3, 2, 6, 5, 4, 4, 9, 1]

function uniqueOnly(arr) {
    return Array.from(new Set(arr))
} 

const result = uniqueOnly(initialArray) 
console.log(result) 
