const initialArray = [
	{ "name": "Viktor", "age": 24 },
	{ "name": "Aboba", "age": 16 },
	{ "name": "Abiba", "age": 35 },
	{ "name": "Viktor", "age": 35 },
	{ "name": "Abiba", "age": 35 },
]

function unique(arr) {
    const allNames = arr.map(obj => obj.name);
    let uniqueNames = allNames.filter((item, i, arr) => arr.indexOf(item) !== i);
    return initialArray.filter(initialArrayItem => !uniqueNames.includes(initialArrayItem.name))
}

console.log(unique(initialArray))

