import LinkedList from "./LinkedList.js";

function main(){
    const lista = new LinkedList();
    lista.insert('Prova1');
    lista.insert('Prova2');
    lista.insert('Prova3');
    lista.insert('Prova4');
    lista.insert('Prova5');
    lista.insertAt('Prova333', 1);
    lista.deleteAt(1);
    console.log(lista.getAt(0));
    lista.print();
}
main();