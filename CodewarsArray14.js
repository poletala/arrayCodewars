const initialArray1 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const initialArray2 = [1, 3, 4, 5, 7, 8, 9, 10, 20, 30, 40]
//                                      Первый вариант
function compare(arr1, arr2) {
    let newArr2 = new Set(arr2);
    return compare = arr1.filter((num) => 
    !newArr2.has(num))
}

console.log(compare(initialArray1,initialArray2))
