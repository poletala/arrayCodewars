const initialArray = ['Say', 'привет', 'to', 'АБЦ Wold']

function latinAlphabetOnly (arr) {
    const filtered = arr.filter(samarr => samarr.match(/[а-я\W|_]/i));
    return arr.filter((item) =>  !filtered.includes(item))
}

const result = latinAlphabetOnly(initialArray) 
console.log(result) 

