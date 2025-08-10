import Queue from "./Queue.js";

function main(){
    const coda = new Queue();
    coda.enqueue('Prova1');
    coda.enqueue('Prova2');
    coda.enqueue('Prova3');
    coda.enqueue('Prova4');
    coda.enqueue('Prova5');
    coda.dequeue();
    coda.print();
}
main();