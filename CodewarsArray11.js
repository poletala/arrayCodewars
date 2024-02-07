const initialArray = ['Say', 'hello', 'to', 'World']

function uppercaseOnly(arr) {
    let string = arr.reduce((acc, value, index) => {
        const first = value[0];
        acc = acc + first; 
        return acc}, '')
        return string.match(/[A-Z]/g, "");
}
        
console.log(uppercaseOnly(initialArray))
