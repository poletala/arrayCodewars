const initialArray = [19, 1, 3, 4, 5, 6, 20, 8]
  function evenIndexOnly (arr) {
    return arr.filter((element,index) => typeof element === 'number' && index % 2 == 0)
  }
const result = evenIndexOnly(initialArray) 
console.log(result)


