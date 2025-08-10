import Stack from "./Stack.js";

function main(){
    const pila = new Stack();
    pila.push(1)
    pila.push(2)
    console.log(pila.pop()); 
    pila.push(3) 
    console.log(pila.pop()); 
}

main();