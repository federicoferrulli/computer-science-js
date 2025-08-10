import LinkedList from "../linked-list/LinkedList.js";

class Queue extends LinkedList{
    constructor(){
        super();
    }
    enqueue(val){
        this.insert(val);
    }
    dequeue(){
        this.deleteAt(0);
    }

}
export default Queue;