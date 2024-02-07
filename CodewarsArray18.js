const initialArray1 = [
	{ "name": "Viktor", "age": 24 },
	{ "name": "Abiba", "age": 35 },
	{ "name": "Viktor", "age": 35},
	{ "name": "Abiba", "age": 35 },
]

const initialArray2 = [
	{ "name": "Viktor", "age": 24 },
	{ "name": "Aboba", "age": 16 },
	{ "name": "Abiba", "age": 35 },
]

function unique(arr1, arr2) {
    
    let arrNew = []
    for (let i=0;i<arr1.length;i++)  {
        for (let j=0;j<arr2.length;j++) {
            const stringifiedObj1 = JSON.stringify(arr1[i]);
            const stringifiedObj2 = JSON.stringify(arr2[j]);
            if (stringifiedObj1 === stringifiedObj2) {
                arrNew.push(arr2[j])
            }
        }
    }
    return arrNew
}
const result = unique(initialArray1, initialArray2) 
console.log(result)


