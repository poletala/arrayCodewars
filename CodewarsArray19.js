const initialArray = ['Say', 'привет', 'to', 'АБЦ Wold']
function latinAlphabetOnly (arr) {
    newArr = []
    for (let i=0; i<arr.length;i++) {
        if (arr[i].match(/[a-z]/i)) {
         return newArr.push(arr[i])
        }
        else {
            console.error('Error')
        }
    }
}

function latinAlphabetOnly (arr) {
    const filtered = arr.filter(samarr => samarr.match(/[а-я\W|_]/i));
    return arr.filter((item) =>  !filtered.includes(item))
}

const result = latinAlphabetOnly(initialArray) 

console.log(result) 



// const sampleArray = ['Say', 'привет', 'to_', 'АБЦ Wold'];
// const filtered = sampleArray.filter(samarr => samarr.match(/[а-я\W|_]/i));
// console.log(filtered);
// let difference = sampleArray.filter((item) => 
// !filtered.includes(item))
// console.log(difference)