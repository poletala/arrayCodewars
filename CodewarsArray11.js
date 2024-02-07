const initialArray = ['Say', 'hello', 'to', 'World']

function uppercaseOnly(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'string') {
            let string = arr.reduce((acc, value, index) => {
                const first = value[0];
                acc = acc + first; 
                return acc}, '')
            return string.match(/[A-Z]/g, "");
        }
         else {return}
    }
}
console.log(uppercaseOnly(initialArray))
