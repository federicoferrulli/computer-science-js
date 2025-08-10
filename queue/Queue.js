import LinkedList from "../linked-list/LinkedList.js";

class Queue extends LinkedList{
    constructor(){
        super();
    }
    enqueue(val){
        this.insert(val);
        return this;
    }
    dequeue(){
        return this.deleteAt(0);
    }

}
export default Queue;